function getComputerChoice() {
    const items = ["rock", "paper", "scissor"];
    return items[Math.floor(Math.random() * 3)];
}



document.getElementById("rock").addEventListener("click", function() {
    document.getElementById("result").innerHTML = playRound("rock");
})

document.getElementById("paper").addEventListener("click", function() {
    document.getElementById("result").innerHTML = playRound("paper");
})


document.getElementById("scissor").addEventListener("click", function() {
    document.getElementById("result").innerHTML = playRound("scissor");
})




function playRound(x) {
    let playerChoice = x;
    let computerChoice = getComputerChoice();
    
    // document.getElementById("computer-choice").innerHTML = "Ai choose: " + computerChoice;

    if (playerChoice === computerChoice) {
        return `Draw! Both choosed ${playerChoice}`;
    } else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock" || 
    playerChoice === "scissor" && computerChoice === "paper") {
        scoreUpdate("player")
        return `Player won! ${playerChoice} beats ${computerChoice}`;
        

    } else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissor" ||
    playerChoice === "scissor" && computerChoice === "rock") {
        scoreUpdate("computer")
        return `AI won! ${computerChoice} beats ${playerChoice}`;
        
    }
}


var playerScore = 0;
var computerScore = 0;

function scoreUpdate(winner) {
    if (winner === "player") {
        playerScore++;
        document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
        if (playerScore === 5) {
            document.getElementById("winner").textContent = "Winner: Player won!";
            setTimeout(resetGame(), 1000);
        }
    } else if (winner === "computer") {
        computerScore++;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
        if (computerScore === 5) {
            document.getElementById("winner").textContent = "Winner: Computer won!";
            setTimeout(resetGame(), 1000);
        }
    } 
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = "Player Score: 0";
    document.getElementById("computerScore").textContent = "Computer Score: 0";
    // document.getElementById("winner").textContent = "";
}


// document.getElementById("result").innerHTML = playRound();
