angular.module('app.controllers').controller('ProductCtrl', ['$scope', 'Item', function($scope, Item) {
    
    $scope.quantity = 1;
    $scope.item = Item.getById(1);
    $scope.addQuantity = function() {
        $scope.quantity++;
    }
    
    $scope.substractQuantity = function() {
        $scope.quantity--;
    }
}]);