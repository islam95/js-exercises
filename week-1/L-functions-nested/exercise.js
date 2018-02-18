var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// -------------------------------------------------
// Execise 2

function nameUpper(name){
    return name.toUpperCase();
}

function shout(name){
    var message = "HELLO " + nameUpper(name);
    return message;
}

console.log(shout(mentor1));
console.log(shout(mentor2));
console.log(shout(mentor3));
console.log(shout(mentor4));
console.log(shout(mentor5));
console.log("\n");

// ---------------------------------------------------
// Execise 1
var numberOfStudents = 15;
var numberOfMentors = 8;

function getPercentage(number, total) {
    var percent = Math.round((number / total) * 100);
    return percent;
}

function message(students, mentors) {
    var total = students + mentors;
    var studentPercentage = getPercentage(students, total);
    var mentorPercentage = getPercentage(mentors, total);

    var message = "Percentage students: " + studentPercentage + "%\nPercentage mentors: " + mentorPercentage + "%";
    return message;
}

console.log(message(numberOfStudents, numberOfMentors));
