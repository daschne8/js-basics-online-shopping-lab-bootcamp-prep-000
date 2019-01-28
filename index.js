var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var grocery = {};
 grocery["itemName"] = item;
 grocery["itemPrice"] = Math.floor(Math.random()*100+1);
 cart.push(grocery);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var inYourCart = "In your cart, you have "
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  for(var i=0;i<cart.length;i++){
    inYourCart = inYourCart + `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if(i !== cart.length-1){
      inYourCart += ", "
    }
}
  inYourCart += "."
  return inYourCart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
