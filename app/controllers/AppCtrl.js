
angular.module('app.controllers').controller('AppCtrl', ['$rootScope', 'Cart', function($rootScope, Cart) {
        
        
        
    Cart.add({
        id: 1,
        name: 'Vegetables',
        description: 'Lorem ipsum dolor sit amet, ut viris legendos disputationi pro, aperiam docendi scaevola eam te. ',
        price: 20,
        quantity: 2,
        image: '../../assets/images/gallery1.jpg',
        supplier: 'Arroces SA'
    });
    Cart.add({
        id: 2,
        name: 'Pizza',
        description: 'Sea quis saepe tritani no, cu velit sonet copiosae duo. Mel numquam debitis corrumpit cu, justo.',
        price: 20,
        quantity: 2,
        image: '../../assets/images/gallery3.jpg',
        supplier: 'Mandracuch'
    });
    Cart.add({
        id: 3,
        name: 'Meat',
        description: 'Tollit neglegentur mei ex. Vel at rebum minim, ut vim nulla fastidii sensibus, sea eripuit ne.',
        price: 20,
        quantity: 2,
        image: '../../assets/images/gallery5.jpg',
        supplier: 'Arroces SA'
    });
    
    
    
    $rootScope.$on("$routeChangeStart", function (event, currentRoute, previousRoute) {
        console.log('asd');
        $(".footer").addClass("holi");
    });
}]);