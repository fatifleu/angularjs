(function(){
    'use strict';
    angular.module('acceuilComponent',[])
        .component('acceuilComponent',{
            controller: ['AcceuilService',AcceuilController],
            controllerAs:'vm',
            templateUrl:'app/components/acceuil/acceuil.html'
            
        });
    
    function AcceuilController(AcceuilService){
        var vm=this;

        vm.$onInit=onInit;
        function onInit()
        {
            vm.table=AcceuilService.getData().then(
                        function mySuccess(response) {
                            vm.table = response.data;
                        },
                        function myError(response) {
                            vm.status = response.statusText;
                        }
            );


        }
    }
})();