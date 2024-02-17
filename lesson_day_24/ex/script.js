const a = new Promise((resolve, reject) => {
    let result = 10;
    if (result == 0){
        resolve()
    }else{
        reject()
    }
})
console.log(a)
a.then((resolve)=>{
    console.log(('resolve'))
    
}).catch((reject)=>{
    console.log('reject')
})