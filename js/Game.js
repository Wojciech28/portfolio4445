/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0; 
        this.phrases = [new Phrase("Actions speak louder than words"),new Phrase('All good things must come to an end'), new Phrase('A picture is worth a thousand words'),new Phrase('Dont judge a book by its cover'),new Phrase('Knowledge is power')];
        this.activePhrase = null;
    }

    getRandomPhrase(){
        let rand = Math.floor(Math.random() *(this.phrases.length));
        let r = this.phrases[rand];
        return r;
    }
   
    startGame(){
        overlay.style.display="none"; 
        this.activePhrase= this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(thing){
        const qwerty = document.querySelector('#qwerty');
        const phrase = document.getElementsByClassName("letter");
        const key = document.querySelectorAll('.key');
        
            if(thing.className==="key"){
                if(this.activePhrase.checkLetter(phrase,thing)===null){
                    thing.classList.add("wrong");
                    thing.setAttribute("disabled", true);
                    this.removeLife(phrase,thing)
                   
                }
                for( let i=0; i<phrase.length; i++){
                    if(phrase[i].innerHTML===thing.innerHTML){
                        this.activePhrase.showMatchedLetter(phrase,i);
                        thing.classList.add("chosen");
                        thing.setAttribute("disabled", true);
                        if(this.checkForWin()){
                            this.gameOver(this.checkForWin()); 
                        }
                    }
                }
            } 
    }
    

    checkForWin(){
        const qwerty = document.querySelector('#qwerty');
       
            let hide= document.getElementsByClassName("hide").length;
            let space= document.getElementsByClassName("space").length;

            if(hide  === space) {
               return true;    
            }else{
                return false; 
            }     
    }

    removeLife(ph,th){
     
        const tries = document.querySelectorAll('.tries'); 
        
            if(this.activePhrase.checkLetter(ph,th)===null){
                this.missed++;
                    for(let i=0; i<tries.length; i++){
                        tries[5-this.missed].innerHTML=`<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"> `;
                    }
            }
            if( this.missed === 5) {
                this.gameOver(this.checkForWin());
            }
        }
    


    gameOver(win){
         
        const tries = document.querySelectorAll('.tries'); 
        let gameoverMessage = document.querySelector('#game-over-message')
        overlay.style.display=""; 
        document.querySelector('#phrase').firstElementChild.innerHTML="";

        for(let i=0; i<tries.length; i++){
            tries[i].innerHTML=`<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"> `;
        }

        
        if(win) {
            gameoverMessage.innerHTML="Great job!";
            overlay.classList.remove("start");
            overlay.classList.remove("lose");
            overlay.classList.add("win");
        }else {
            gameoverMessage.innerHTML="Sorry, better luck next time!";
            overlay.classList.remove("start");
            overlay.classList.add("lose");
       
        }
        
        this.missed = 0; 
        
    }
}



 

