const buttonElements = document.getElementsByClassName("btn")
console.log(buttonElements)
const decreaseButton = buttonElements[0]
const resetButton = buttonElements[1]
const increaseButton = buttonElements[2]
const result = document.getElementById("value")
decreaseButton.addEventListener("click", function(){
    result.innerHTML --
    if(parseInt(result.innerHTML)<0){
        result.style.color = "red"
    }
    else if(parseInt(result.innerHTML)>0){
        result.style.color = "green"
    }
    else{
        result.style.color = "black"
    }
})
increaseButton.addEventListener("click", function(){
    result.innerHTML ++
    if(parseInt(result.innerHTML)<0){
        result.style.color = "red"
    }
    else if(parseInt(result.innerHTML)>0){
        result.style.color = "green"
    }
    else{
        result.style.color = "black"
    }
})
resetButton.addEventListener("click", function(){
    result.innerHTML = "0"
    result.style.color = "black"
})
