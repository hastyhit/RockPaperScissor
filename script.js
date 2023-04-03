console.log('Hello world');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let choice = prompt("rock, paper or scissor?");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock') {
            switch(computerSelection) {
                case 'rock':
                    return "tie"
                case 'paper':
                    return 'You lose! paper beats rock';
                case 'scissor':
                    return 'You win! rock beats scissor';
            }   
        }

        else if (playerSelection == 'paper') {
            switch(computerSelection) {
                case 'paper':
                    return "tie"
                case 'scissor':
                    return 'You lose! scissor beats paper';
                case 'rock':
                    return 'You win! paper beats rock';    
            }
        }

        else if (playerSelection == 'scissor') {
            switch(computerSelection) {
                case 'scissor':
                    return "tie"
                case 'rock':
                    return 'You lose! rock beats scissor';
                case 'paper':
                    return 'You win! scissor beats paper';    
            }
        }

        else {
            return 'Invalid selection. Please choose rock, paper or scissor';
        }

}

// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();    

        let result = playRound(playerSelection, computerSelection);
        console.log('Round ' + (i + 1) + ': ' + result);

        if (result.indexOf('win') != -1) {
            playerScore++;
        } else if (result.indexOf('lose') != -1) {
            computerScore++;
        }
    }

    console.log(`Final score: You ${playerScore}, Computer ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (computerScore > playerScore) {
        console.log('You lose!');
    } else {
        console.log('Tie');
    }
}


game()

