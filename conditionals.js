// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
    let answer1 = "";
    // ------------------------------------------
    // Write your code for exercise 1 below here:
    // ------------------------------------------
    answer1 = "num1 is small";
    if (num1 > 10){
        answer1 = "The value of num1 is " + num1 + " and is greater than 10";
    }
    // ------------------------------------------
    // And above here
    // ------------------------------------------
    return answer1;
  }

console.log(exercise1(10));
console.log(exercise1(20));
  