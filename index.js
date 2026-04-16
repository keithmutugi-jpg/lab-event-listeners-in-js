// 1. CHANGE BACKGROUND COLOR
function changeBackgroundColor() {
  const randomChannel = () => Math.floor(Math.random() * 256)
  const color = `rgb(${randomChannel()}, ${randomChannel()}, ${randomChannel()})`
  document.body.style.backgroundColor = color
  updateInteractionStatus(`Background changed to ${color}`)
}

// 2. RESET BACKGROUND COLOR
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
  updateInteractionStatus('Background reset to default')
}

// 3. DISPLAY KEY PRESS
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay')
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`
  }
  updateInteractionStatus(`Last action: key "${event.key}"`)
}

// 4. DISPLAY USER INPUT
function displayUserInput() {
  const input = document.getElementById('textInput')
  const output = document.getElementById('textInputDisplay')

  if (input && output) {
    output.textContent = `You typed: ${input.value}`
    updateInteractionStatus(`Typing: ${input.value}`)
  }
}

function submitTextInput(event) {
  event.preventDefault()
  const input = document.getElementById('textInput')
  const response = document.getElementById('formSubmitResponse')

  if (input && response) {
    response.textContent = `Form submitted with: ${input.value || 'empty text'}`
  }
  updateInteractionStatus('Form submitted successfully')
}

function handleHover() {
  const hoverBox = document.getElementById('hoverBox')
  if (hoverBox) {
    hoverBox.style.backgroundColor = '#ffeaa7'
    hoverBox.style.color = '#2d3436'
  }
  updateInteractionStatus('Hovering over the box')
}

function handleMouseOut() {
  const hoverBox = document.getElementById('hoverBox')
  if (hoverBox) {
    hoverBox.style.backgroundColor = ''
    hoverBox.style.color = ''
  }
  updateInteractionStatus('Mouse left the hover box')
}

function updateInteractionStatus(message) {
  const status = document.getElementById('formSubmitResponse')
  if (status) {
    status.textContent = message
  }
}

// 5. SETUP EVENT LISTENERS (VERY IMPORTANT FOR TESTS)
function setupEventListeners() {
  const changeButton = document.getElementById('changeColorButton')
  const resetButton = document.getElementById('resetColorButton')
  const input = document.getElementById('textInput')
  const form = document.getElementById('textForm')
  const hoverBox = document.getElementById('hoverBox')

  if (changeButton) {
    changeButton.addEventListener('click', changeBackgroundColor)
  }

  if (resetButton) {
    resetButton.addEventListener('dblclick', resetBackgroundColor)
  }

  document.addEventListener('keydown', displayKeyPress)

  if (input) {
    input.addEventListener('input', displayUserInput)
  }

  if (form) {
    form.addEventListener('submit', submitTextInput)
  }

  if (hoverBox) {
    hoverBox.addEventListener('mouseover', handleHover)
    hoverBox.addEventListener('mouseout', handleMouseOut)
  }
}

// EXPORT (REQUIRED FOR JEST)
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
