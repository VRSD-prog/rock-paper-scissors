// Computer Choice Generation
function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}

// Human's Input
function getHumanChoice(){
    return prompt("Enter R, P, or S (Rock, Paper, Scissors)").toUpperCase()
}

let humanScore = 0
let computerScore = 0


// Game Logic
function playRound(computerChoice, humanChoice){

    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()

    if (computerChoice === 0 && humanChoice === "R" || computerChoice === 1 && humanChoice === "P" || computerChoice === 2 && humanChoice === "S"){
        alert("Tie!")
        return "Tie"
    } else if (computerChoice === 0 && humanChoice === "P" || computerChoice === 1 && humanChoice === "S" || computerChoice === 2 && humanChoice === "R"){
        alert("You Win!")
        return "Win"
    } else {
        alert("You Lose!")
        return "Lose"
    }
}


// Main Program
function playGame(){

    while ("Nigga"){

        let result = playRound()

        if (result === "Win"){
            humanScore += 1
            console.log(humanScore)
            console.log(computerScore)
        } else if (result === "Lose"){
            computerScore += 1
            console.log(humanScore)
            console.log(computerScore)
        } else {
            console.log(humanScore)
            console.log(computerScore)
        }

        if (humanScore === 3){
            alert("Player Wins!")
            break
        } else if (computerScore === 3){
            alert("Computer Wins!")
            break
        }
    }
}

// Start Program
playGame()