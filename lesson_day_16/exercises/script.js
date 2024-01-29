/**
 * let ex01ButtonElement = document.getElementById('ex01')
ex01ButtonElement.addEventListener('click',function(){
    alert('alert1')
})
 */
/**
 * let ex02ButtonElement = document.getElementById('ex02')
ex02ButtonElement.addEventListener('click',function(){
    alert(window.location.href)
})
 */
/**
 * let ex03ButtonElement = document.getElementById('ex03')
ex03ButtonElement.addEventListener('click',function(){
    document.body.style.backgroundColor='aqua'
})
 */
let div = document.createElement("p");
div.append("Some text");

document.write(div.textContent); // "Some text"
