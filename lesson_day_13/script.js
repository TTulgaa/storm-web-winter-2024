//ex01
/**
 * let x= parseInt(prompt('n'));
if (x<6){
    console.log(`ajil`);
}
else if(x<8){
    console.log(`amralt`)
}
else{
    console.log(`baihgvi`)
}
 */
//ex05
/**
 * let userName = 'ICode Robot';
if (userName == 'ICode Robot') {
    console.log(`нэвтрэх`);
} 
else {
    console.log(`Тавтай морил, ${userName}`);
}
 */
/**let x=prompt('насаа оруул')
console.log(`би ${x} настай`)
let y=prompt('нэрээ оруул')
document.write(`намайг ${y} гэдэг`) */
//ex06
//ex06
/**
 * let x=1;
while (x<=10){
    console.log(x);
    x++;
}

 */
//ex7
/**
 * for (let x=10; x>0; x--)
{
    console.log(x)
}
 */
/**
 * for(let x=2 ; x<=20; x+=2){
    console.log(x);
}
 */
/**let n=parseInt(prompt("n"));
let z=1;
for(let x=1; x<=n; x++){
    z=z*x
}
console.log(`N!=${z}`) */
/**let x=parseInt(prompt('x')), y=parseInt(prompt('y'));
let z=0;
if(x>y){
    for(y;y<=x;y++){
        z+=y
    }
    console.log(z)
}
else if(x==y){
    console.log(x)
    }
    else{
        for(x;x<=y;x++){
            z+=x
        }
        console.log(z)
    } */
/**
 * let n = parseInt(prompt('dvn'))

    if(n < 101 && n >= 90){
        console.log('a')}
    else if (n < 90 && n >= 80){
        console.log('b'); }
    
    else if (n < 80 && n >= 70){
        console.log('c');
    }
    else if(n < 70 && n >= 60){
        console.log('d');}
        
    else if(n < 60 && n >= 0){
        console.log('f')
}
else{
    console.log("0-100 hoorond too oruulnuu")
}
 */
/**
 * let x=parseInt(prompt('n'))
if(x==2){
    console.log("mun")
}
else{
    for(let y=2; y<x ; y++){
        if(x%y==0)
        {
            console.log("natural too bish")
            break
        }
        else{
            console.log("mun")
        }
    }
}
 */
let n=parseInt(prompt('n'));
let y=1;
let z=0;
for(let x=1;x<=n;x++){
    
    if(x%2==1){
        y=y+z
        console.log(y)
    }
   else{
    z=z+y
    console.log(z)
}
    
}