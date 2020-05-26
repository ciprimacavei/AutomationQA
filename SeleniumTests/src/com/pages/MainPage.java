package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MainPage {

    WebDriver driver;
    private String homePageTitle = "Home page";
    By mobileButton = By.cssSelector("ol li:nth-child(1) .level0");


    public void clickMobilePage() {
        driver.findElement(mobileButton).click();
    }

    public String getHomePageTitle() {
        return homePageTitle;
    }

    public String getMainPageTitle() {
        return driver.getTitle();
    }

    public MainPage(WebDriver driver) {
        this.driver = driver;
    }
}
