"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
let alien_color = 'green';
if (alien_color == 'green') {
    console.log('Congratulations!The player earned 5 points');
}
else if (alien_color == 'yellow') {
    console.log('Congratulations!The player earned 10 points');
}
else {
    console.log('the player earned 15 points');
}
//• If the alien is yellow, print a message that the player earned 10 points.
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log('The player earned 5 points');
}
else if (alien_color == 'yellow') {
    console.log('Congratulations!The player earned 10 points');
}
else {
    console.log('Congratulations!The player earned 15 points');
}
//• If the alien is red, print a message that the player earned 15 points.
alien_color = 'red';
if (alien_color == 'green') {
    console.log('The player earned 5 points');
}
else if (alien_color == 'yellow') {
    console.log('Congratulations!The player earned 10 points');
}
else {
    console.log('Congratulations!The player earned 15 points');
}
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
