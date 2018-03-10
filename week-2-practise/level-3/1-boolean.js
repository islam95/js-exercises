// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = false; // This variable is predicate, so should be type of boolean

/* 
  1. Here a string is compared to boolean. This should be changed.
  2. It is always better to use '===' when comparing, instead of '=='. However, it depends on situation.
  3. The boolean value 'true' can be omitted here.
*/
if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
