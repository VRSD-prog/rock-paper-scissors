//Global Variables
let humanScore = 0
let computerScore = 0

const playerPoints = document.querySelector(".playerPoints")
const computerPoints = document.querySelector(".computerPoints")
const buttons = document.querySelector(".buttons")
const gameResult = document.querySelector(".gameResult")

playerPoints.textContent = `${humanScore}`
computerPoints.textContent = `${computerScore}`

// Computer Choice Generation
function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}

// Game Logic
function playRound(playerSelection){

    console.log(playerSelection)

    let computerChoice = getComputerChoice()
    let humanChoice = playerSelection

    if (computerChoice === 0 && humanChoice === "R" || computerChoice === 1 && humanChoice === "P" || computerChoice === 2 && humanChoice === "S"){
        return "Tie"
    } else if (computerChoice === 0 && humanChoice === "P" || computerChoice === 1 && humanChoice === "S" || computerChoice === 2 && humanChoice === "R"){
        return "Win"
    } else {
        return "Lose"
    }
}

// Main Program
function playGame(){

    const rockButton = document.createElement("button")
    const paperButton = document.createElement("button")
    const scissorsButton = document.createElement("button")
    rockButton.textContent = "Rock"
    paperButton.textContent = "Paper"
    scissorsButton.textContent = "Scissors"
    buttons.appendChild(rockButton)
    buttons.appendChild(paperButton)
    buttons.appendChild(scissorsButton)

    gameResult.textContent = "Choose Your Move!"

    playerPoints.style.fontWeight = "400"
    computerPoints.style.fontWeight = "400"

    playerPoints.textContent = "0"
    computerPoints.textContent = "0"
        
    let playerSelection
    let result

    rockButton.addEventListener("click", () => {
        playerSelection = "R"
        result = playRound(playerSelection)
        updateScores()
    })

    paperButton.addEventListener("click", () => {
        playerSelection = "P"
        result = playRound(playerSelection)
        updateScores()
    })

    scissorsButton.addEventListener("click", () => {
        playerSelection = "S"
        result = playRound(playerSelection)
        updateScores()
    })


function updateScores() {
    if (result === "Win"){
        gameResult.textContent = "Won!"
        humanScore += 1
        playerPoints.textContent = `${humanScore}`
        computerPoints.textContent = `${computerScore}`
        console.log(result)
        console.log(humanScore)
        console.log(computerScore)
    } else if (result === "Lose"){
        gameResult.textContent = "Lost!"
        computerScore += 1
        playerPoints.textContent = `${humanScore}`
        computerPoints.textContent = `${computerScore}`
        console.log(result)
        console.log(humanScore)
        console.log(computerScore)
    } else {
        gameResult.textContent = "Tie!"
        playerPoints.textContent = `${humanScore}`
        computerPoints.textContent = `${computerScore}`
        console.log(result)
        console.log(humanScore)
        console.log(computerScore)
    }

    if (humanScore === 3){
        gameResult.textContent = "Player Wins!"
        playerPoints.style.fontWeight = "900"

        rockButton.remove()
        scissorsButton.remove()
        paperButton.remove()

        const replayButton = document.createElement("button")
        buttons.appendChild(replayButton)
        replayButton.textContent = "Play Again"
        replayButton.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            replayButton.remove()
            playGame()
        })
    } else if (computerScore === 3){
        gameResult.textContent = "Computer Wins!"
        computerPoints.style.fontWeight = "900"

        rockButton.remove()
        scissorsButton.remove()
        paperButton.remove()

        const replayButton = document.createElement("button")
        buttons.appendChild(replayButton)
        replayButton.textContent = "Play Again"
        replayButton.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            replayButton.remove()
            playGame()
        })
    }
}
}

// Start
playGame()