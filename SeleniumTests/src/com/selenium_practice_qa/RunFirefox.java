package com.selenium_practice_qa;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class RunFirefox extends RunChrome {
    WebDriver driver;

    public void openBrowser(){
        System.setProperty("webdriver.gecko.driver", "src/drivers/geckodriver.exe");
        driver = new FirefoxDriver();
        driver.get("http://live.demoguru99.com");
    }
    public void maximizeBrowser(){
        driver.manage().window().maximize();
    }
}
