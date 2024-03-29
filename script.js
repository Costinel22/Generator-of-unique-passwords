// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    while (true) {
        // add prompt options 
        var length = parseInt(prompt("Tel me the caracter number you want to have in password no les 8 or more 128"));
        // add condition allert check
        if (length >= 8 && length <= 128) {
            // create variable to store password caracter confirmation
            var addSpecialCharacters = confirm("Du you want to use special characters?");
            var addNumericCharacters = confirm("Do you want to use numeric characters?");
            var addLowerCasedCharacters = confirm("Do you want to use lowercase characters?");
            var addUpperCasedCharacters = confirm("Do you want to use upercase caracters?");
            return { length, addSpecialCharacters, addUpperCasedCharacters, addLowerCasedCharacters, addNumericCharacters }
        } else {
            alert("Please enter your caracter number between 8 and 128 characters!");
        }
    }
}
// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var characters = [];
    if (options.addUpperCasedCharacters) {
        characters.push(...upperCasedCharacters);
    }
    if (options.addLowerCasedCharacters) {
        characters.push(...lowerCasedCharacters);
    }
    if (options.addNumericCharacters) {
        characters.push(...numericCharacters);
    }
    if (options.addSpecialCharacters) {
        characters.push(...specialCharacters);
    }
    var password = "";
    for (var i = 0; i < options.length; i++) {
        password += getRandom(characters);
    }
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);