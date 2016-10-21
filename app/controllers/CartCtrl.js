angular.module('app.controllers').controller('CartCtrl', ['Cart', '$scope', function(Cart, $scope) {
    $scope.items = Cart.get();
    
    $scope.addQuantity = function(id) {
        $scope.items[id].quantity++;
        calculateTotal();
    }
    
    $scope.substractQuantity = function(id) {
        $scope.items[id].quantity--;
        calculateTotal();
    }
    
    function calculateTotal() {
        $scope.total = 0;
        angular.forEach($scope.items, function(v, i){
            $scope.total += v.price * v.quantity;
        })
    }
    calculateTotal()
    
}]);