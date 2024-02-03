let dateElement = document.getElementById("date")
let btnElement = document.getElementById("btn")
let resultElement = document.getElementById("result")
btnElement.addEventListener("click", function(){
    console.log(dateElement.value)
    calculateAge()
})
let diffYear, diffMonth, diffDay
function calculateAge(){
    let birthDate = new Date(dateElement.value)
    let birthDay = birthDate.getDate()
    let birthMonth = birthDate.getMonth() + 1
    let birthYear = birthDate.getFullYear()
    let currentDate =new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()
    if(currentDay-birthDay < 0 || currentMonth-birthMonth < 0){
        diffDay = currentDay - birthDay + 30
        diffMonth = currentMonth - 1 - birthMonth + 12
        diffYear = currentYear - 1 - birthYear
    }
    else if(currentDay-birthDay < 0){
        diffDay = currentDay - birthDay + 30
        diffMonth = currentMonth - birthMonth - 1
        diffYear = currentYear - birthYear
    }
    else if(currentMonth-birthMonth < 0){
        diffDay = currentDay - birthDay
        diffMonth = currentMonth - birthMonth + 12
        diffYear = currentYear - birthYear - 1
    }
    else{
        diffYear = currentYear - birthYear
        diffMonth = currentMonth - birthMonth
        diffDay = currentDay - birthDay
    }
    resultElement.innerHTML = `Your age is ${diffYear} years ${diffMonth} months ${diffDay} days old`
} 