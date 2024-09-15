let score = {
   Won : 0,
   Lost : 0,
   Tie : 0,
   displayScore : function(){
   return ` Won : ${score.Won} , Lost : ${score.Lost} , Tie : ${score.Tie}`
   },
};

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
            score.Tie++
            return ('It is a tie');
        }else if (computerMove === 'Ball') {
            score.Won++
            return ('User Win');
        }else if (computerMove === 'Stump') {
            score.Lost++
            return ('Computer has Won');
        } 
    }else if (userMove === 'Ball') {
        if (computerMove ==='Bat') {
            score.Lost++
            return ('computer has won');
        }else if (computerMove === 'Ball') {
            score.Tie++
            return ('It is a tie');
        }else if (computerMove === 'Stump') {
            score.Won++
            return ('User Won');
        } 
    }else{
        if (computerMove ==='Bat') {
            score.Won++
            return ('User Won');
        }else if (computerMove === 'Ball') {
            score.Lost++
            return ('Computer has Won');
        }else if (computerMove === 'Stump') {
            score.Tie++
            return ('It is a tie');
        }
    }
};

function showResult(userMove,computerMove,result) {
    // console.log(score);
    alert(`User Choice ${userMove} , Computer Choice ${computerMove}

    ${result}

    ${score.displayScore()}`);
};