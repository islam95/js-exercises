/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

var taxPercent = 0.2;

function calculateSalesTax(price) {
  var result = price * taxPercent;
  return result;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);

/*
  I have to change this line of code because it castes the numbers as strings
  So it outputs 12.52.5 instead of 15
  Prevent the implicit string casting by swapping the plus sign (+) with a comma (,)
  https://stackoverflow.com/questions/14597246/javascript-console-logobject-vs-concatenating-string
  Let me know if I am wrong. Thank you.
*/
console.log("Total: £", price + salesTax);
