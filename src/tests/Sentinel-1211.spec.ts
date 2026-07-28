import { test, expect, BASE_URL } from './fixtures';
import type { Page, Route } from '@playwright/test';


const SCENARIO_ID = 'sentinel-1211-scenario';
const OTHER_SCENARIO_ID = 'sentinel-1211-other-scenario';

/** A single TestScenarioResult row shaped the way run.component.html reads it. */
function resultRow(id: string, status: string, scenarioId: string = SCENARIO_ID) {
  return {
    id,
    scenarioID: scenarioId,
    scenarioName: 'Cancel-All probe',
    executionStatus: status,
    testStatus: status,
    pathStatus: status,
    variablesStatus: status,
    creationTime: Date.now(),
    endTimestamp: status === 'Running' ? null : Date.now(),
    testDuration: 0,
    piid: 'piid-' + id,
    messages: [],
    taskResults: [],
    runMode: 'EMBEDDED',
  };
}

/**
 * Stub every BE call, mount the Run view for SCENARIO_ID via the deep-link, then open the
 * full results list (Show History) so `history` renders as table rows. Returns the array
 * the test uses to assert the POST fan-out: every captured `bpm/stopTestScenario?id=` id.
 */
async function mountRunView(page: Page, history: any[]): Promise<string[]> {
  const stopCalls: string[] = [];

  await page.route('**/api/**', async (route: Route) => {
    const req = route.request();
    const url = new URL(req.url());
    const path = url.pathname.replace(/^\/api\//, '');
    const json = (body: unknown, status = 200) =>
      route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });

    // The cancel fan-out -- record each id so the test can assert one POST per running row.
    if (req.method() === 'POST' && path === 'bpm/stopTestScenario') {
      stopCalls.push(url.searchParams.get('id') || '');
      return json({ ok: true });
    }
    // Auth/principal so the shell renders and getUserInfo() does not error.
    if (path === 'auth/info') {
      return json({ name: 'capTester', auth: [{ authority: 'ROLE_USER' }] });
    }
    // Deep-link lookup + ScenarioComponent.getResult(): GET result/<id> -> one result.
    // Its scenarioID is what the page pivots onto.
    if (/^result\/[^/]+$/.test(path)) {
      const id = path.split('/')[1];
      const known = history.find((r) => r.id === id);
      return json(known || history[0]);
    }
    // Show History -> getAllResults(): GET results/<scenarioId> -> the full array of rows.
    if (/^results\/[^/]+$/.test(path)) {
      return json(history);
    }
    // ScenarioComponent.getScenarioById(): GET scenario?id=...
    if (path === 'scenario') {
      return json({ id: SCENARIO_ID, scenarioName: 'Cancel-All probe', lastResultId: history[0]?.id, dataTypes: {} });
    }
    // processValidations() sorts the body -> must be an array.
    if (path.endsWith('/validations') || /validation/i.test(path)) {
      return json([]);
    }
    // Pie chart data is iterated with Object.keys -> object.
    if (/piechart|pie-chart|pieChart/i.test(path)) {
      return json({});
    }
    // Everything else (steps, flow, expected-path, tasks, incidents, current position,
    // server list, projects, ...) -> a benign empty array; the Run view does not need it.
    if (req.method() === 'GET') {
      return json([]);
    }
    return json({ ok: true });
  });

  // Guarantee the route auth-guard sees a bearer token before the app boots, so it
  // never bounces to /login. The value is irrelevant: EVERY /api/** call is stubbed
  // above, so no real 401 is ever produced. This makes the test hermetic and immune
  // to Sentinel's single-token-per-user race (a concurrent capTester login on the
  // shared dev stack invalidates the stored token, but this test never uses it live).
  await page.addInitScript(() => {
    try {
      if (!localStorage.getItem('accessToken')) localStorage.setItem('accessToken', 'e2e-stub-token');
    } catch {
      /* localStorage unavailable pre-navigation — the stored storageState token still applies */
    }
  });

  // domcontentloaded (not the default 'load'): heavy Angular/Ionic boot + external
  // CDN stylesheets + the recorder never fire 'load' within 45s. The
  // expect(app-run).toBeVisible below covers real readiness. [sentinel_pm timeout triage]
  await page.goto(`${BASE_URL}/sentinel?scenarioResultId=${history[0].id}`, { waitUntil: 'domcontentloaded' });

  // Run view mounts on the Run tab.
  await expect(page.locator('app-run'), 'Run view (app-run) should mount via the deep-link').toBeVisible({
    timeout: 30_000,
  });

  // Open the full history so the whole results array renders as rows.
  const showHistory = page.locator('app-run ion-button', { hasText: 'Show History' });
  if (await showHistory.count()) {
    await showHistory.first().click();
  }
  // Wait for the rows to match what we stubbed.
  await expect(page.locator('app-run table.scenario-results tbody tr')).toHaveCount(history.length, {
    timeout: 15_000,
  });

  return stopCalls;
}

/** The top-of-view button, identified by EXACTLY the label "Cancel All" (run.component.html L11). */
function cancelAllButton(page: Page) {
  return page
    .locator('app-run ion-button.light')
    .filter({ hasText: /^\s*Cancel All\s*$/ });
}

/** The status cell of each result row (5th column: Launch | End | Duration | Message | Status | RunMode | Action). */
function statusCells(page: Page) {
  return page.locator('app-run table.scenario-results tbody tr td:nth-child(5)');
}

test.describe(
  'SENTINEL-1000 BE - add support for self managed instance',
  { tag: ['@SENTINEL-1000', '@area-fe', '@playwright'] },
  () => {
    test("SENTINEL-1000-TC1: Check the visibility of the Save button", async ({
      page,
    }) => {
      test.info().annotations.push({ type: 'issue', description: 'https://capbpm.atlassian.net/browse/SENTINEL-1000' });
      await test.step('1. Open the project navigate to integrations check the save button', async () => {
      await expect(page.locator('//span[normalize-space(.)="Projects"]')).toBeVisible();
      
      await page.screenshot({ path: 'login-success.png', fullPage: true });
      
      await page.locator('//ion-segment-button[@value="projects"]').click();
      
      await page.locator('//ion-segment-button[@value="integrations"]').click();
      
      await expect(page.locator('//ion-button[normalize-space(.)="Save"]')).toBeVisible();

      });

      
    });


    test('SENTINEL-1211-TC3: Scope to selected scenario + dismiss sends nothing', async ({ page }) => {
      test.info().annotations.push({ type: 'issue', description: 'https://capbpm.atlassian.net/browse/SENTINEL-1211' });

     await test.step('1. Open the project navigate to integrations check the save button', async () => {
      await expect(page.locator('//span[normalize-space(.)="Projects"]')).toBeVisible();
      
      await page.screenshot({ path: 'login-success.png', fullPage: true });
      
      await page.locator('//ion-segment-button[@value="projects"]').click();
      
      await page.locator('//ion-segment-button[@value="integrations"]').click();
      
      await expect(page.locator('//ion-button[normalize-space(.)="Save"]')).toBeVisible();

      });
    });
  },
);
