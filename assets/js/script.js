// 1 when I click the button I am asked a series of prompts

// 2 when prompted with password questions, user selects what they want to see

// 3 When prompted for the password length, i choose between 8-128 characters

// 4 when asked what types of characters,user picks among lowercase, uppercase, numberic, special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" https://owasp.org/www-community/password-special-characters

// 5 when input is given user is returned with at least 1 character of each selected type

// 6 when all prompts are answered a password is generated that match the selected critria

// 7 when there is a password it is given to the user either in box or as an alert.



// listspecial = window.confirm("Do you want special characters?");


// My list of arrays organized slightly, some special characters do not work
var list = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "^", "|"],
  letters: ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
  LETTERS: ["A", "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"],
}

// This show that we can pick a random character from the array
console.log("This is the number of possible digits " + list.numbers.length);
console.log("This is a random number generated " + list.numbers[Math.floor(Math.random()*list.numbers.length)]);
console.log("This is the number of possible special characters " + list.special.length);
console.log("This is a random special character " + list.special[Math.floor(Math.random()*list.special.length)]);
console.log("This is the number of possible lowercase letters " + list.letters.length);
console.log("This is a random lower case letter "+ list.letters[Math.floor(Math.random()*list.letters.length)]);
console.log("This is the number of uppercase letters "+ list.LETTERS.length);
console.log("This is a random uppercase character " + list.LETTERS[Math.floor(Math.random()*list.letters.length)]);

// I will need a function to count how many characters to string
var passwordLength = function () {
  var integer = window.prompt("How many numbers to you want?")
  
if (integer === "" || integer === null) {
  window.alert("You need to put in a number, try again");
  return passwordLength();
}

if (integer <= 7) {
  window.alert("You password is too short, try again");
  return passwordLength();
}

if (integer >= 128) {
  window.alert("You password is too long, try again");
  return passwordLength();
}
console.log("This is the number of digits you asked for " + integer)
}


//add if check to see if it was a number between 8 - 128


//I defined picker and it will spit out one option every time used. Right now it is either one of 4 cases
// later I will have to change that 4 to the correct character for that space

var picker = function(){
var random = Math.floor(Math.random()*4)
console.log("This is the case number " + random)

var number =window.confirm("Do you want numbers in your password?");
if (number==true){
  console.log("Yes, I want numbers.")
} else {
  console.log("Nah, I don't need numbers")
}
var special=window.confirm("Do you want special characters in your password?");
if (special==true){
  console.log("Yes, I want special characters.")
} else {
  console.log("Nah, I don't need special")
}
var letters=window.confirm("Do you want lower case letters in your password?");
if (letters==true){
  console.log("Yes, I want lowercase letters.")
} else {
  console.log("Nah, I don't need lowercase letters")
}
var LETTERS=window.confirm("Do you want upper case letters in your password?");
if (LETTERS==true){
  console.log("Yes, I want uppercase letters.")
} else {
  console.log("Nah, I don't need uppercase letters")
}

if (number==false && special==false && letters==false && LETTERS==false){
  console.log("Why would you pick nothing?")
  window.alert("Why would you pick nothing? Try again")
  return picker()
}
switch (random){
case 0:
  console.log("Your random character was " + list.numbers[Math.floor(Math.random()*list.numbers.length)])
  break;
  
case 1:
  console.log("Your random character was " + list.special[Math.floor(Math.random()*list.special.length)])
  break;

case 2:
  console.log("Your random character was " + list.letters[Math.floor(Math.random()*list.letters.length)])
  break;

case 3:
  console.log("Your random character was " + list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)])
  break;
}
}



//var test = 0

//for (i=0; i > integer; i++) {
//console.log(i)
//}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  picker();
  var password = 42;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//integer used to be generatePassword() password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
