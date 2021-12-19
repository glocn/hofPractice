// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  //create array to stores each fruit
  var results = [];

  //iterate over the fruits array
    //calling second param funtion (element, index, list)
      //each iterate over fruits
        //pushing eaching fruit to result array
  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  //create a count to store how many numbers are multiples of 5
  var count = 0;

  //use each to iterate over numbers array
    //second param function (element, index, list)
      //create a conditional that each num needs to pass in order to incremement count
        //return count
  _.each(numbers, function(num, index, collection) {
    //console.log(num);
    if (num % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  //create result which will be the array stored we need to return later
    //call filter on fruits array
      //second param function (list, predicate, [context])
        //return what you want predicate to do
          //return the stored new array from filter
  var result = _.filter(fruits, function(desiredFruit) {
    //console.log(desiredFruit);
    return desiredFruit === targetFruit;
  });
  return result;
};


// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(desired) {
    if (desired[0] === letter) {
      return desired;
    }
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var result = _.filter(desserts, function(desired) {
    if (desired === "cookie") {
      return desired;
    }
  });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  //need to remember to reduce the entire function
  return _.reduce(products, function(memoizer, value) {
    //should value price is a string with '$' and should be converted to num
    var num = parseFloat(value.price.slice(1));
    //console.log(num);
   // console.log(typeof num);
    return memoizer + num;
    //start iteration at index 0
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  //grab the name of dessert
  //value as the count

  return _.reduce(desserts, function(memoizer, value) {
    var dessertType = value.type;
    //memoizer starts off as an empty obj passed

    //if the dessertType isn't present in obj
    if (memoizer[dessertType] === undefined) {
      memoizer[dessertType] = 1;
    } else {
      memoizer[dessertType]++;
    }
    return memoizer;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  return _.reduce(movies, function(memoizer, value) {
    //console.log(value);
    var year = value.releaseYear;

    if (year >= 1990 && year <= 2000) {
      memoizer.push(value.title);
    }
    return memoizer;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  return _.reduce(movies, function(memoizer, value) {
    //console.log(value);
    var runtime = value.runtime;
    //check if runtime is less than timelimit
    if (runtime < timeLimit) {
      memoizer = true;
    }
    return memoizer;
    //set memoizer to false as default
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(string) {
    return string.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(item) {
    //get ingredients array
    var ingredients = item.ingredients;
    //iterate through each ingredient to find if they contain flour
    _.each(ingredients, function(flour) {
      //if the item contains flour
      //add the propoerty glutenFree with value of false
      //otherwise add the property of glutenFree with value of true
      if (flour.indexOf('flour') > -1) {
        item.glutenFree = false;
      } else {
        item.glutenFree = true;
      }
    });
  });
  //return original array of obj
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  _.map(groceries, function(item) {
    //console.log(item);
    //grab original price (which is a string)
      //convert string to number and remove '$'
    var price = parseFloat(item.price.slice(1));
    //find saleprice
    var num = price - (price * coupon);
    //round saleprice to 2 decimal places
    var round = num.toFixed(2);
    //add salePrice to obj
    item.salePrice = '$' + round.toString();

  });
  //return original array of obj
  return groceries;
};
