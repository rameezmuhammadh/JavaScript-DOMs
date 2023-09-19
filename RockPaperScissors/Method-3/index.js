const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['Rock', 'Paper' , 'Scissors']

const handleClick = (e) =>{
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice=>{
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice){
        case 'ScissorsPaper':
            case 'RockScissor':
            case 'PaperRock' :
                resultDisplay.innerHTML = 'You choose ' + userChoice + ' and Computer choose ' + computerChoice + ' You win'
                break
            case 'PaperScissors':
            case 'ScissorRock':
            case 'RockPaper':
                resultDisplay.innerHTML = 'You choose ' + userChoice + ' and Computer choose ' + computerChoice + ' You Lost'
                break
            case 'RockRock':
            case 'ScissorsScissors':
            case 'PaperPaper':
                resultDisplay.innerHTML ='You choose ' + userChoice + ' and Computer choose ' + computerChoice + ' You Draw'
                break
    }
}
