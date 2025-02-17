let couleurs=["red","green","blue","yellow","orange","purple","pink","brown","black","white"]
function getRandomColor() 
{
    let index=Math.floor(Math.random()*couleurs.length);
    return couleurs[index];
}
document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click',() =>{item.style.color=getRandomColor();});
});
