angular.module('URLshortnerApp').controller('PartialShortnerCtrl', [ '$scope', 'serviceShortner', function( $scope, serviceShortner) {
   
$scope.arrayOfData=[];

$scope.click=function(fullUrl){

    if( $scope.fullUrl){
        var data = serviceShortner.fnGetData(fullUrl);
        data.then(function (response) {
            
            var obj=response.data.result
            $scope.arrayOfData.push({ 'fullUrl': obj[1], 'shortUrl': obj[0] })
            $scope.fullUrl=[];
    
        });
    }
    else{
        alert("Something Went Wrong!");

    }
    
}

$scope.remove_row = function (index) {
    $scope.arrayOfData.splice(index, 1);
}

}]);
