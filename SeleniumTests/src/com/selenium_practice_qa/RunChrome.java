package com.selenium_practice_qa;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class RunChrome {
        WebDriver driver;

    public void openBrowser(){
        System.setProperty("webdriver.chrome.driver", "src/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://live.demoguru99.com");
    }
    public void maximizeBrowser(){
        driver.manage().window().maximize();
    }
}
