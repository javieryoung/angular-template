angular.module('app.services').factory('Item', [function() {

  function weeklyFeatured() {
    return [{
        name: 'Vegetables',
        price: 20,
        image: '../assets/images/gallery1.jpg',
        date: new Date().visual()
        
    },{
        name: 'Pizza',
        price: 20,
        image: '../assets/images/gallery3.jpg',
        date: new Date().visual()
    },{
        name: 'Meat',
        price: 20,
        image: '../assets/images/gallery5.jpg',
        date: new Date().visual()
    },{
        name: 'Tea Break',
        price: 20,
        image: '../assets/images/gallery6.jpg',
        date: new Date().visual()
    }];
  }
  
  function newProducts() {
    return [{
        name: 'Delicious Chiken',
        price: 7,
        image: '../assets/images/food-1.jpg',
        supplier: 'Lettuces INC',
        unity: 'kg'
        
    },{
        name: 'Sort of Pzza',
        price: 7,
        image: '../assets/images/food-3.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Meat',
        price: 7,
        image: '../assets/images/food-4.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Not a Lettuce',
        price: 7,
        image: '../assets/images/gallery9.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Little Lettuce',
        price: 7,
        image: '../assets/images/gallery8.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Huge Lettuce',
        price: 13,
        image: '../assets/images/gallery1.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Hamburguers',
        price: 40,
        image: '../assets/images/gallery2.jpg',
        supplier: 'Arzingum',
        unity: 'kg'
        
    },{
        name: 'Milk',
        price: 7,
        image: '../assets/images/food-2.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Tacos',
        price: 40,
        image: '../assets/images/gallery3.jpg',
        supplier: 'Taco',
        unity: 'kg'
        
    },{
        name: 'Vegetables',
        price: 27,
        image: '../assets/images/gallery4.jpg',
        supplier: 'Arroces SA',
        unity: 'kg'
        
    },{
        name: 'Pizza',
        price: 20,
        image: '../assets/images/gallery5.jpg',
        supplier: 'Mandracuch',
        unity: 'kg'
    },{
        name: 'Meat',
        price: 20,
        image: '../assets/images/gallery6.jpg',
        supplier: 'Arroces SA',
        unity: 'kg'
    },{
        name: 'Tea Break',
        price: 20,
        image: '../assets/images/gallery7.jpg',
        supplier: 'Foodity',
        unity: 'kg'
    },{
        name: 'Meat',
        price: 7,
        image: '../assets/images/food-4.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Delicious Chiken',
        price: 7,
        image: '../assets/images/food-1.jpg',
        supplier: 'Lettuces INC',
        unity: 'kg'
        
    },{
        name: 'Huge Lettuce',
        price: 13,
        image: '../assets/images/gallery1.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Little Lettuce',
        price: 7,
        image: '../assets/images/gallery8.jpg',
        supplier: 'Very Vegetable',
        unity: 'kg'
        
    },{
        name: 'Tacos',
        price: 40,
        image: '../assets/images/gallery3.jpg',
        supplier: 'Taco',
        unity: 'kg'
        
    }];
  }
  
  
  return { 
      weeklyFeatured: weeklyFeatured,
      newProducts: newProducts,
  }

}]);
