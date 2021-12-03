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

function runGame(){

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