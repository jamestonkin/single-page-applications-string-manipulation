// Set variables and gets references to DOM elements
var testString = '';
var resultsReverse = document.getElementById('results-reverse');
var resultsAlpha = document.getElementById('results-alpha');
var resultsPalin = document.getElementById('results-palin');

// Get a reference to the button elements in the DOM
var button = document.getElementById('textButton');

// Function to reverse the text input
function reversal(testString) {
  resultsReverse.innerHTML += testString.split('').reverse().join('');
}

// Function to alphabetize the text input
function alphabits(testString) {
  console.log('alpha test: ', testString);
  resultsAlpha.innerHTML += testString.split('').sort().join('');
}
 // Funtion to tell whether or not text input is a palindrome
function palindrome(testString) {
  if (testString === testString.split('').reverse().join('')) {
    resultsPalin.innerHTML += 'This is a palindrome!';
  } else {
    resultsPalin.innerHTML += 'This is NOT a palindrome!';
  }
}

// Listens for button press, sets input to testString, and calls functions
button.addEventListener('click', function (event) {
  testString = document.getElementById('some-text').value;
  alphabits(testString);
  reversal(testString);
  palindrome(testString);
});

// If enter is pressed runs like button is pressed
document.getElementById('some-text').onkeypress = function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var pressedEnter = document.getElementById('textButton').click();
  }
};
