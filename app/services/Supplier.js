angular.module('app.services').factory('Supplier', ['Item', function(Item) {

  function newSuppliers() {
    return [{
        name: 'Very Vegetable',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        location: 'Cordoba',
        country: 'Argentina',
        thumb: '../assets/images/suppliers/1thumb.jpg',        
    },{
        name: 'Arroces SA',
        caption: 'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum.',
        location: 'Montreal',
        country: 'Canada',
        thumb: '../assets/images/suppliers/2thumb.jpg',        
    },{
        name: 'Mandracuch',
        caption: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
        location: 'Mianyang',
        country: 'China',
        thumb: '../assets/images/suppliers/3thumb.jpg',        
    },{
        name: 'Very Vegetable',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        location: 'Cordoba',
        country: 'Argentina',
        thumb: '../assets/images/suppliers/4thumb.jpg',        
    }];
  }
  
  function getById(id){
        products = Item.getBySupplier(id);
        return {
            name: 'Very Vegetable',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            location: 'Cordoba',
            country: 'Argentina',
            latitude: -31.680448, 
            longitude: -64.718550,
            bigImage: '../assets/images/suppliers/4big.jpeg',
            products: products
        };
  }
  
  
  
  return { 
      newSuppliers: newSuppliers,
      getById: getById
  }

}]);
