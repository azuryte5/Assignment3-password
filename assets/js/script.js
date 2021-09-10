// My list of arrays organized slightly, some special characters do not work
var list = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "^", "|"],
  letters: ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
  LETTERS: ["A", "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"],
}

// This show that we can pick a random character from the array
//console.log("This is the number of possible digits " + list.numbers.length);
//console.log("This is a random number generated " + list.numbers[Math.floor(Math.random()*list.numbers.length)]);
//console.log("This is the number of possible special characters " + list.special.length);
//console.log("This is a random special character " + list.special[Math.floor(Math.random()*list.special.length)]);
//console.log("This is the number of possible lowercase letters " + list.letters.length);
//console.log("This is a random lower case letter "+ list.letters[Math.floor(Math.random()*list.letters.length)]);
//console.log("This is the number of uppercase letters "+ list.LETTERS.length);
//console.log("This is a random uppercase character " + list.LETTERS[Math.floor(Math.random()*list.letters.length)]);

// I will need a function to count how many characters to string
var passwordLength = function () {
  var prompt = window.prompt("How long do you want your password to be (Between 8 - 128 Characters)?")
  var integer = parseInt(prompt, 10)
// if the password is not a number, empty too long or too short return password length
if (prompt === ""|| isNaN(integer)  ||integer === undefined ) {
  window.alert("You need to put in a number, try again");
  return passwordLength();
}

if (integer <= 7) {
  window.alert("Your password is too short, try again");
  return passwordLength();
}

if (integer >= 129) {
  window.alert("Your password is too long, try again");
  return passwordLength();
}

else {
  return integer
}
}

// This actually works. If count is one, this function will determine which case # to use
var pickOne = function (number, special, letters, LETTERS) {
  console.log("Pick one of either" + number + special + letters + LETTERS)
  if (number==true && special == false && letters == false && LETTERS==false){
  answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer
  }
  if (number==false && special == true && letters == false && LETTERS==false){
    answer = list.special[Math.floor(Math.random()*list.special.length)]
  return answer
  }
  if (number==false && special == false && letters == true && LETTERS==false){
    answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer
  }
  if (number==false && special == false && letters == false && LETTERS==true){
    answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
    return answer
  }
}


var pickTwo = function (number, special, letters, LETTERS) {
var random = 0  
  console.log("Pick from two of either" + number + special + letters + LETTERS)
  if (number==true && special == true && letters == false && LETTERS==false){
  random = Math.round(Math.random())
  console.log(random)
  switch(random){
  case 0:answer =list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer;
  break;
  case 1:answer =list.special[Math.floor(Math.random()*list.special.length)]
  return answer;
  }}

  if (number==true && special == false && letters == true && LETTERS==false){
  random = Math.round(Math.random())
  console.log(random)
  switch(random){
  case 0: answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer;
  break;
  case 1:answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer
  }}

  if (number==true && special == false && letters == false && LETTERS==true){
  random = Math.round(Math.random())
  console.log(random)
  switch(random){
  case 0: answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer;
  break;
  case 1:answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
  return answer
  }}

  if (number==false && special == true && letters == true && LETTERS==false){
  random = Math.round(Math.random())
  console.log(random)
  switch(random){
  case 0: answer = list.special[Math.floor(Math.random()*list.special.length)]
  return answer;
  break;
  case 1: answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer
  }}

  if (number==false && special == true && letters == false && LETTERS==true){
  random = Math.round(Math.random())
  console.log(random)
  switch(random){
  case 0: answer = list.special[Math.floor(Math.random()*list.special.length)]
  return answer;
  break;
  case 1: answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
  return answer
  }}

  if (number==false && special == false && letters == true && LETTERS==true){
  random = Math.round(Math.random())
  console.log(random)
  switch(random){
  case 0: answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer;
  break;
  case 1: answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
    return answer
  }}
}
var pickThree = function (number, special, letters, LETTERS) {
  console.log("Pick one of either" + number + special + letters + LETTERS)
  if (number==true && special == true && letters == true && LETTERS==false){
  random = Math.floor(Math.random()*3)
  console.log(random)
  switch(random){
  case 0:answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer;
  break;
  case 1:answer = list.special[Math.floor(Math.random()*list.special.length)]
  return answer;
  break;
  case 2:answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer;
  }}
  if (number==true && special == true && letters == false && LETTERS==true){
  random = Math.floor(Math.random()*3)
  console.log(random)
  switch(random){
  case 0:answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer;
  break;
  case 1:answer = list.special[Math.floor(Math.random()*list.special.length)]
  return answer;
  break;
  case 2:answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
  return answer;
  }}
  if (number==false && special == true && letters == true && LETTERS==true){
  random = Math.floor(Math.random()*3)
  console.log(random)
  switch(random){
  case 0:answer = list.special[Math.floor(Math.random()*list.special.length)]
  return answer;
  break;
  case 1:answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer;
  break;
  case 2:answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
  return answer;
  }}
  if (number== true && special == false && letters == true && LETTERS==true){
  random = Math.floor(Math.random()*3)
  console.log(random)
  switch(random){
  case 0:answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
  return answer;
  break;
  case 1:answer = list.letters[Math.floor(Math.random()*list.letters.length)]
  return answer;
  break;
  case 2:answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
  return answer;
    }}
}

// pickFour will return a random character from all four prompts if applicable
// I think i need to tailor it to pick a random case and then have a seperate function that spits a number! this is too much at once
var pickFour = function () {  
  //console.log("All four options were chosen!")
  answer = 0
  random = Math.floor(Math.random()* 4) 
  switch (random){
  case 0:
    console.log("case number")
    answer = list.numbers[Math.floor(Math.random()*list.numbers.length)]
    return answer
    break;
    
  case 1:
    console.log("case special")
    answer = list.special[Math.floor(Math.random()*list.special.length)]
    return answer
    break;
  
  case 2:
    console.log("case letter")
    answer = list.letters[Math.floor(Math.random()*list.letters.length)]
    return answer
    break;
  
  case 3:
    console.log("case LETTER")
    answer = list.LETTERS[Math.floor(Math.random()*list.LETTERS.length)]
    return answer
    break;
  }
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordSize = passwordLength();
  count = 0
  var number =window.confirm("Do you want numbers in your password?");
  if (number==true){
    console.log("Yes, I want numbers.")
    count++
  } else {
    console.log("Nah, I don't need numbers")
  }
  var special=window.confirm("Do you want special characters in your password?");
  if (special==true){
    console.log("Yes, I want special characters.")
    count++
  } else {
    console.log("Nah, I don't need special")
  }
  var letters=window.confirm("Do you want lower case letters in your password?");
  if (letters==true){
    console.log("Yes, I want lowercase letters.")
    count++
  
  } else {
    console.log("Nah, I don't need lowercase letters")
  }
  var LETTERS=window.confirm("Do you want upper case letters in your password?");
  if (LETTERS==true){
    console.log("Yes, I want uppercase letters.")
    count++
   
  } else {
    console.log("Nah, I don't need uppercase letters")
  }
  console.log("I confirmed this many times: "+ count)
  if (count==0){
    console.log("Why would you pick nothing?")
    window.alert("Why would you pick nothing? Try again")
    return passwordLength()
  }
//This actually works test+=character. change character to actual random character try pickfour first.
// var character = 1;
// test = ""
// while (character <= passwordSize-1 ){
//   character += 1;
//   test +=character
//   console.log(test)
// }
var selector= ""
var repeater=0
var password= ""
while (repeater<= passwordSize) {
  
  repeater+=1
  if (count == 1) {
    selector=pickOne(number, special, letters, LETTERS);
    console.log("The character was " + selector);
    password +=selector;
    console.log(password);}

  if (count == 2) {
    selector=pickTwo(number, special, letters, LETTERS);
    console.log("The character was " + selector);
    password +=selector;
    console.log(password);}

  if (count == 3) {
  selector=pickThree(number, special, letters, LETTERS);
  console.log("The character was " + selector);
  password +=selector;
  console.log(password);}

  if (count == 4){
    selector= pickFour();
    console.log("The character was " + selector);
    password +=selector;
    console.log(password);} 
}  
var passwordText = document.querySelector("#password");
passwordText.value = password;
//integer used to be generatePassword() password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
