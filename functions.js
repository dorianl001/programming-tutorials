//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result:
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
//Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
*/
//Is there any difference in the behavior of these two variants?
//Answer: No because return will still run did parents allow you if the statement is falsey.

/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/
//Answer
/* 
function CheckAge(Age) {
    Age = Age || "Did parents allow you?"
}

function CheckAge(Age) {
    alert(Age ?? "Did parents allow you?")
};
*/

//Write a function min(a,b) which returns the least of two numbers a and b.
/*
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
*/

//Write a function pow(x,n) that returns x in power n. 
//Or, in other words, multiplies x by itself n times and returns the result.

function pow(x,n) {
    return Math.pow(x, n)
}