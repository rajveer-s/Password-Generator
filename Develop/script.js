// selecting the button id from HTML 
let generateBtn = document.querySelector("#generate");

// array with lowercase alphabets
const isLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// array with uppercase alphabets
const isUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// array with numbers
const isNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// an array with special characters.
const isSpecialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
// empty array that holds all the confirmed options in it.
const charHolder = [];

// genrate password function made
function generatePassword() {
    // a new variable to hold all the password characters 
    let passwordInput = '';

    // numberOfChar variable to validate char length (prompts for number of characters)
    let numberOfChars = prompt('Please enter a number between 8 and 128');
    // parseint to convert the string into a number 
    numberOfChars = parseInt(numberOfChars);
    // if the password charcaters are lower than 8 and more than 128 words it'll thorw an alert
    if (numberOfChars < 8 || numberOfChars > 128 === true) {
        alert("Please enter a number between 8 and 128");
        return '';
    }
