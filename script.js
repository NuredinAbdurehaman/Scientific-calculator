function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      const result = eval(display.value);
      display.value = result;
  } catch (error) {
      display.value = 'Error';
  }
}

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Handle number keys and basic operators
  if (key >= '0' && key <= '9') {
      appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendToDisplay(key === '*' ? '×' : key); // Optional: Change * to × for better UI
  } else if (key === 'Enter') {
      calculateResult();
  } else if (key === 'Backspace') {
      const display = document.getElementById('display');
      display.value = display.value.slice(0, -1); // Remove last character
  } else if (key === 'Escape') {
      clearDisplay();
  } else if (key === 's') {
      appendToDisplay('Math.sin(');
  } else if (key === 'c') {
      appendToDisplay('Math.cos(');
  } else if (key === 't') {
      appendToDisplay('Math.tan(');
  } else if (key === 'r') {
      appendToDisplay('Math.sqrt(');
  } else if (key === '.') {
      appendToDisplay(key);
  }
});