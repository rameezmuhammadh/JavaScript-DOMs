const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')

gameGrid.append(userChoiceDisplay,computerChoiceDisplay,resultDisplay)

const choices = [ 'Rock', 'Paper', 'Scissors']
let userChoice
let computerChoice

const handleClick = (e) =>{
    userChoice =e.target.id
    userChoiceDisplay.innerHTML ='User Choice: ' + userChoice
    generateComputer()
    getResults()
}
const generateComputer = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer Choice : ' + randomChoice
}
for (let i = 0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id=choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResults = ()=>{
    switch(userChoice + computerChoice){
        case 'ScissorsPaper':
        case 'RockScissor':
        case 'PaperRock' :
            resultDisplay.innerHTML = "You Win"
            break
        case 'PaperScissors':
        case 'ScissorRock':
        case 'RockPaper':
            resultDisplay.innerHTML = "You Lost"
            break
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            resultDisplay.innerHTML = "Draw"
            break
    }
}