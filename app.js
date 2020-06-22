
var URLshortnerApp = angular.module('URLshortnerApp', [
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'ui.bootstrap',
        'ui.utils',
        'LocalStorageModule',
        'ngTagsInput',
        'textAngular',
        'angular-loading-bar',
        'duScroll',
        'pascalprecht.translate',
        'multiselect',
        'checklist-model',
        'ncy-angular-breadcrumb',
        'angularFileUpload',
        'flow',
        'ngFileUpload',
        'dx',
        'masonry',
        'ngImgCrop',
       
       
        
    ])




    URLshortnerApp.constant('_',
    window._
);
URLshortnerApp.run(['$rootScope',function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

}]);

