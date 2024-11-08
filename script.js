let currentInput = ""
let operator = ""

function appendNumbers(number) {
    currentInput += number
    document.getElementById("display").value = currentInput
    console.log("number = " + currentInput);
}

function addition() {
    currentInput += "+"
    operator = "+"
    document.getElementById("display").value = currentInput
}

function substraction() {
    currentInput += "-"
    operator = "-"
    document.getElementById("display").value = currentInput
}

function multiplication() {
    currentInput += "*"
    operator = "*"
    document.getElementById("display").value = currentInput
}
function division() {
    currentInput += "/"
    operator = "/"
    document.getElementById("display").value = currentInput
}

function calculate() {

    let numbers = currentInput.split(operator)
    let num1 = parseFloat(numbers[0])
    let num2 = parseFloat(numbers[1])
    let result = 0

    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
    }

    document.getElementById("display").value = result
}