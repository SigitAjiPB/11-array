let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const jsScore = document.querySelector('.js-score');
updateScoreElement();
  /*
if(!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
*/

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
  
      playGame(playerMove);
    }, 3000);

    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }


}


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove === 'scissors'){
    if(computerMove === 'Rock') {
      result = 'You Lose';
    } else if(computerMove === 'Paper') {
      result = 'You Win';
    } else if(computerMove === 'Scissors') {
      result = 'Tie';
    }
      }else if (playerMove === 'paper') {
              if(computerMove === 'Rock') {
          result = 'You Win';
        } else if(computerMove === 'Paper') {
          result = 'Tie';
        } else if(computerMove === 'Scissors') {
          result = 'You Lose';
        }
          }else if(playerMove === 'rock') {
              if(computerMove === 'Rock') {
                  result ='Tie';
                } else if(computerMove === 'Paper') {
                  result ='You Lose';
                } else if(computerMove === 'Scissors') {
                  result ='You Win';
                }
            }

            if(result === 'You Win') {
              score.wins += 1;
            }else if (result === 'You Lose') {
              score.losses += 1;
            }else if (result === 'Tie') {
              score.ties += 1
            }

            localStorage.setItem('score', JSON.stringify(score));
            
            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-move').innerHTML = `You <img src="./assets/${playerMove}-emoji.png" class="move-icon"> <img src="./assets/${computerMove}-emoji.png" class="move-icon"> Computer`
          
            updateScoreElement();
    }

    function updateScoreElement() {
      jsScore.innerHTML = `Win: ${score.wins}, Loss: ${score.losses}, Tie: ${score.ties}.` ;
    }


function pickComputerMove() {

   const randomNumber = Math.random();

   let computerMove = '';


    if(randomNumber >= 0 && randomNumber <= 1/3) {
      computerMove ='Rock';
    } else if(randomNumber >= 1/3 && randomNumber  <= 2/3) {
      computerMove = 'Paper';
    } else if(randomNumber >= 2/3 && randomNumber <= 1) {
      computerMove = 'Scissors';
    }

    return computerMove;
}