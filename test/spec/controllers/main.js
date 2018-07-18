'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testeSkyoneApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

  }));

  it('', function () {
    
    //console.log(MainCtrl.controlPage());

     //expect(MainCtrl.controlPage()).toBeDefined();
     //expect(MainCtrl.viewMore()).toBeDefined();

    
  });
});
