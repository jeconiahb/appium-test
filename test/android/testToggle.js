export const testToggle = async (driver) => {
  try {
    console.log("Test 2 Running");
    driver.activateApp("com.example.material_3_demo");

    const colorTab = await driver.$(
      '//android.view.View[@content-desc="Color\nTab 2 of 4"]'
    );
    console.log("Open color Tab");
    await colorTab.click();

    const colorContent = await driver.$(
      '//android.view.View[contains(content-desc, "Light ColorScheme")]'
    );
    await colorContent.isDisplayed;
    await driver.pause(2000);

    const toggleTheme = await driver.$(
      '//android.view.View[1]/android.view.View[2]/android.widget.Button'
    );
    await toggleTheme.click();

    await driver.pause(2000);

    await toggleTheme.click();
  } 
  
  finally {
    await driver.pause(2000);
    driver.terminateApp("com.example.material_3_demo");
  }
};
