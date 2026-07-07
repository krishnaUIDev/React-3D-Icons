import { test, expect } from "@playwright/test";

test.describe("R3D Icons Catalog Showcase & Customizer Sandbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load landing showcase catalog with grid layout", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("3D Icons");
    await expect(page.locator("input[placeholder*='Search']:visible").first()).toBeVisible();

    const cards = page.locator(".group");
    await expect(cards.first()).toBeVisible();
    const initialCount = await cards.count();
    expect(initialCount).toBeGreaterThan(0);
  });

  test("should search catalog and filter results correctly", async ({ page }) => {
    const searchInput = page.locator("input[placeholder*='Search']:visible").first();
    await searchInput.focus();
    await searchInput.pressSequentially("Gamepad", { delay: 50 });
    
    const clearButton = page.locator("button:has-text('Clear')");
    await expect(clearButton).toBeVisible();

    // Wait for the catalog search filter to update the DOM
    await expect(page.locator(".group p:has-text('Gamepad')").first()).toBeVisible();
    
    // Verify non-matching items are filtered out
    await expect(page.locator(".group p:has-text('VRHeadset')").first()).toBeHidden();
  });

  test("should toggle list view layout successfully", async ({ page }) => {
    const listBtn = page.locator("button[title='List View']");
    await listBtn.click();

    const listRows = page.locator(".group.flex-col.sm\\:flex-row");
    await expect(listRows.first()).toBeVisible();
    
    await expect(page.locator("button:has-text('Copy SVG')").first()).toBeVisible();
  });

  test("should navigate to customizer sandbox and test surprise randomizer", async ({ page }) => {
    // Click on the text label of the first card to bubble navigation cleanly
    const cardLabel = page.locator(".group p").first();
    await cardLabel.click();

    // Wait for route state redirect
    await page.waitForURL(/.*icons.*/, { timeout: 12000 });
    await expect(page.locator("span:has-text('Live Preview Sandbox')")).toBeVisible();

    const surpriseBtn = page.locator("button[title*='Surprise Me']");
    await expect(surpriseBtn).toBeVisible();

    await surpriseBtn.click();
    
    const flashOverlay = page.locator(".absolute.inset-0.bg-white\\/70");
    await expect(flashOverlay).toBeAttached();
  });
});
