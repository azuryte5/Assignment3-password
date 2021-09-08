// 1 when I click the button I am asked a series of prompts


// 2 when prompted with password questions, user selects what they want to see

// 3 When prompted for the password length, i choose between 8-128 characters

// 4 when asked what types of characters,user picks among lowercase, uppercase, numberic, special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" https://owasp.org/www-community/password-special-characters

// 5 when input is given user is returned with at least 1 character of each selected type

// 6 when all prompts are answered a password is generated that match the selected critria

//7 when there is a password it is given to the user either in box or as an alert.



// listspecial = window.confirm("Do you want special characters?");

if (special=true) {
  var pool = ("!" + "@" + "#" + "$"+ "%"+ "^"+ "&"+ "*"+ "("+ ")"+ "-") 
}


//console.log(pool)

var list = {
  special: ["!", "@", "#", "$", "%", "&", "*", "(", ")"],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  letters:["a", "b" , "c", "d", "e", "f", "g","h", "i","j"],
}

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min) + min);
}

var questions = ["Do you want numbers?","Do you want special characters?", "Do you want uppercase letters?", "Do you want lowercase letters?"]
console.log(questions.length)

for (i=0; i > 4; i++) {
window.prompt(questions[i])
}

counter = 0 //if this works add reset
//var asknumber = window.confirm("Do you want numbers?");
//if (asknumber=true) {
//  var counter = counter + 1;  
//} else { 
//  counter = counter + 0;
//}
// if counter stays at 0 return to start to try again
console.log(counter)

var integer = window.prompt("How many numbers to you want?")
console.log(integer)

var picker = function(){

for (i=0; i > integer; i++) {
  //picker(counter)
  var step = randomNumber(0,9);

}

// picker(counter) first define function and then this will pick a character to spit out

}

// add characters to be uppercase or lower case . What If i charset [n] pull one and add it to string?
//this will have to be a while loop, conditional to upper and lower case.



//add if check to see if it was a number between 8 - 128

// I need a counter variable for the randomness 0,1,2,3 in loop of picking a number I need to determine which number it could be
// then add it to the string. start with numbers
var picker = function(){
 //this will choose which character to spit out 
}

for (i = 0; i > integer; i++){
var step = Math.random(0,0)
console.log(step)

switch (step) {
  case 0:
    var entry = Math.floor(Math.random()*10)
  console.log(entry)
}
}
console.log(step)
console.log(entry)



//change to random. This takes values from correct position
// console.log(list.special[random])
// console.log(list.numbers[random])
// console.log(list.letters[random])
// integer is going to have to be the # of digits in the loop and charcter
// I'll have to determine how long to make the loop
//Which charcter type it is going to be (random)
// the slot and then string them all together


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
