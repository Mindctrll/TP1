function settings()
{
    let level=prompt("Donner la difficulté f(facile) i(intermediare) et d(difficile) ")
    level=level.toLowerCase();
    while(level!=='i' && level!=='f' && level!=='d')
    {
        alert("difficulté non valide");
        level=prompt("Donner la difficulté f pour facile i pour intermediare et d pour difficile")
        level=level.toLowerCase();
    }

    if(level=='f')
        return [50,1,30]   //nombre maximal,nombre minimal,nombre d'essais
    else
        if(level=='i')
            return [100,1,20]   //nombre maximal,nombre minimal,nombre d'essais
    return [150,1,10]   //3eme cas level==d //nombre maximal,nombre minimal,nombre d'essais

}
function game(mx,mn,essai) 
{
    let number=Math.floor(Math.random()*(mx-mn+11))+mn;
    let won=false;
    while(!won && essai)
    {
        let guess=prompt(`Guess a number between ${mn} and ${mx}`)
        essai--;
        if(guess==number)
            won=true
        else
            if(guess>number)
                alert("Less !")
            else    
                alert("More !")
    }
    if(won)
        alert("GG , you have won")
    else
        alert(`Unlucky you have lost the number was ${number}`)
}
do
{ 
    let v=settings()
    game(v[0],v[1],v[2])     //max , min , essai
    var Continue=prompt("Do you wish to play again y/Y(yes) n/N(no) ? ")
    Continue=Continue.toLowerCase()
} while(Continue==='y') 