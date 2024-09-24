
let buttons = document.getElementsByClassName('button');
let result = document.getElementById('result');


Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
    let input = button.innerText;
    updateDisplay(input);
  });
});


function updateDisplay(input) {
  let currentDisplay = result.innerText;

  if (input === 'AC') {
    result.innerText = '0';
  } else if (input === 'DEL') {
    result.innerText = currentDisplay.length > 1 ? currentDisplay.slice(0, -1) : '0';
  } else if (input === '=') {
    try {
      
      let formattedDisplay = currentDisplay.replace(/×/g, '*').replace(/÷/g, '/');
      result.innerText = eval(formattedDisplay);
    } catch {
      result.innerText = 'Error';
    }
  } else {
    if (currentDisplay === '0' && !isNaN(input)) {
      result.innerText = input;
    } else {
      result.innerText += input;
    }
  }
}
