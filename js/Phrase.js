/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */





class Phrase{

    constructor(phrase){
        this.phrase = phrase.toLowerCase(); 
    }

    addPhraseToDisplay(){
       
        const ul = document.querySelector('#phrase').firstElementChild;
        

        for(let i=0; i<this.phrase.length; i++){

            let letter = document.createElement("LI"); 
            letter.innerHTML=this.phrase[i];
            letter.className=letter.textContent;
            
            letter.classList.add("hide"); 
            letter.classList.add("letter");
            if(letter.innerHTML ===" "){
                letter.className="space";
                letter.style.visibility="hidden"; 
                letter.classList.add("hide"); 
                
            }
            ul.appendChild(letter); 
            
        }

    }
    checkLetter(ph,th){
        let result = null 
        for( let i=0; i<ph.length; i++){
            if(ph[i].innerHTML===th.innerHTML){
                result = th.innerHTML;
            }
        }
        return result; 
    }

    showMatchedLetter(ph,i){
        ph[i].classList.remove("hide");
        ph[i].classList.add("show");
    }
}

