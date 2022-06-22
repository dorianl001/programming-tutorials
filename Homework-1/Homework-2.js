//what is the last value alerted by this code? Why?
/*
let i = 3;

while (i) {
  alert( i-- );
}  
*/
// it would count down 3,2, and end with 1  

// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?
/*
The postfix form:

for (let i = 0; i < 5; i++) alert( i );

The prefix form:

for (let i = 0; i < 5; ++i) alert( i );
*/
//the postfix incrementer will show the value up to incrementer 
// and the prefix will show values after the incrementer but there is no difference

// Use the for loop to output even numbers from 2 to 10.
/*
for (i = 0; i > 11; i++) {
    if ( i % 2) continue;
    alert(i);
}
*/

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
*/

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
/*
let value;
do {
  value = prompt("Choose a number greater than 100");
} while (value >= 100)
*/

