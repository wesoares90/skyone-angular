'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

  this.Given(/^que acesso a tela "([^"]*)"$/, function (urlSite) {
  
    browser.get(urlSite);

    browser.sleep(2000);

  });

  this.When(/^clico no botão "([^"]*)"$/, function(btn){ 

    if (btn === 'newPhoto') {

      var button = browser.driver.findElement(By.id("newPhoto"));

    }

    if (btn === 'confirm') {

      var button = browser.driver.findElement(By.id("confirmBtn"));

    }

    button.click();

    browser.sleep(5000);

  });  

  this.When(/^digito o titulo "([^"]*)" e url "([^"]*)"$/, function(title, url){ 

    var titleInput = browser.driver.findElement(By.id("titleInput")),
        urlInput = browser.driver.findElement(By.id("urlInput"));
        
    titleInput.sendKeys(title);
    urlInput.sendKeys(url);
   

  });  

  this.When(/^digito no campo busca "([^"]*)"$/, function(search){ 

    var searchInput = browser.driver.findElement(By.id("search"));
        
    searchInput.sendKeys(search);
    
  });     

  this.When(/^a tabela será filtrada$/, function(){ 

    var table = browser.driver.findElement(by.xpath('//*[@id="dataTable"]/tbody/tr/td[2]'));

    expect(table.getText()).to.eventually.equal('mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores');
   

  });   

};





