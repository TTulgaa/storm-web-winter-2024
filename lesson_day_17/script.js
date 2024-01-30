console.log("recapture")
let japanesFood= document.getElementsByClassName('japanesfood')
let udon=japanesFood[0]
udon.setAttribute('style','color: red; background: yellow')
let ramen=japanesFood[1]
ramen.setAttribute('style','color: blue; font-size:35px')
let japaneseContainer=document.getElementById('japanese')
console.log(japaneseContainer)
japaneseContainer.style.border = '1px solid red'
let H1Elements=document.getElementsByTagName('h1')
let title=H1Elements[0]
title.setAttribute('style', 'color:red')