angular.module('app.services').factory('Cart', [function() {
  var products = [];

  function get() {
    return products;
  }
  
  function set(p) {
      products = p;
  }
  
  function add(product) {
      products.push(product);
  }
  
  return { 
      get: get,
      set: set,
      add: add
  }

}]);
