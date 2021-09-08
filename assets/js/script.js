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
var integer = window.prompt("How many numbers to you want?")
console.log("Thiis is the number of digits you asked for " + integer)

//I defined picker and it will spit out one option every time used. Right now it is either one of 4 cases
// later I will have to change that 4 to the correct character for that space

var picker = function(){
var random = Math.floor(Math.random()*4)
console.log("This is the case number " + random)

switch (random){
case 0:
  console.log(list.numbers[Math.floor(Math.random()*list.numbers.length)])
  break;
  
case 1:
  console.log(list.special[Math.floor(Math.random()*list.special.length)])
  break;

case 2:
  console.log(list.letters[Math.floor(Math.random()*list.letters.length)])
  break;

case 3:
  console.log(list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)])
  break;
}
}

picker()

var test = 0

for (i=0; i > integer; i++) {
console.log(i)
}

//add if check to see if it was a number between 8 - 128


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)
