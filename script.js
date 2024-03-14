console.log(`Script is working.`);

const possibleInputs = ['R', 'P', 'S'];

// alert("Game Over");

// let gameConfirm = confirm("Are you sure?");
// console.log(`This is your input: ${gameConfirm}`);

function gameStart() {
  let userInput = prompt("Rock Paper Scissors");
  return userInput;
}

// let myInput = gameStart();

function inputCheck() {

  return;
}

function statTracker() {
  let gameStats = {
    wins: 0,
    losses: 0,
    ties: 0,
    moveHistory: {
      rock: 0,
      paper: 0,
      scissors: 0
    }
  };

}

function aiTurn() {
}

function winCheck() {
  if(user === possibleInputs[0] && ai === possibleInputs[0]) {
    //Rock Tie 
  } else if (user === possibleInputs[1] &&* ai === possibleInputs[1] {
    //Paper Tie
  } else if(user === possibleInputs[2] && ai === possibleInputs[2]) {
    //Scissors Tie
  } else if(user === possibleInputs[0] && ai === possibleInputs[2]) {
    //User Rock Wins
  } else if(user === possibleInputs[2] && ai === possibleInputs[0]) {
    //AI Rock Wins
  } else if(user === possibleInputs[1] && ai === possibleInputs[0]) {
    //User Paper Wins
  } else if(user === possibleInputs[0] && ai === possibleInputs[1]) {
    //AI Paper Wins
  } else if(user === possibleInputs[2] && ai === possibleInputs[1]) {
    //User Scissors Win
  } else if(user === possibleInputs[1] && ai === possibleInputs[2]) {
    //AI Scissors Win
  }
)

function continue() {
  let userContinue = confirm("Do you want to keep playing?");
  if(!userContinue){

  }
}

console.log(`This is your input: ${myInput}`);