# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter04\04_Parrelel_Execution_test.spec.ts >> Regression Test >> Test Case 4 
- Location: tests\Chapter04\04_Parrelel_Execution_test.spec.ts:76:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.youtube.com1/"
Received: "https://www.youtube.com/"
Timeout:  20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    22 × unexpected value "https://www.youtube.com/"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [ref=e9] [cursor=pointer]:
          - generic [ref=e12]:
            - img
        - generic [ref=e13]:
          - link "YouTube Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e19]:
              - img
          - generic [ref=e20]: IN
        - button "Skip navigation" [ref=e24] [cursor=pointer]:
          - generic [ref=e25]: Skip navigation
      - generic [ref=e29]:
        - search [ref=e30]:
          - generic [ref=e31]:
            - combobox "Search" [expanded] [ref=e34]
            - button "Search" [ref=e35] [cursor=pointer]:
              - generic [ref=e38]:
                - img
        - generic [ref=e40]:
          - button "Search with your voice" [ref=e42] [cursor=pointer]:
            - generic [ref=e46]:
              - img
          - tooltip "tooltip"
      - generic [ref=e51]:
        - button "Settings" [ref=e56] [cursor=pointer]:
          - generic [ref=e59]:
            - img
        - link "Sign in" [ref=e62] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
          - generic [ref=e66]:
            - img
          - generic [ref=e67]: Sign in
  - navigation [ref=e71]:
    - generic [ref=e72]:
      - link "Home" [ref=e74] [cursor=pointer]:
        - /url: /
        - generic [ref=e77]:
          - img
        - generic [ref=e78]: Home
      - link "Shorts" [ref=e80] [cursor=pointer]:
        - /url: /shorts/
        - generic [ref=e83]:
          - img
        - generic [ref=e84]: Shorts
      - link "Subscriptions" [ref=e86] [cursor=pointer]:
        - /url: /feed/subscriptions
        - generic [ref=e89]:
          - img
        - generic [ref=e90]: Subscriptions
      - link "You" [ref=e92] [cursor=pointer]:
        - /url: /feed/you
        - generic [ref=e95]:
          - img
        - generic [ref=e96]: You
  - generic [ref=e97]:
    - main [ref=e98]:
      - generic [ref=e108]:
        - heading "Try searching to get started" [level=2] [ref=e109]
        - generic [ref=e110]: Start watching videos to help us build a feed of videos you'll love.
    - text: •
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('Smoke Test', async () => {
  4  |     test('Test Case 1 ', async ({ page }) => {
  5  | 
  6  |         //Navigate to URL
  7  |         await page.goto('https://www.youtube.com/');
  8  | 
  9  |         //Validate for the URL
  10 |         await expect(page).toHaveURL('https://www.youtube.com/');
  11 | 
  12 |         //click on search box and validate if its visible
  13 |         await page.getByRole('combobox', { name: 'Search' }).click();
  14 |         await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  15 | 
  16 |         //Enter the text in textbox
  17 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
  18 |         await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  19 | 
  20 |         //Validate title
  21 |         await expect(page).toHaveTitle(/playwright/);
  22 | 
  23 |         //Click on Series link
  24 |         await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  25 |     })
  26 | 
  27 |     test('Test Case 2 ', async ({ page }) => {
  28 | 
  29 |         //Navigate to URL
  30 |         await page.goto('https://www.youtube.com/');
  31 | 
  32 |         //Validate for the URL
  33 |         await expect(page).toHaveURL('https://www.youtube.com/');
  34 | 
  35 |         //click on search box and validate if its visible
  36 |         await page.getByRole('combobox', { name: 'Search' }).click();
  37 |         await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  38 | 
  39 |         //Enter the text in textbox
  40 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
  41 |         await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  42 | 
  43 |         //Validate title
  44 |         await expect(page).toHaveTitle(/playwright/);
  45 | 
  46 |         //Click on Series link
  47 |         await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  48 |     })
  49 | 
  50 | })
  51 | 
  52 | test.describe('Regression Test', async () => {
  53 |     test('Test Case 3 ', async ({ page }) => {
  54 | 
  55 |         //Navigate to URL
  56 |         await page.goto('https://www.youtube.com/');
  57 | 
  58 |         //Validate for the URL
  59 |         await expect(page).toHaveURL('https://www.youtube.com/');
  60 | 
  61 |         //click on search box and validate if its visible
  62 |         await page.getByRole('combobox', { name: 'Search' }).click();
  63 |         await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  64 | 
  65 |         //Enter the text in textbox
  66 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
  67 |         await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  68 | 
  69 |         //Validate title
  70 |         await expect(page).toHaveTitle(/playwright/);
  71 | 
  72 |         //Click on Series link
  73 |         await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  74 |     })
  75 | 
  76 |     test('Test Case 4 ', async ({ page }) => {
  77 | 
  78 |         //Navigate to URL
  79 |         await page.goto('https://www.youtube.com/');
  80 | 
  81 |         //Validate for the URL
> 82 |         await expect(page).toHaveURL('https://www.youtube.com1/');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  83 | 
  84 |         //click on search box and validate if its visible
  85 |         await page.getByRole('combobox', { name: 'Search' }).click();
  86 |         await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  87 | 
  88 |         //Enter the text in textbox
  89 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
  90 |         await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  91 | 
  92 |         //Validate title
  93 |         await expect(page).toHaveTitle(/playwright/);
  94 | 
  95 |         //Click on Series link
  96 |         await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  97 |     })
  98 | })
```