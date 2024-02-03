const ButtonElements = document.querySelectorAll(".btn")

let operand = ''
let operator = ''
let isOperator = false;
let operation = ''
let btn0Elements = ButtonElements[9]
btn0Elements.addEventListener('click', function (e) {
    if (!isOperator) {
        operand = operand + '0'
        inputElement.value = operand
    } else {
        operator = operator + '0'
        inputElement.value = operator
    }
});
let btn7Elements = ButtonElements[0]
btn7Elements.addEventListener('click', function (e) {
    if (!isOperator) {
        operand = operand + '7'
        inputElement.value = operand
    } else {
        operator = operator + '7'
        inputElement.value = operator
    }
});
let btn8Elements = ButtonElements[1]
let btn9Elements = ButtonElements[2]
let btn1Elements = ButtonElements[6]
let btn2Elements = ButtonElements[7]
let btn3Elements = ButtonElements[8]
let btn4Elements = ButtonElements[3]
let btn5Elements = ButtonElements[4]
let btn6Elements = ButtonElements[5]
let inputElement = document.getElementById("inputNumber")
let btngreyElements = document.getElementsByClassName("grey")
let aCelement = btngreyElements[0]
let mPelement = btngreyElements[1]
let prozentElement = btngreyElements[2]
let operationElements = document.getElementsByClassName("yellow")
let divisionButton = operationElements[0]
divisionButton.addEventListener('click', function (){
    operation = '/'
    isOperator = true;
});
let multiplyButton = operationElements[1]
let minusButton = operationElements[2]
let addButton = operationElements[3]
let eqButton = document.getElementById("eq")
eqButton.addEventListener('click', function(){
    let result = calculateOperation(operation);
    console.log(result)
    inputElement.innerHTML = result;
})
function numberBtn(button) {
    button.addEventListener("click", function (e) {

        inputElement.value += e.target.innerHTML
    })
}
numberBtn(btn0Elements)
numberBtn(btn1Elements)
numberBtn(btn2Elements)
numberBtn(btn1Elements)
numberBtn(btn1Elements)


function calculateOperation (op) {
    if (op == '+') {
        return Number(operand) + Number(operator);
    } 
}