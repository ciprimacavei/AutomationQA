package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PopUpPage {

    WebDriver driver;
    By sonyPhonePopupPrice = By.cssSelector("#product-price-1-compare-list-top");
    By iPhonePopupPrice = By.cssSelector("#product-price-2-compare-list-top");
    By closePopUpButton = By.cssSelector("button[title='Close Window']");

    public String getSonyPrice() {
        return driver.findElement(sonyPhonePopupPrice).getText();
    }

    public String getIphonePrice() {
        return driver.findElement(iPhonePopupPrice).getText();
    }

    public void closePopUp() {
        driver.findElement(closePopUpButton).click();
    }

    public PopUpPage(WebDriver driver) {
        this.driver = driver;
    }
}
