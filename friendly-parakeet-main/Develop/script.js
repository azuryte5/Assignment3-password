// 1 when I click the button I am asked a series of prompts


// 2 when prompted with password questions, user selects what they want to see

// 3 When prompted for the password length, i choose between 8-128 characters

// 4 when asked what types of characters,user picks among lowercase, uppercase, numberic, special characters

// 5 when input is given user is returned with at least 1 character of each selected type

// 6 when all prompts are answered a password is generated that match the selected critria

//7 when there is a password it is given to the user either in box or as an alert.



//var special = window.confirm("Do you want special characters?");

if (special=true) {
  var pool = ("!" + "@" + "#" + "$"+ "%"+ "^"+ "&"+ "*"+ "("+ ")"+ "-") 
}


//var numbers = window.confirm("Do you want numbers?");

if (numbers=true){
  var pool = pool + ("1" + "2" + "0"+ "3"+ "4"+ "5"+ "6"+ "7"+ "8"+ "9")
}

//console.log(pool)

var list = {
  special: ["!", "@", "#", "$", "%", "&", "*", "(", ")"],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  letters:["a", "b" , "c", "d", "e", "f", "g","h", "i","j"],
}
// add characters to be uppercase or lower case
//this will have to be a while loop, conditional to upper and lower case.
var integer = window.prompt("How many numbers to you want?")
console.log(list.special);
console.log(random)

//change to random. This takes values from correct position
// console.log(list.special[random])
// console.log(list.numbers[random])
// console.log(list.letters[random])
// integer is going to have to be the # of digits in the loop and charcter
// I'll have to determine how long to make the loop
//Which charcter type it is going to be (random)
// the slot and then string them all together
for (i = 0; i > integer; i++){
  
}
console.log(list.special.length)
console.log(random);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
