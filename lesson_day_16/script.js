let arr = [1, 2, 3, 4, 5, 6];
let arraystring = ['a', 'b', 'c', 'd', 'e', 'false asdf'];
console.log(arr[3]);
console.log(arr[1]);
console.log(arraystring[5]);
let arh1 = document.getElementsByTagName("h1");
console.log(arh1[1].innerText);
let page=document.getElementById('page')
console.log(page)
let paragraph=document.getElementById("paragraph")
console.log(paragraph)
paragraph.innerText="asdf"
/**
 * paragraph.style.fontSize= '40px' 
paragraph.style.fontFamily= 'arial'
paragraph.style.fontWeight = 'bold'
paragraph.style.background = 'aqua'
paragraph.style.width = '150px'
 */
paragraph.setAttribute('style','color:red; font-size:40px')
/**function alert1(){
    alert('asdfasdf')
} */
let butelment=document.getElementsByTagName('button')
butelment.setAttribute('style, backgroundcolor: red;')
function alert2(){
    //alert(window.location.href)
}
let myButton=document.getElementById('mybutt')
myButton.addEventListener('click', function(){
    console.log('button clicked')
})