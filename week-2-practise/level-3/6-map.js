// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. A new array (`mentorsTidy`) should be created containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function capitalise(str) {
  var split = str.split("");
  var capitalised = split[0].toUpperCase() + split.slice(1).join("");
  return capitalised; 
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised = mentors.map(tidyUpString).map(capitalise);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
