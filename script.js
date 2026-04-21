// script.js

// Function to append a number to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += ' ' + operator + ' ';
}

// Function to calculate the result based on the current display
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}