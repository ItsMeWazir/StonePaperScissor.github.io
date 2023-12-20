let result = '';
let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        win: 0,
        losses: 0,
        tie: 0
    };
}

updateScoreElement();


function playGame(playerMove) {
    if (playerMove === 'Rock') {
        // let result = '';
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose :(';
        } else if (computerMove === 'Scissors') {
            result = 'You Win :)';
        }

    } else if (playerMove === 'Paper') {
        // let result = '';

        if (computerMove === 'Rock') {
            result = 'You Win :)';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose :(';
        }
        // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
    } else if (playerMove === 'Scissors') {
        // let result = '';

        if (computerMove === 'Rock') {
            result = 'You Lose :(';
        } else if (computerMove === 'Paper') {
            result = 'You Win :)';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
        // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
    } else {
        alert('Invalid input');
    }


    if (result === 'You Win :)') {
        score.win += 1;
    } else if (result === 'You Lose :(') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.tie += 1;
    }



    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = addEvent();

    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

    //         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    // Wins ${score.win}, Losses ${score.losses}, Tie ${score.tie}`);

}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins ${score.win}, Losses ${score.losses}, Tie ${score.tie}`;
}


let computerMove = '';
function pickComputerMove() {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < (1 / 3)) {
        computerMove = 'Rock';
    } else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
        computerMove = 'Paper';
    } else if (randomNumber >= (2 / 3) && randomNumber < 1) {
        computerMove = 'Scissors';
    }
}

function addEvent()
{
    if (result === 'You Win :)') {
        return `${result} <br> <img src="images/cup.gif" alt="paper image" class="gif">`;
    }
    else if (result === 'You Lose :(') {
        return `${result} <br> <img src="images/lose.gif" alt="rock image" class="gif">`;
    }
    else if (result === 'Tie') {
        return `${result} <br> <img src="images/sorry.gif" alt="scisor image" class="gif">`;
    }
}


