angular.module('app.services').factory('Supplier', [function() {

  function newSuppliers() {
    return [{
        name: 'Vegetables',
        price: 20,
        image: '../assets/images/gallery1.jpg',
        date: new Date().visual()
        
    }];
  }
  
  
  
  return { 
      newSuppliers: newSuppliers
  }

}]);
