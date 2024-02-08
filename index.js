import { driver } from "./driver.js";
import { testTab } from "./test/android/testTab.js";
import { testToggle } from "./test/android/testToggle.js";

await testTab(driver);
await testToggle(driver);

