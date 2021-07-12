let homePage = require('../pages/homepage')

describe('demo calculatortests', function () {

    it('addition test', function () {

        // browser.get('https://juliemr.github.io/protractor-demo/');
        homePage.get('https://juliemr.github.io/protractor-demo/');


        // element(by.model('first')).sendKeys('2');
        homePage.enterFirstNumber('2');

        // element(by.model('second')).sendKeys('5');
        homePage.enterSecondNumber('5');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homePage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '7'));
        // expect(result.getText()).toEqual('7');
        homePage.verifyResult('7');

        browser.sleep(2000);
    });

    it('substraction test', function(){

        
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homePage.get('https://juliemr.github.io/protractor-demo/');


        // element(by.model('first')).sendKeys('2');
        homePage.enterFirstNumber('2');

        // element(by.model('second')).sendKeys('5');
        homePage.enterSecondNumber('4');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homePage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '7'));
        // expect(result.getText()).toEqual('7');
        homePage.verifyResult('6');

        browser.sleep(2000);
    });

});