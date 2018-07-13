'use strict';

/**
 * @ngdoc service
 * @name testeSkyoneApp.TableMethods
 * @description
 * # TableMethods
 * Factory in the testeSkyoneApp.
 */
angular.module('testeSkyoneApp')
.factory('TableMethods', function ($resource) {

    return $resource('http://localhost:3000/photos/:delete/:update/?:page:limit', { }, {
        
        query: { 
            method: 'GET', 
            isArray: true,
            limit: '@limit',
            page: '@page'
        },
        remove: { 
            method: 'DELETE',
            delete: '@delete'
        },
        update: { 
            method: 'PUT',
            uptade: '@update'
        },
        new: { 
            method: 'POST'
        }        

    });            

});
