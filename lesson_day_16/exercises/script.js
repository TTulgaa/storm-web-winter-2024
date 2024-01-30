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
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]

