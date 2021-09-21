import test, { expect, Locator } from "@playwright/test";

test.describe('Given user arrives to a landing page,', () => {
    let title: Locator;
    let logo: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');

        title = page.locator('.title');
        logo = page.locator('.logo');
    })

    test('when page is visible, then it should match the screenshot visually', async ({ page }) => {
        const screenshot = await page.screenshot({ fullPage: true, type: 'png' });

        expect(screenshot).toMatchSnapshot('landing.png');
    })

    test('when header becomes visible, then it should contain legible text', async () => {
        await expect(title).toContainText('Hello Vite + React');
    })

    test('when logo becomes visible, then it should contain accessible alternative text', async () => {
        await expect(logo).toHaveAttribute('alt', 'logo');
    })
})
