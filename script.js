console.log(`Script is working.`);

const possibleInputs = ['R', 'P', 'S'];

// let gameConfirm = confirm("Are you sure?");
// console.log(`This is your input: ${gameConfirm}`);

// let myInput = gameStart();

//Game stats
let gameStats = {
  wins: 0,
  losses: 0,
  ties: 0,
  moveHistory: {
    rock: 0,
    paper: 0,
    scissors: 0
  }
}

//Checks user input and updates game stats if input is valid
function inputCheck(user) {
  if(user === possibleInputs[0]) {
    gameStats.moveHistory.rock++;
  } else if(user === possibleInputs[1]) {
    gameStats.moveHistory.paper++;
  } else if(user === possibleInputs[2]) {
    gameStats.moveHistory.scissors++;
  } else {
    alert("Invalid input. Please input R, P or S.");
  }
}

function aiTurn() {
}

//Compares user and AI input to determine result
function winCheck(user, ai) {
  let result;
  if(user === possibleInputs[0] && ai === possibleInputs[0]) {
    //Rock Tie 
  } else if (user === possibleInputs[1] && ai === possibleInputs[1]) {
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
  return result;
}

function gameContinue() {
  let game = true;
  //RPS will run until the function returns a false boolean
  if(game) {
    let userContinue = confirm("Do you want to keep playing?");
    if(!userContinue){
      game = false;
    }
  }
  return game;
}

//Game Runs
function gameStart() {
  let gameRun = gameContinue()
  let turnCounter = 1;
  while(gameRun) {
    //Take Input
    let userInput = prompt("Rock Paper Scissors");
    //Check Input

    //Store Input and turn counter if valid

    //Run AIs turn

    //Check Results

    //Store Results

    //Check if user wants to continue
    if(!gameRun) {
      break;
    } else {
      //Increase turn counter
      turnCounter++;
    }
  }
}

//After game stops stat screen will show


console.log(`This is your input: ${myInput}`);