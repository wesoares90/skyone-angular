// Protractor configuration
// https://github.com/angular/protractor/blob/master/referenceConf.js

'use strict';

//protractor.conf.js
exports.config = {
  
  baseUrl: 'http://localhost:9000/',
  chromeOnly: true,
  directConnect: true,
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,  
  framework: 'custom',
  
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--disable-gpu", "--disable-extensions", "--no-sandbox", "--start-maximized", "--test-type" ],
    },
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/**/*.feature'
  ],

  cucumberOpts: {
    require: 
    [
      'features/**/step_definitions/*.js',
      'features/**/step_definitions/support/*.js'

    ],
    tags:false,
    profile: false,
    'no-source': true,
  },

};
