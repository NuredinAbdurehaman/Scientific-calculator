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