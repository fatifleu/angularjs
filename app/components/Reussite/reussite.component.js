(function(){
    'use strict';
    angular.module('reussiteComponent',[])
        .component('reussiteComponent',{
            controller: [ReussiteController],
            controllerAs:'vm',
            templateUrl:'app/components/Reussite/reussite.html'
            
        });
    
    function ReussiteController(){
        var vm=this;

        vm.$onInit=onInit;
        function onInit()
        {
            
       vm.color="red";

        }
    }
})();