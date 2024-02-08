export const testToggle = async (driver) => {
  try {
    console.log("Test 2 Running");
    driver.activateApp("com.example.material_3_demo");
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
