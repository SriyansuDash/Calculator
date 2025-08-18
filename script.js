let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                let expression = currentInput.replace(/×/g, '*').replace(/−/g, '-');
                currentInput = eval(expression).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        }
        else if (buttonText === 'AC') {
            currentInput = "";
            display.value = "0";
        }
        else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || "0";
        }
        else {
            if (currentInput === "0" && buttonText !== ".") {
                currentInput = buttonText;
            } else if (buttonText === "." && currentInput.includes(".")) {
                return;
            } else {
                currentInput += buttonText;
            }
            display.value = currentInput;
        }
    });
});