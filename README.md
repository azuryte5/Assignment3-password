# Password Generator Starter Code
Github application: https://azuryte5.github.io/Assignment3-password/
Github repository: https://github.com/azuryte5/Assignment3-password

<img src="assets/images/password-challenge.png" alt="Image of my generator with some code as a teaser" width="500">

# unique comments
* This challenge took me over 20hours to understand, digest and compute. I understood the deciding between 16 possible user interactions was the 
toughest part. Most of my time was then spent on how to coordinate the functions to align
* I noticed that my pickFour was failing when password count was low (8) at returning a character from each category 30%. Made var balance to adjust
* PickThree fails about 12% (1/8) of the time (on password length of 8) but I had to move on. If it happens just reroll and it will work.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
[✅]THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
[✅]THEN I select which criteria to include in the password
WHEN prompted for the length of the password
[✅]THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
[✅]THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
[✅]THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
[✅]THEN a password is generated that matches the selected criteria
WHEN the password is generated
[✅]THEN the password is either displayed in an alert or written to the page