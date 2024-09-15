let computerChoice;
function generateComputerChoice() {
    let randomNum = Math.random()*3;
    if (randomNum > 0 && randomNum <= 1) {
        return 'Bat';
    }else if (randomNum > 1 && randomNum >=2) {
        return'Ball';
    }else{
        return 'Stump';
    }
};

function getResult(userMove,computerMove) {
    if (userMove === 'Bat') {
        if (computerMove ==='Bat') {
            return ('It is a tie');
        }else if (computerMove === 'Ball') {
            return ('User Win');
        }else if (computerMove === 'Stump') {
            return ('Computer has Won');
        } 
    }else if (userMove === 'Ball') {
        if (computerMove ==='Bat') {
            return ('computer has won');
        }else if (computerMove === 'Ball') {
            return ('It is a tie');
        }else if (computerMove === 'Stump') {
            return ('User Won');
        } 
    }else{
        if (computerMove ==='Bat') {
            return ('User Won');
        }else if (computerMove === 'Ball') {
            return ('Computer has Won');
        }else if (computerMove === 'Stump') {
            return ('It is a tie');
        }
    }
};

function showResult(userMove,computerMove,result) {
    alert(`User Choice ${userMove} , Computer Choice ${computerMove} , The Result is ${result}`); 
};