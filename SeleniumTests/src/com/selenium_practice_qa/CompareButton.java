package com.selenium_practice_qa;

public class CompareButton {

    public String getIndex(int index){
        if(index == 1){
            return "li:nth-child(1) > div > div.actions > ul > li:nth-child(2) > a";
        }
        else if(index ==2){
            return "ul li:nth-child(2) div div.actions ul li:nth-child(2) a";
        }
        else {
            return "li:nth-child(3) > div > div.actions > ul > li:nth-child(2) > a";
        }
    }
}
