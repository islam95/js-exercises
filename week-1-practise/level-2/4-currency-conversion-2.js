/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

var rateUSD = 1.4;
var rateBRL = 4.56;

// Adds 1% to any given number
function addForeignFee(price){
  var fee = price * 0.01;
  var result = fee + price;
  return result;
}

function convertToUSD(price) {
  var result = addForeignFee(price * rateUSD).toFixed(2);
  return result;
}
function convertToBRL(price) {
  var result = addForeignFee(price * rateBRL).toFixed(2);
  return result;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
