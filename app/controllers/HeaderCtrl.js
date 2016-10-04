angular.module('app.controllers').controller('HeaderCtrl', ['Cart', '$scope', function(Cart, $scope) {
    $scope.items = Cart.get();
}]);