import { test , expect } from '@playwright/test';

export class DashboardPage {
  readonly page: any;
  readonly welcomeMessage: any;

  constructor(page: any) {
    this.page = page;
    this.welcomeMessage = page.locator('.welcome-message');
  }
}