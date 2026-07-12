import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src",
  fullyParallel: false,
  timeout: 90000,
  expect: {
    timeout: 15000
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  webServer: {
    command: "npm run dev:lab --prefix ../..",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
});
