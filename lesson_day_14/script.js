/**
 * let hello= {
    greet: function(){
        console.log('hello world')
    }
}
hello.greet()
 */
/**let x = parseInt(prompt('x'));
function square(){
    console.log(Math.sqrt(x));
}
square(); */
/**
 * let c=parseInt(prompt("c"))
function F(){
    console.log((c * 9/5) + 32)
}
F()
 */
/**
 * let inputWord=prompt('x')
let reversedWord = '';
console.log(reversedWord)
for (let i=inputWord.length - 1; i>=0 ;  i--){
    reversedWord = reversedWord + inputWord[i]
}
console.log(reversedWord === inputWord)
 */
let inputword=prompt('word')
let letter=0
function word(){for(let i=0;i<=inputword.length;i++){
    n=inputword[i]
    if(n==='a'||n==='i'||n==='e'||n==='o'||n==='u'){
        letter++
    }
    else{
        letter=letter
    }
    
}
console.log(letter)}
word()