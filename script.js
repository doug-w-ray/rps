// Player's choice start
let play__choice = document.querySelector('.play__choice');
let play__choose = document.querySelector('.choice');
let play__comp = document.querySelector('.play__comp');
let play__result = document.querySelector('.play__result');
let choose__result = document.querySelector('.choice-result');
let container = document.querySelector('.container');
let rock = document.querySelector(".choose__rock");
let paper = document.querySelector(".choose__paper");
let scissors = document.querySelector(".choose__scissors");
let compChoice;
let playerChoice = 1;
let score = document.querySelector('.score__total');
let btn_play = document.querySelector('.btn-play');
let end_title = document.querySelector('.end-title');
let wait = document.querySelector('.wait');
let button = document.querySelector('.btn-play');
let gamePlaying = true;
let gameOver = document.querySelector('.end-game');
        
// Play while gameplaying = true
// Initialize game
init();        
if(gamePlaying === true) {
    play();
    function play() {
        rock.addEventListener("click", function(){
            play__choice.innerHTML = '<span class="choose__rock"></span>';
            playerChoice = 1;
            computer();
            winner();
            result();
        });
        paper.addEventListener("click", function(){
            play__choice.innerHTML = '<span class="choose__paper"></span>';
            playerChoice = 2;
            computer();
            winner();
            result();
        });
        scissors.addEventListener("click", function(){
            play__choice.innerHTML = '<span class="choose__scissors"></span>';
            playerChoice = 3;
            computer();
            winner();
            result();
        });
    };

    function computer() {
        compChoice = Math.floor(Math.random() * 3) + 1;
        if(compChoice === 1){
            play__comp.innerHTML = '<span class="choose__rock"></span>';
        } else if (compChoice === 2) {
            play__comp.innerHTML = '<span class="choose__paper"></span>';
        } else {
            play__comp.innerHTML = '<span class="choose__scissors"></span>';
        };
    };

    function winner() {
        if(compChoice === playerChoice) {
            resultText = '<h1>It\'s a draw!! Try again!</h1>';
        } else if((compChoice === 1 && playerChoice === 3) || (compChoice === 2 && playerChoice === 1) || (compChoice === 3 && playerChoice === 2)) {
            resultText = '<h1>You lose! Try again!</h1>'
            play__comp.classList.add('pulse');
            score.textContent--;
                (score.textContent === "3") ? gamePlaying = false : gamePlaying = true;
        } else {
            resultText = '<h1>You\'re a winner!! Good Job!</h1>';
            play__choice.classList.add('pulse');
            score.textContent++;
            (score.textContent === "7") ? gamePlaying = false : gamePlaying = true;
        }
    };

    function result() {
        wait.style.display = 'none';
        btn_play.classList.remove('init');
        play__choose.classList.add('init');
        choose__result.classList.remove('init');
        choose__result.innerHTML = resultText;
    };
    function playAgain() {
        play__choose.classList.remove('init');
        play__choice.innerHTML = '<span class="choose__wait"></span>';
        play__comp.innerHTML = '<span class="choose__wait"></span>';
        btn_play.classList.add('init');
        wait.style.display = 'block';
        choose__result.classList.add('init');
    };
} else {
    // container.classList.add('init');
    // gameOver.classList.remove('init');
    console.log(gamePlaying);
};
function init() {
    score.textContent = 5;
    gamePlaying = true;
    container.classList.remove('init');
    gameOver.classList.add('init');
};