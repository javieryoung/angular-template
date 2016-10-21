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
    .state('app.login', {
        url: "/login",
        views: {
            'content': {
                templateUrl: "views/login.html",
            }
        }
    })
    .state('app.signup', {
        url: "/signup",
        views: {
            'content': {
                templateUrl: "views/signup.html",
            }
        }
    })
    .state('app.cart', {
        url: "/cart",
        views: {
            'content': {
                templateUrl: "views/cart.html",
                controller: 'CartCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise("/home");
}])
