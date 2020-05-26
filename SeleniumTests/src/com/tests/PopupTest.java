package com.tests;

import com.pages.MainPage;
import com.pages.MobilePage;
import com.pages.PopUpPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.util.Set;

public class PopupTest {
    String driverPath = "src/drivers/chromedriver.exe";
    String autURL = "http://live.demoguru99.com/index.php/";
    WebDriver driver;
    MainPage objMainPage = new MainPage(driver);
    MobilePage objMobPage = new MobilePage(driver);
    PopUpPage objPopup = new PopUpPage(driver);

    @BeforeTest
    public void setup() {
        System.setProperty("webdriver.chrome.driver", driverPath);
        driver = new ChromeDriver();
        driver.get(autURL);
    }

    @Test(priority = 1)
    public void mainPageAccess() {
        String homePageTitle = objMainPage.getMainPageTitle();
        Assert.assertTrue(homePageTitle.toLowerCase().contains(objMainPage.getHomePageTitle()));
        objMainPage.clickMobilePage();
    }

    @Test(priority = 2)
    public void compareTwoProducts() {
        String mobileTitle = objMobPage.getMobilePageTitle();
        Assert.assertTrue(mobileTitle.toLowerCase().contains(objMobPage.getMobilePageTitle()));
        objMobPage.clickFirstItem();
        objMobPage.clickSecondItem();
        objMobPage.clickCompareBtn();
    }

    @Test(priority = 3)
    public void comparePhonePricesFromPopup() {
        String originalWindow = driver.getWindowHandle();
        Set<String> windowList = driver.getWindowHandles();
        for (String popupWindow : windowList) {
            if (!originalWindow.equals(popupWindow)) {
                driver.switchTo().window(popupWindow);
                String x = objPopup.getSonyPrice().replace("$", "");
                String y = objPopup.getIphonePrice().replace("$", "");
                double sonyPrice = Double.parseDouble(x);
                double iPhonePrice = Double.parseDouble(y);
                if (sonyPrice > iPhonePrice) {
                    System.out.println("The Sony Phone is more expensive" + " and has a price of " + objPopup.getSonyPrice());
                } else if (sonyPrice < iPhonePrice) {
                    System.out.println("The iPhone is more expensive" + " and has a price of " + objPopup.getIphonePrice());
                } else {
                    System.out.println("They have the same price");
                }
            }
        }
        driver.switchTo().window(originalWindow);
    }
    @AfterTest
    public void closeTest(){
        driver.close();
        driver.quit();
    }

}
