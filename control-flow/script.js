/*
// 1 Let's Fuel Up!
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.

// exm
calculateFuel(15) // ➞ 150

calculateFuel(23.5) // ➞ 235

calculateFuel(3) // ➞ 100

*/

function calculateFuel(n){
    let amount = n * 10;
    if (amount < 100){
        console.log(100);
    }else {
        console.log(amount);
    }
}
// calculateFuel(15) // 150
// calculateFuel(23.5) // 235
// calculateFuel(3) // 100
// calculateFuel(3.14); // 100
// calculateFuel(9.99999); // 100
// calculateFuel(12345.6789); // 123456.789

/**
// 2 Find the Bug: Returning the Container
The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
 */
function getContainer(product) {
  let container;
  switch (product) {
    case "Bread":
      container = "bag";
      break;
    case "Beer":
    case "Milk":
      container = "bottle";
      break;
    case "Cerials":
      container = "box";
      break;
    case "Eggs":
      container = "carton";
      break;
    case "Candy":
      container = "plastic";
      break;
    default:
      container = null;
  }

  return container;
}
// console.log(getContainer("Bread")); // bag
// console.log(getContainer("Milk")); // bottle
// console.log(getContainer("Beer")); // bottle
// console.log(getContainer("Eggs")); // carton
// console.log(getContainer("Candy")); // plastic
// console.log(getContainer("Cheese")); // null


/*
// 3 Find the Bug: Returning Valid Units of Measure
There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

The return value should be a Boolean.

Notes
Run the tests first to see the results before making changes and understand why eggs is not returning a boolean.
Why is eggs not returning a boolean?
When merging conditions through ||, the returned value is the result of the last truthy condition.

// because we say simply return the comment 
*/

function hasValidUnitOfMeasure(product = {}) {
  const { unitOfMeasure, comment } = product;
  return comment  || unitOfMeasure === "L" || unitOfMeasure === "PCE";
}
// console.log(hasValidUnitOfMeasure({ product: "Milk", unitOfMeasure: "L" }));
// console.log(hasValidUnitOfMeasure({ product: "Cereals", unitOfMeasure: "" }));
// console.log(hasValidUnitOfMeasure({ product: "Beer", unitOfMeasure: false }));
// console.log(hasValidUnitOfMeasure({ 
//     product: "Beef", unitOfMeasure: "Cow" }));

// console.log(
//   hasValidUnitOfMeasure({
//     product: "Eggs",
//     // unitOfMeasure: "L",
//     comment: "Eggs are too different in size",
//   })
// );

