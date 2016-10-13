angular.module('app.controllers').controller('SupplierCtrl', ['$scope', 'Supplier', function($scope, Supplier) {
    
    $scope.supplier = Supplier.getById(1);
    
}]);