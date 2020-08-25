"use strict"

alert('Hi stranger');

let age = prompt("Enter your age, please");

// if (age > 14 && age < 90) {
//     alert("You can enter");
// } else if (age < 14) {
//     alert('You are too young')
// } else if(age > 90) {
//     alert('You are too old')
// }

if (age < 14 && age > 90) {
    alert("You can enter");
} else if (age > 14) {
    alert('You are too old')
} else if(age < 90) {
    alert('You are too young')
}