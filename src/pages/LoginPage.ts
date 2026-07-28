import { test, expect, Page} from '@playwright/test';

export class LoginPage {
  readonly page: any;
  readonly usernameInput: any;
  readonly passwordInput: any;
  readonly loginButton: any;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[placeholder="Enter your email"]');
    this.passwordInput = page.locator('input[placeholder="Enter your password"]');
    this.loginButton = page.locator('//ion-button[@data-testid="login-submit"]');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}