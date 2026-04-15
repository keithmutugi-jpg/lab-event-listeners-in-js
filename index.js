// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
// ELEMENTS
const button = document.getElementById("colorBtn");
const keyDisplay = document.getElementById("keyDisplay");
const textInput = document.getElementById("textInput");
const textDisplay = document.getElementById("textDisplay");

// ------------------------------
// 1. CHANGE BACKGROUND COLOR
// ------------------------------
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// RESET BACKGROUND COLOR (double click)
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// EVENT LISTENERS FOR BUTTON
button.addEventListener("click", changeBackgroundColor);
button.addEventListener("dblclick", resetBackgroundColor);

// ------------------------------
// 2. KEYBOARD INPUT
// ------------------------------
function displayKeyPress(event) {
    keyDisplay.textContent = `You pressed: ${event.key}`;
}

document.addEventListener("keydown", displayKeyPress);

// ------------------------------
// 3. TEXT INPUT (REAL-TIME)
// ------------------------------
function displayUserInput() {
    textDisplay.textContent = textInput.value;
}

textInput.addEventListener("input", displayUserInput);

// ------------------------------
// 4. COMBINED INTERACTIONS
// ------------------------------

// Example: extra interaction when typing "hello"
textInput.addEventListener("input", () => {
    if (textInput.value.toLowerCase() === "hello") {
        document.body.style.backgroundColor = "lightgreen";
    }
});