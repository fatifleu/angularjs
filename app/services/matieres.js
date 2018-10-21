(function(){
    'use strict';
    angular.module('educa').service('matiereService',['$http',MatiereServ]);

  function MatiereServ($http){
   

    function getData(){ 
        return $http({
            method : "GET",
            url : 'json/test.json'
        });      
    }




   return{
    getData:getData
   }


  };

})();