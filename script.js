function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    console.log(computerChoice);
    return computerChoice;
}


function playRound(playerChoice, computerChoice) {
    var result;

    if (playerChoice === computerChoice) {
        // document.querySelector("h3").innerHTML = "Tie!"; 
        console.log("Tie!");
        result = `Tie! Both Choosed ${playerChoice}`;
    } else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock"
     || playerChoice === "scissor" && computerChoice === "paper") {
        result = `You won! ${playerChoice} beats ${computerChoice}`;
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        updateScore('player');
     } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
        updateScore('computer')
     }
     document.querySelector("#result").innerHTML = result;
}

function updateScore(winner) {
    var playerScore = parseInt(document.querySelector("#player-score").textContent);
    var computerScore = parseInt(document.querySelector("#computer-score").textContent);

    if (winner === "player") {
        playerScore++;
        document.querySelector("#player-score").textContent = playerScore;
        if (playerScore === 5) {
            document.querySelector("#winner").textContent = "Player wins";
            playerScore = 0;
            computerScore = 0;
            document.querySelector("#player-score").textContent = playerScore;
            document.querySelector("#computer-score").textContent = computerScore;
        }
    } else if (winner === "computer") {
        computerScore++;
        document.querySelector("#computer-score").textContent = computerScore;
        if (computerScore === 5) {
            document.querySelector("#winner").textContent = "Computer wins";
            setTimeout(function() {
                document.querySelector("#winner").style.display = "none";
            }, 3000);
            playerScore = 0;
            computerScore = 0;
            document.querySelector("#player-score").textContent = playerScore;
            document.querySelector("#computer-score").textContent = computerScore;
        }
    }
}


function game() {
    var choices = document.querySelectorAll(".choice");
    for (var i = 0; i < choices.length; i++ ) {
        choices[i].addEventListener("click", function() {
            var playerChoice = this.id;
            var computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
        });
    }
}


game();
