angular.module('app.controllers').controller('HomeCtrl', ['$scope', 'Item', 'Supplier', function($scope, Item, Supplier) {
    $scope.slides = [
        {
            id: 0,
            title: 'Best Vegetables Ever',
            text: 'The best vegetables ever are one click away!',
            image: '../../assets/images/banner1.jpg',
            button: {
                state: 'home',
                text: 'Buy!'
            }
        },
        {
            id: 1,
            title: 'More Vegetables',
            text: 'The best vegetables ever are one click away!',
            image: '../../assets/images/banner2.jpg'
        }
    ]
    
   
    
    
    
    $scope.recipes = Item.recipes();
    $scope.weeklyFeatured = Item.weeklyFeatured();
    $scope.newProducts = Item.newProducts();
    $scope.newSuppliers = Supplier.newSuppliers();
    
}]);