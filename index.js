// Computer Choice
function computerPlay() {    
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    return computerChoice;
}

// Player choice
function playerPlay() {
    let playerChoice = prompt("What is your choice? Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();

    while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        playerChoice = prompt('Incorrect choice. Please select again');
        playerChoice = playerChoice.toLowerCase();
    }
    return playerChoice;
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Its a tie!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'Rock wins! Player scores.'
        }
        else {
            return 'Paper wins! Computer scores.';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Rock wins! Computer scores.';
        }
        else {
            return 'Scissors win! Player scores';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'Paper wins! Player scores';
        }
        else {
            return 'Scissors win! Computer scores';
        }
    }
}

// Function to play a game of 5 rounds
function game() {
    for (let i=0; i<5;i++) {
        const computerChoice = computerPlay();
        const playerChoice = playerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}

// Call to game() function to begin the game
game();