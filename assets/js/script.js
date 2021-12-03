//wait for DOM to finish loading before starting game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(){

    //Creates  two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementwWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractionnQuestion(){

}

function displayMultiplynQuestion(){

}

function displayAdditionQuestion(){

}