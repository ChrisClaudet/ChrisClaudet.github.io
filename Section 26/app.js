//You could do it with objects
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
} //Then you use the object properties like p2.score or p2.button instead of making loads of consts

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        player.display.textContent = playerScore;
        
        if (player.score === winningScore){
            gameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
        }
    }
}

p1.button.addEventListener('click', updateScores(p1, p2))

p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
})





// Select the buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const rButton = document.querySelector('#reset');
// Select the scores
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const maxScore = document.querySelector('#maxScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = maxScore.value;
let gameOver = false;

console.log(maxScore);

p1Button.addEventListener('click', function(){
    if (!gameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        
        if (p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
    }
    
});

p2Button.addEventListener('click', function(){
    if (!gameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        
        if (p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
    }
    
});

rButton.addEventListener('click', reset); //instead of making a function, you can call one here - reset() without brackets

maxScore.addEventListener("change", function(e){
    winningScore = parseInt(this.value);
    //This will update winning score to the maxScore.value e.g. "3". ParseInt changes string to number
    reset();
});


function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
}
