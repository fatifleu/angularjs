(function(){
    'use strict';
    var app =angular.module('educa',['acceuilComponent','redComponent','ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            template: '<acceuil-component></acceuil-component>'
        })
        .when("/red", {
            template: '<red-component></red-component>'
        })
        .otherwise({ redirectTo: '/' });
    });
    
})();