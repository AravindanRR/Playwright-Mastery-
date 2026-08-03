import { test, expect } from "../../fixtures/baseFixture";

test("Login to OrangeHRM", async ({ loginPage, dashboardPage }) => {

    await loginPage.navigateToLoginPage();
    await loginPage.login("Admin", "admin123");
    await dashboardPage.verifyDashboard();

});