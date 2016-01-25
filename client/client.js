/**
 * Created by kyracrowston on 1/22/16.
 */
var app = angular.module('myApp', ['ngRoute']);

//app configuration
app.config(['$routeProvider', function($routeProvider){
$routeProvider
    .when('/index', {
        templateUrl:'views/index.html',
        controller:'indexController'
    })

    .when('/address', {
        templateUrl:'views/address.html',
        controller:'addressController'
    })

    .when('/order', {
        templateUrl:'views/order.html',
        controller:'orderController'
    })
}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
//$http.get('/api/grab').then(function(response){
//    $scope.users=response.data;
//    })
}]);

app.controller('addressController', ['$scope', '$http', function($scope, $http){
    $http.get('/api/grabAddress').then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    })
}]);

app.controller('orderController', ['$scope', '$http', function($scope, $http){
//$http.get('/api/grabOrder' + value.id);
}]);