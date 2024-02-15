const myObj = {
    name: 'Munkhtulga',
    age : '27',
    hobby : ['tennis', 'anime', 'sleep', 'game']
}
const mainElement = document.getElementsByTagName(mainElement)
console.log(Munkhtulga.hobby)
const ulElement = document.createElement("ul")


function hobbyadd(){
    for (i=0; i< Munkhtulga.hobby.length; i++){
        const inputValue = document.getElementById('hobby-input').value;
        Munkhtulga.hobby.push(inputValue);
        
    }
}