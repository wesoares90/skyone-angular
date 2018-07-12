'use strict';

describe('Service: TableMethods', function () {

  // load the service's module
  beforeEach(module('testeSkyoneApp'));

  // instantiate service
  var TableMethods;
  beforeEach(inject(function (_TableMethods_) {
    TableMethods = _TableMethods_;
  }));

  it('should do something', function () {
    expect(!!TableMethods).toBe(true);
  });

});
