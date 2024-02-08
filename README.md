# Appium Automation For Material 3

# Setup Steps
- Clone this repo locally
- Download and Install node.js: https://nodejs.org/en/download/
- Install NPM
```
npm install
```
- Install Appium
```
npm install appium
```
- Install flutter (to run https://github.com/flutter/samples/tree/main/material_3_demo)
  
- Install java

- Install android studio / you can use physical android device

- Install appium inspector (to help with element xpath or id)

# Create virtual device
- In Android studio, create virtual device using avdmmanager
- select android platform
- let it finish downloading
- try to launch the emulator

```
```
# Start appium & appium inspector
- Start appium GUI
- start server
- open appium inspector
- set the desired capabilities based on emulator
```
{
  "platformName": "android",
  "appium:platformVersion": "11",
  "appium:deviceName": "sdk_gphone_x86",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.example.material_3_demo",
  "appium:appActivity": "com.example.material_3_demo.MainActivity"
}
```

# Test Case
- Navigate through all the tabs
- toggle dark mode : check if toggle is working but not assert the color ref: https://stackoverflow.com/questions/41585747/how-to-check-the-color-code-color-of-an-element-in-appium

- 
# Quick Commands
- run apppium

```
appium (in cmd)
or
start server in appium GUI
```
- Run all test cases

```
node index.js
```

# Appium Tutorial
https://www.youtube.com/watch?v=mAylNVddfJc&list=PLhW3qG5bs-L8npSSZD6aWdYFQ96OEduhk&index=1
