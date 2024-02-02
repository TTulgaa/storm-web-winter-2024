const ButtonElements = document.querySelectorAll(".btn")
delete ButtonElements[0]
console.log(ButtonElements)
const stringNumber = [0, 1, 2, 3, 4, 5]
//delete stringNumber[2]
console.log(stringNumber)
let inputElement = document.getElementById("inputnumber")
function operation(operator, operand, operation){
    if (operation==="+"){
        return parseInt(operator) + parseInt(operand)
    }
    else if (operation === "-"){
        return parseInt(operator) - parseInt(operand)
    }
    else if (operation === "/"){
        return parseInt(operator) / parseInt(operand)
    }
    else if (operation === "*"){
        return parseInt(operator) * parseInt(operand)
    }
}