let myResumeApp = angular.module('myApp',[]);
myResumeApp.controller('resumeController', ['$scope', '$http', function($scope, $http) {
    $http.get('objects/skeleton.min.json').success(function(data){
        $scope.dataModel = data;
        console.log(data);
    }).error(function() {
       console.log("Error in JSON parsing.")
    });
}]);



