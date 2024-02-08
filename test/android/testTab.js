export const testTab = async (driver) => {
  try {
    console.log("Test 1 Running");

    const colorTab = await driver.$(
      '//android.view.View[@content-desc="Color\nTab 2 of 4"]'
    );
    console.log("Open color Tab");
    await colorTab.click();

    const colorContent = await driver.$(
      '//android.view.View[contains(content-desc, "Light ColorScheme")]'
    );
    await colorContent.isDisplayed();
    await driver.pause(2000);

    const typographyTab = await driver.$(
      '//android.view.View[@content-desc="Typography\nTab 3 of 4"]'
    );
    console.log("Open typography Tab");
    await typographyTab.click();

    const typographyContent = await driver.$(
      '//android.view.View[contains(content-desc, "Display Large")]'
    );
    await typographyContent.isDisplayed();
    await driver.pause(2000);

    const elevationTab = await driver.$(
      '//android.view.View[@content-desc="Elevation\nTab 4 of 4"]'
    );
    console.log("Open elevation Tab");
    await elevationTab.click();

    const elevationContent = await driver.$(
      '//android.view.View[contains(content-desc, "Surface Tint Color Only")]'
    );
    await elevationContent.isDisplayed();
    await driver.pause(2000);

    const componentsTab = await driver.$(
      '//android.view.View[@content-desc="Components\nTab 1 of 4"]'
    );
    console.log("Open components Tab");
    await componentsTab.click();

    const componentsContent = await driver.$(
      '(//android.widget.Button[@content-desc="Elevated"])[1]'
    );
    await elevationContent.isDisplayed();
    await driver.pause(2000);
  } 
  
  finally {
    await driver.pause(2000);
    driver.terminateApp("com.example.material_3_demo");
  }
};
