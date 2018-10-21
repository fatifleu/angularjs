(function(){
    'use strict';
    angular.module('educa').service('AcceuilService',['$http',AcceuilServ]);

  function AcceuilServ($http){
   

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