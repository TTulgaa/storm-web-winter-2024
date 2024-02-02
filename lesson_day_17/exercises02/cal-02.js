const ButtonElements = document.querySelectorAll(".btn")
console.log(ButtonElements)
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