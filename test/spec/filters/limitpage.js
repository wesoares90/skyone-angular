'use strict';

describe('Filter: limitPage', function () {

  // load the filter's module
  beforeEach(module('testeSkyoneApp'));

  // initialize a new instance of the filter before each test
  var limitPage;
  beforeEach(inject(function ($filter) {
    limitPage = $filter('limitPage');
  }));

  it('should return the input prefixed with "limitPage filter:"', function () {
    var text = 'angularjs';
    expect(limitPage(text)).toBe('limitPage filter: ' + text);
  });

});
