(function(){
    'use strict';
    angular.module('redComponent',[])
        .component('redComponent',{
            controller: [RedController],
            controllerAs:'vm',
            templateUrl:'app/components/red/red.html'
            
        });
    
    function RedController(){
        var vm=this;

        vm.$onInit=onInit;
        function onInit()
        {
            
       vm.color="red";

        }
    }
})();