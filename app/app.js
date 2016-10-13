// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngMap',
  'angular.less',
  'app.controllers',
  'app.services'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app', {
        abstract: true,
        url: "",
        templateUrl: "views/template/template.html",
        controller: 'AppCtrl'
    })
    .state('app.home', {
        url: "/home",
        views: {
            'content': {
                templateUrl: "views/home.html",
                controller: 'HomeCtrl'
            }
        }
    })
    .state('app.product', {
        url: "/product",
        views: {
            'content': {
                templateUrl: "views/product.html",
                controller: 'ProductCtrl'
            }
        }
    })
    .state('app.supplier', {
        url: "/supplier",
        views: {
            'content': {
                templateUrl: "views/supplier.html",
                controller: 'SupplierCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise("/home");
}])


