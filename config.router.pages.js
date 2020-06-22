(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.config:uiRouter
     * @description
     * # Config
     * Config for the pages router
     */

    angular.module('URLshortnerApp')
        .config(
            ['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    
                    $urlRouterProvider.otherwise('/URL_Shortner'); 

                    $stateProvider

                     

                        .state('URL_Shortner', {
                            url: '/URL_Shortner',
                            templateUrl: 'angular_modules/URLShortnerApp/partials/partial-URL_Shortner.html',
                            controller: 'PartialShortnerCtrl'
                        });

                      
                      
                     


                }
            ]
        );
}());
