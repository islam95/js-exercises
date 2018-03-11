// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// 1 Way =====================================================
function multiplyBy100(num){
    return num * 100;
}
var newNumbers = numbers.map(multiplyBy100);
console.log(newNumbers);

// 2 Way =====================================================
var newNumbers = numbers.map(function multiplyBy100(num) {
	return num * 100;
});
console.log(newNumbers);

// 3 Way =====================================================
var newNumbers = numbers.map(function (num) {
	return num * 100;
});
console.log(newNumbers);

// 4 Way =====================================================
var newNumbers = numbers.map(num => {
	return num * 100;
});
console.log(newNumbers);

// 5 Way =====================================================
var newNumbers = numbers.map(num => num * 100);
console.log(newNumbers);
