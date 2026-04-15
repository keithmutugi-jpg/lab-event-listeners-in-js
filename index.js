// 1. CHANGE BACKGROUND COLOR
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// 2. RESET BACKGROUND COLOR
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// 3. DISPLAY KEY PRESS
function displayKeyPress(event) {
    const keyDisplay = document.getElementById("keyDisplay");
    if (keyDisplay) {
        keyDisplay.textContent = `You pressed: ${event.key}`;
    }
}

// 4. DISPLAY USER INPUT
function displayUserInput() {
    const input = document.getElementById("textInput");
    const output = document.getElementById("textDisplay");

    if (input && output) {
        output.textContent = input.value;
    }
}

// 5. SETUP EVENT LISTENERS (VERY IMPORTANT FOR TESTS)
function setupEventListeners() {
    const button = document.getElementById("colorBtn");
    const input = document.getElementById("textInput");

    if (button) {
        button.addEventListener("click", changeBackgroundColor);
        button.addEventListener("dblclick", resetBackgroundColor);
    }

    document.addEventListener("keydown", displayKeyPress);

    if (input) {
        input.addEventListener("input", displayUserInput);
    }
}

// EXPORT (REQUIRED FOR JEST)
module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners
};