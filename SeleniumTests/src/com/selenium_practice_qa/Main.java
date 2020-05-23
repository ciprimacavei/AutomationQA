package com.selenium_practice_qa;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;

import java.util.Iterator;
import java.util.Set;
import java.util.function.DoublePredicate;

public class Main {


    public static void main(String[] args) throws InterruptedException {

        String mobileButtonXPath = "//*[@id=\"nav\"]/ol/li[1]/a";
        RunChrome runner = new RunChrome();
        WebElement compareButton = runner.driver.findElement(By.cssSelector("button[title=\"Compare\"]"));
        WebElement sonyPhonePopupPrice = runner.driver.findElement(By.cssSelector("#product-price-1-compare-list-top"));
        WebElement iPhonePopupPrice = runner.driver.findElement(By.cssSelector("#product-price-2-compare-list-top"));
        WebElement closePopUpButton = runner.driver.findElement(By.cssSelector("button[title=\"Close Window\"]"));

        runner.openBrowser();
        runner.maximizeBrowser();
        System.out.println("The page title is: " + runner.driver.getTitle());

        WebElement mobileButton = runner.driver.findElement(By.xpath(mobileButtonXPath));
        mobileButton.click();

        CompareButton item = new CompareButton();
        WebElement firstItem = runner.driver.findElement(By.cssSelector(item.getIndex(1)));
        firstItem.click();

        WebElement secondItem = runner.driver.findElement(By.cssSelector(item.getIndex(2)));

        if (secondItem.isDisplayed()) {
            JavascriptExecutor js = (JavascriptExecutor) runner.driver;
            js.executeScript("window.scrollBy(0,200)");
            secondItem.click();
            System.out.println("clicked the second one");
        } else {
            System.out.println("Element is not present");
        }
        compareButton.click();
        String originalHandle = runner.driver.getWindowHandle();
        Set<String> windowsList = runner.driver.getWindowHandles();
        Iterator<String> goThroughList = windowsList.iterator();
        while (goThroughList.hasNext()) {
            String popUp = goThroughList.next();
            if (!originalHandle.equals(popUp)) {
                runner.driver.switchTo().window(popUp);
                String sony = sonyPhonePopupPrice.getText().replace("$", "");
                String iphone = iPhonePopupPrice.getText().replace("$", "");
                Double sonyPhone = Double.parseDouble(sony);
                Double iPhonePhone = Double.parseDouble(iphone);
                if (sonyPhone > iPhonePhone) {
                    System.out.println("The sony phone is more expensive");
                } else if (sonyPhone < iPhonePhone) {
                    System.out.println("The iPhone is more expensive");
                } else {
                    System.out.println("The phones have the same price");
                }
                closePopUpButton.click();
            }
        }
        runner.driver.switchTo().window(originalHandle);
        runner.driver.close();
    }
}
