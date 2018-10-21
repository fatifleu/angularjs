(function(){
    'use strict';
    var app = angular.module('acceuilComponent',['matiereComponent','reussiteComponent','ngRoute'])
        .component('acceuilComponent',{
            controller: [AcceuilController],
            controllerAs:'vm',
            templateUrl:'app/components/acceuil/acceuil.html'
            
        });
        app.config(function($routeProvider) {
            $routeProvider
            .when("/", {
                template: '<matiere-component></matiere-component>'
            })
            .when("/red", {
                template: '<reussite-component></reussite-component>'
            })
            .otherwise({ redirectTo: '/' });
        });



    function AcceuilController(){
        var vm=this;

        vm.$onInit=onInit;
        function onInit()
        {
 

        }
    }
})();