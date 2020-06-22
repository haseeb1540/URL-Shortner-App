
angular.module('URLshortnerApp').service('serviceShortner', ['$http', function($http) {

    this.fnGetData = function(data) {
        var promise = $http({
            url: 'http://127.0.0.1:3000/' + 'node/',
            data: { data:data },
            method: "POST",
            withCredentials: false,
            contentType: "application/json",
            dataType: "json",
        });
        return promise;
    };

}]);

