
function getComputerChoice() {
    let arr = ['Rock','Paper','Scissors']
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    console.log('Your choice : ' + playerSelection);
    console.log('Computer\'s choice : ' + computerSelection);
    //////// Switch 
    /**
    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection){
                case 'Scissors':
                    console.log('You Win! Rock beats Scissors');
                    break;

                case 'Paper':
                    console.log('You Lose! Paper beats Rock');
                    break;
                case 'Rock':
                    console.log('You both choosed Rock');
                    break;
            }
            break;
        case 'Paper':
                switch (computerSelection){
                    case 'Scissors':
                        console.log('You Lose! Paper beats Scissors');
                        break;
                    case 'Paper':
                        console.log('You both choosed Paper');
                        break;
                    case 'Rock':
                        console.log('You Win! Paper beats Rock');
                        break;
                }
                break;
        case 'Scissors':
                switch (computerSelection){
                    case 'Scissors':
                        console.log('You both choosed Scissors');
                        break;
                     case 'Paper':
                        console.log('You Win! Scissors beats Paper');
                        break;
                    case 'Rock':
                        console.log('You Lose! Scissors beats Rock');
                        break;
                }
            break;
        default :
        console.log('Enter a valid choice ! ( Scissors, Paper, Rock)');
    
    
    
    }
 */
    //////// If

    if( (playerSelection === 'Rock' &&  computerSelection === 'Scissors') || (playerSelection === 'Paper' &&  computerSelection === 'Rock') || (playerSelection === 'Scissors' &&  computerSelection === 'Rock')
    ) { console.log('Congratulations You Win!'); return "Player";}
    else if ( (playerSelection === 'Rock' &&  computerSelection === 'Paper') || (playerSelection === 'Paper' &&  computerSelection === 'Scissors') ||  (playerSelection === 'Scissors' &&  computerSelection === 'Rock')
    ){ console.log('You Lose!'); return "Computer";}
     else if ( playerSelection === computerSelection)
    { console.log('You are even!'); return "Even";}
    else{ console.log('Please enter a valid value : Rock, Paper or Scissors.'); return "Error";}

}


function game (){
    console.log('------------ Welcome to the Game ------------');
    var round = 1; /// Number of rounds
    var scorePlayer = 0;
    var scoreComputer = 0;
    for (round = 1; round <= 5; round++) {
        console.log(`-----* Round number ${round}*-----`);
        playerSelection = prompt('what is your choice? ');
        computerSelection =  getComputerChoice();
        var result = playRound(playerSelection, computerSelection); 
        switch  (result) {
            case 'Player' :
                scorePlayer++;
                break;
            case 'Computer' :
                scoreComputer++;
                break;
            case 'Even' :
                break;
            case 'Error' :
                round--;
                break;
        }
      }
      scorePlayer>=scoreComputer?console.log(`Congratulations You Win the Game ||  Results : Player ${scorePlayer} x ${scoreComputer} Computer`):console.log(`You Lose the Game ||  Results : Player ${scorePlayer} x ${scoreComputer} Computer`);
}