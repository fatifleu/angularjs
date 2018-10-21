(function(){
    'use strict';
    angular.module('matiereComponent',[])
        .component('matiereComponent',{
            controller: ['matiereService',MatiereController],
            controllerAs:'vm',
            templateUrl:'app/components/matieres/matieres.html'
            
        });
    
    function MatiereController(matiereService){
        var vm= this;
        vm.$onInit=onInit;
        function onInit()
        {
            vm.table=matiereService.getData().then(
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