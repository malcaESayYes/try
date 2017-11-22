(function () {
    'use strict';
    angular.module('pgApp.photo', []);
    angular.module('pgApp.filter', []);
    angular.module('pgApp.chooseImage', []);
    angular.module('pg-addPhoto.drv', []);
    angular.module('pgAddPicture.dir', []);


    angular.module('pgApp', [
        //// Angular modules 
        'ngRoute',
        //// Custom modules
     
        'pgApp.photo',
        'pgApp.filter',
        'pgApp.chooseImage',
        // 3rd Party Modules
       
        'pg-addPhoto.drv',
        'pgAddPicture.dir'
        ]);
   
         
          
    
})();


