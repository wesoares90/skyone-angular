'use strict';

describe('Filter: limitPage', function () {

  // load the filter's module
  beforeEach(module('testeSkyoneApp'));

  // initialize a new instance of the filter before each test
  var limitPage;
  var list = [20,40,80,100,200,300,400,500];
  beforeEach(inject(function ($filter) {
    limitPage = $filter('limitPage');
  }));

  it('Deverá receber um valor null e retornar &_limit=20', function () {
    
    var limitView = limitPage(null);
    expect(limitView).toBe('&_limit=20');

  });

  it('Deverá receber um valor x e retornar &_limit=x', function () {
    
    for (var i = 0; i < list.length; i++) {
      
      var limitView = limitPage(list[i]);
      expect(limitView).toBe('&_limit='+ list[i]);
      
    }

  });  

});
