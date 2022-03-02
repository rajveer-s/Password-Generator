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
    let numberOfChars = prompt('Please enter a number between 8 and 128 to set the length of your password');
    // parseint to convert the string into a number 
    numberOfChars = parseInt(numberOfChars);
    // if the password charcaters are lower than 8 and more than 128 words it'll thorw an alert
    if (numberOfChars < 8 || numberOfChars > 128 === true) {
        alert("Please enter a number between 8 and 128");
        return '';
    }

    // variable adduppercase  confirms for capital letters in the password.
    let addUpperCase = confirm("Would you like to add Uppercase letters in your password ?");
    if (addUpperCase) {
        charHolder.push(...isUpperCase);
    }

    // variable lower case  confirms for smaller lowercase letters in the password.
    let addLowerCase = confirm("would you like to add Lowercase letters in your password ?");
    if (addLowerCase) {
        charHolder.push(...isLowerCase);

    }

    // variable addnumscase  confirms for numbers in the password.
    let addNums = confirm("Would you like to add numbers in your password ?");
    if (addNums) {
        charHolder.push(...isNumbers);

    }

    // variable addspecialcase  confirms for special characters in the password.
    let addSpecialChars = confirm("Would you like to add special characters in your password ?");
    if (addSpecialChars) {
        charHolder.push(...isSpecialChars);

    }

    // if they select none of the abpve variables than it'll thorw an alert
    if (!addLowerCase && !addNums && !addSpecialChars && !addUpperCase) {
        alert("You have to atleast choose one.");
        return false;
    }

    // for loop is used to generate a string of characters 
    for (var i = 0; i < numberOfChars; i++) {
        var anyInt = Math.floor(Math.random() * charHolder.length);
        passwordInput += charHolder[anyInt];
    }
    return passwordInput;
}

// function to display the password 
function writePassword() {
    var password = generatePassword();
    if (!password) {
        password = generatePassword();
    }
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// added an eventlistener to the genrate button so it listens for a click and runs the function 
generateBtn.addEventListener("click", writePassword);

