
angular.module('app.controllers').controller('AppCtrl', ['$scope', 'Cart', function($scope, Cart) {
    Cart.add({
        name: 'Vegetables',
        description: 'Lorem ipsum dolor sit amet, ut viris legendos disputationi pro, aperiam docendi scaevola eam te. Sea quis saepe tritani no, cu velit sonet copiosae duo. Mel numquam debitis corrumpit cu, justo tollit neglegentur mei ex. Vel at rebum minim, ut vim nulla fastidii sensibus, sea eripuit tacimates reformidans ne.',
        price: 20,
        quantity: 2,
        image: '../../assets/images/gallery1.jpg'
    });
    Cart.add({
        name: 'Pizza',
        description: 'Lorem ipsum dolor sit amet, ut viris legendos disputationi pro, aperiam docendi scaevola eam te. Sea quis saepe tritani no, cu velit sonet copiosae duo. Mel numquam debitis corrumpit cu, justo tollit neglegentur mei ex. Vel at rebum minim, ut vim nulla fastidii sensibus, sea eripuit tacimates reformidans ne.',
        price: 20,
        quantity: 2,
        image: '../../assets/images/gallery3.jpg'
    });
    Cart.add({
        name: 'Meat',
        description: 'Lorem ipsum dolor sit amet, ut viris legendos disputationi pro, aperiam docendi scaevola eam te. Sea quis saepe tritani no, cu velit sonet copiosae duo. Mel numquam debitis corrumpit cu, justo tollit neglegentur mei ex. Vel at rebum minim, ut vim nulla fastidii sensibus, sea eripuit tacimates reformidans ne.',
        price: 20,
        quantity: 2,
        image: '../../assets/images/gallery5.jpg'
    });
}]);