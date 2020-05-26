package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MobilePage {

    WebDriver driver;
    By mobilePageTitle = By.xpath("//*[@id='top']/head/title");
    By firstPhoneCompare = By.cssSelector("li:nth-child(1) div div.actions ul li:nth-child(2) a");
    By secondPhoneCompare = By.xpath("//*[@id=\"top\"]/body/div/div/div[2]/div/div[2]/div[1]/div[3]/ul/li[2]/div/div[3]/ul/li[2]/a");
    By compareButton = By.cssSelector("button[title='Compare']");

    public void clickFirstItem() {
        driver.findElement(firstPhoneCompare).click();
    }

    public String getMobilePageTitle() {
        return driver.findElement(mobilePageTitle).getText();
    }

    public void clickSecondItem() {
        driver.findElement(secondPhoneCompare).click();
    }

    public void clickCompareBtn() {
        driver.findElement(compareButton).click();
    }

    public MobilePage(WebDriver driver) {
        this.driver = driver;
    }
}
