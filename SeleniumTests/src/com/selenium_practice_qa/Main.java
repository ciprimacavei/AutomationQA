package com.selenium_practice_qa;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.function.DoublePredicate;

public class Main {


    public static void main(String[] args) {

        String homePageTitle = "Home Page";
        String mobileButtonXPath = "//*[@id=\"nav\"]/ol/li[1]/a";

        RunBrowser openChrome = new RunBrowser();

        openChrome.openBrowser();
        openChrome.maximizeBrowser();
        System.out.println("The page title is: " + openChrome.driver.getTitle());

        WebElement mobileButton = openChrome.driver.findElement(By.xpath(mobileButtonXPath));
        mobileButton.click();

        CompareButton item = new CompareButton();
        WebElement firstItem = openChrome.driver.findElement(By.cssSelector(item.getIndex(1)));
        firstItem.click();
        WebElement secondItem = openChrome.driver.findElement(By.xpath(item.getIndex(2)));
        secondItem.click();
        System.out.println("clicked the second one");

        openChrome.driver.close();
    }
}
