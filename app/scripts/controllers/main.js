'use strict';

/**
* @ngdoc function
* @name angularApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularApp
*/
angular.module('angularApp')
.controller('MainCtrl', function($scope, $http) {
  $http.get('MOCK_DATA.json').then(function(result){
    $scope.employees = result.data;
  });
  $scope.currentPage = 1;
  $scope.pageSize = 50;
  $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
})
.config(function($stateProvider,$urlRouterProvider) {
$urlRouterProvider.otherwise('/');
  $stateProvider
  .state('dataGrid',{
    url: '/datagrid',
    templateUrl: 'views/datagrid.html'
  })
  .state('form',{
    url: '/form',
    templateUrl: 'views/form.html'
  });
});
