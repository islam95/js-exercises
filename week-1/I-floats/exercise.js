var numberOfStudents = 15;
var numberOfMentors = 8;

var sum = numberOfStudents + numberOfMentors; // 100%

var studentPercentage = numberOfStudents/sum * 100;
var mentorPercentage = numberOfMentors/sum * 100;

console.log("Percentage students: " + Math.round(studentPercentage) + "%");
console.log("Percentage mentors: " + Math.round(mentorPercentage) + "%");
