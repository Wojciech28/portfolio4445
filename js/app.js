/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




const start = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector('#qwerty');

start.addEventListener('click',()=>{
    let game =  new Game();
    game.startGame();
    qwerty.addEventListener('click',(e)=>{
        let thing = e.target;
        game.handleInteraction(thing);
    })
    let key = document.querySelectorAll('.key'); 
    for(let i=0; i<key.length; i++){
        key[i].removeAttribute("disabled");
        key[i].classList.remove("wrong");
        key[i].classList.remove("chosen");  
    }
    
})



