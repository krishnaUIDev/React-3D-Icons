import { test, expect } from "@playwright/test";

test.describe("R3D Icons Catalog Showcase & Customizer Sandbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load landing showcase catalog with grid layout", async ({ page }) => {
    // Check static heading title to avoid timing out on the typewriter effect
    await expect(page.locator("h1")).toContainText("Beautifully Crafted");
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

    // Locate the unique flash indicator container (z-30)
    const flashOverlay = page.locator(".z-30");
    await expect(flashOverlay).toBeAttached();
  });

  test("should filter by categories on the landing page", async ({ page }) => {
    // Verify initial state shows multiple items from different categories
    await expect(page.locator(".group p:has-text('Gamepad')").first()).toBeVisible();

    // Click the "Networking" category button
    const networkingTab = page.locator("button:has-text('Networking')");
    await expect(networkingTab).toBeVisible();
    await networkingTab.click();

    // Verify networking items are visible, others are hidden
    await expect(page.locator(".group p:has-text('Router')").first()).toBeVisible();
    await expect(page.locator(".group p:has-text('Gamepad')").first()).toBeHidden();
  });

  test("should change application language and update translations", async ({ page }) => {
    // Target the language button uniquely by matching the Globe icon inside it
    const langBtn = page.locator("button:has(svg.lucide-globe)");
    await expect(langBtn).toBeVisible();
    await langBtn.click();

    const esOption = page.locator("button:has-text('Español')");
    await esOption.click();

    // Check placeholder changed to Spanish
    const searchInputEs = page.locator("input[placeholder*='Buscar']").first();
    await expect(searchInputEs).toBeVisible();

    // Switch to German (Deutsch)
    await langBtn.click();
    const deOption = page.locator("button:has-text('Deutsch')");
    await deOption.click();

    // Check placeholder changed to German
    const searchInputDe = page.locator("input[placeholder*='suchen']").first();
    await expect(searchInputDe).toBeVisible();
  });

  test("should display offline badge when browser context goes offline", async ({ page }) => {
    const offlineBadge = page.locator("text=Offline");

    // Default should be online (badge not visible)
    await expect(offlineBadge).toBeHidden();

    // Go offline
    await page.context().setOffline(true);

    // Badge should appear
    await expect(offlineBadge).toBeVisible();

    // Go back online
    await page.context().setOffline(false);

    // Badge should disappear
    await expect(offlineBadge).toBeHidden();
  });

  test("should toggle application theme and persist it upon reload", async ({ page }) => {
    const htmlElement = page.locator("html");
    const themeToggleBtn = page.locator("button[title='Toggle Light/Dark Theme']");

    // Toggle the theme and verify the html element has class change
    const isInitiallyDark = await htmlElement.evaluate((el) => el.classList.contains("dark"));

    await themeToggleBtn.click();

    const isDarkAfterToggle = await htmlElement.evaluate((el) => el.classList.contains("dark"));
    expect(isDarkAfterToggle).not.toBe(isInitiallyDark);

    // Reload page to verify persistence in localStorage
    await page.reload();
    const isDarkAfterReload = await htmlElement.evaluate((el) => el.classList.contains("dark"));
    expect(isDarkAfterReload).toBe(isDarkAfterToggle);
  });

  test("should create, apply, and delete custom presets in the sandbox", async ({ page }) => {
    // Navigate to Customize page
    const cardLabel = page.locator(".group p").first();
    await cardLabel.click();
    await page.waitForURL(/.*icons.*/, { timeout: 12000 });

    // Open Presets tab in right sidebar
    const presetsTabButton = page.locator("button:has-text('presets')");
    await presetsTabButton.click();

    // Check empty state
    await expect(page.locator("text=No custom presets saved yet.")).toBeVisible();

    // Input preset name and click Save
    const presetNameInput = page.locator("input[placeholder*='Preset Name']");
    await presetNameInput.fill("E2E Test Preset");

    const saveBtn = page.locator("button:has-text('Save')");
    await saveBtn.click();

    // Verify it is saved in the list
    const savedPresetItem = page.locator("div.p-3:has-text('E2E Test Preset')").first();
    await expect(savedPresetItem).toBeVisible();

    // Click Apply button
    const applyBtn = savedPresetItem.locator("button:has-text('Apply')");
    await applyBtn.click();

    // Click Delete/Trash button
    const trashBtn = savedPresetItem.locator("button").last();
    await trashBtn.click();

    // Verify list is empty again
    await expect(page.locator("text=No custom presets saved yet.")).toBeVisible();
  });
});
