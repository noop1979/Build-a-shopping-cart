let products= [];

const product1 ={
  name: "cherry",
  price: 1.49,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
};
const product2 ={
  name: "orange",
  price: 0.99,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
};
const product3 = {
  name: "strawberry",
  price: 1.09,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
};
products.push(product1, product2, product3);


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
   */

const cart =[];

function getProductbyId(productId,products) {
  return products.find((product)=> product.productId===productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/function addProductToCart(productId){
  let product = products.find((product) => product.productId===productId);
  product.quantity += 1;

  if (!cart.includes(product)){
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/function increaseQuantity(productId) {
    const product = getProductbyId(productId, cart);
  ++product.quantity;
}

  
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/function decreaseQuantity(productId) {
  const product = getProductbyId(productId, cart);
  --product.quantity;

  if (product.quantity=== 0) {
    removeProductFromCart(productId);
  }

}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/function removeProductFromCart(productId) {
  
  let product = getProductbyId(productId,cart);
  product.quantity = 0;
  cart.splice(cart.indexOf(product),1);
}

let totalPaid = 0;

function cartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price*item.quantity;
  });
  return total;
}

function emptyCart() {
  cart.forEach(function(product){
});
}

function pay(ammountRecieved) {
  totalPaid += ammountRecieved;
  let remainingAmmount = totalPaid - cartTotal();
  if (remainingAmmount>=0) {
    totalPaid =0;
  }
  return remainingAmmount
  
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart



/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to custom

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/



/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay, 
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
  }