const input = document.getElementById('input')
const result = document.getElementById('toDo')
const ulElement = document.createElement("ul")
result.appendChild(ulElement)
let arry=[]

//if (localStorage.getItem('todolist') !== null) {
//    arry = JSON.parse(localStorage.getItem("todolist"))
//}
//else{

//}


input.addEventListener('keydown', function(event){
    if (event.key === 'Enter' && input.value!== "") {
        const liElement = document.createElement("li")
        ulElement.appendChild(liElement)
        liElement.textContent = input.value
        liElement.setAttribute("onclick", 'line(event)')
        
        liElement.addEventListener('contextmenu', function(event){
            event.target.remove();
            console.log('context menu clicked');
        })
        liElement.style.borderTop = "0.5px solid red"
        result.style.border = "1px solid red"
        result.style.borderRadius = "4px"
 
        
        arry.push(input.value)
        input.value = ""
        console.log(arry)
        localStorage.setItem("todolist", JSON.stringify(arry))
       
   }
})

function line(event){
        event.target.style='text-decoration: line-through;' 
}

