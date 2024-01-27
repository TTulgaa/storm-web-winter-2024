
function nemeh(a,b){
    document.write(`${a} + ${b} = ${a+b}`)
}
function hasah(a,b){
    document.write(`${a} - ${b} = ${a-b}`)
}
function vrjih(a,b){
    document.write(`${a} * ${b} = ${a*b}`)
}
function huwaah(a,b){
    document.write(`${a} / ${b} = ${a/b}`)
}
function sqrt(a){
    document.write(Math.sqrt(a))
}
function vld(a,b){
    document.write(`${a} % ${b} = ${a%b}`)
}
function zer(a,b){
    document.write(Math.pow(a,b))
}
let a=parseInt(prompt('эхний утгаа оруулна уу'))
let b=parseInt(prompt('2р утгаа оруулна уу'))
let op=prompt('үйлдлийн тэмдэг оруулна уу')

let n=0

if(op==='+'){
    nemeh(a,b)
}
else if(op==='-'){
    hasah(a,b)
}
else if(op==='/'){
    huwaah(a,b)
}
else if(op==='*'){
    vrjih(a,b)
}
else if(op==='&'){
    sqrt(a)
}
else if(op==='%'){
    vld(a,b)
}
else if(op==='^'){
    zer(a,b)
}
else(
    document.write("?")
)