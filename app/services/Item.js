angular.module('app.services').factory('Item', [function() {

  function weeklyFeatured() {
    return [{
        name: 'Vegetables',
        price: 20,
        image: '../assets/images/sale1.jpg',
        date: new Date().visual()
        
    },{
        name: 'Pizza',
        price: 20,
        image: '../assets/images/sale2.jpg',
        date: new Date().visual()
    },{
        name: 'Meat',
        price: 20,
        image: '../assets/images/sale3.jpg',
        date: new Date().visual()
    },{
        name: 'Tea Break',
        price: 20,
        image: '../assets/images/sale4.jpg',
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
  
  
  function recipes() {
    return [{
        name: 'Lettuce salad',
        image: '../assets/images/recipe1.jpg',
        products: ['Delicious chicken', 'Gigant Lettuce', 'Meat']
    },{
        name: 'Baked Chicken',
        image: '../assets/images/recipe2.jpg',
        products: ['Tacos', 'Not a Lettuce', 'Sort of Pizza']
    },{
        name: 'The Definitive Burger',
        image: '../assets/images/recipe3.jpg',
        products: ['Hamburguers', 'Milk', 'Vegetables']
    }];
  }
  
  function getBySupplier(id) {
        return [{
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
            name: 'Milk',
            price: 7,
            image: '../assets/images/food-2.jpg',
            supplier: 'Very Vegetable',
            unity: 'kg'

        }];
  }
  
  function getById(id) {
        return {
            name: 'Huge Lettuce',
            price: 13,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            image: '../assets/images/product.jpg',
            supplier: 'Very Vegetable',
            unity: 'kg',
            stars: 4
        };
  }
  
  
  return { 
      weeklyFeatured: weeklyFeatured,
      newProducts: newProducts,
      recipes: recipes,
      getById: getById,
      getBySupplier: getBySupplier
  }

}]);
