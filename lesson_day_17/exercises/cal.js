let inputOperator = document.getElementById("Operator")

let inputOperand = document.getElementById("Operand")
let result = document.getElementById("result")


function addOperation(a,b){
     return a + b;
}
function minusOperation(a,b){
    return a - b
}
function multiplyOperation(a,b){
    return a * b
}
function divisionOperation(a,b){
    return a / b
}
let addButton = document.getElementById("add")
let minusButton = document.getElementById("minus")
let multiplyButton = document.getElementById("multiply")
let divisionButton = document.getElementById("division")
addButton.addEventListener("click", function (){
    const b = Number(inputOperand.value)
    const a = Number(inputOperator.value)
    result.innerHTML = addOperation(a, b)
})
minusButton.addEventListener("click", function(){
    const b = Number(inputOperand.value)
    const a = Number(inputOperator.value)
    result.innerHTML = minusOperation(a, b)
})
multiplyButton.addEventListener("click", function(){
    const b = Number(inputOperand.value)
    const a = Number(inputOperator.value)
    console.log(a, b)
    result.innerHTML = multiplyOperation(a, b)
}
)
divisionButton.addEventListener("click", function(){
    const b = Number(inputOperand.value)
    const a = Number(inputOperator.value)
    console.log(a, b)
    result.innerHTML = divisionOperation(a, b)
})
