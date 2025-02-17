let toChange=document.querySelector("h1");
let num=document.querySelector("#num");
let color=document.querySelector("#color")
let elfont=document.querySelector("#elfont")
num.addEventListener("change",() => {toChange.style.fontSize=num.value+"px"})
color.addEventListener("input",()=>{toChange.style.color=color.value});
elfont.addEventListener("change",()=>{toChange.style.fontFamily=elfont.value})