console.log(`Script is working.`);

const possibleInputs = ['R', 'P', 'S'];

console.log(`These are the possible inputs : ${possibleInputs}.`);

// let gameConfirm = confirm("Are you sure?");
// console.log(`This is your input: ${gameConfirm}`);

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

console.log(`These are the game stats: ${gameStats.wins}`);

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
  let randElement = Math.floor(Math.random() * possibleInputs.length);
  let aiChoice = possibleInputs[randElement];
  return aiChoice;
}

//Compares user and AI input to determine result
//AI wins can be 1 line of code when code works
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

//Storing results in game stats
//AI wins can be 1 line of code when code works
function resultStore(gameResult) {
  if(gameResult === 1) {
    //User wins with rock

  } else if(gameResult === 2) {
    //User wins with paper

  } else if(gameResult === 3) {
    //User wins with scissors

  } else if(gameResult === 4) {
    //AI wins with rock

  } else if(gameResult === 5) {
    //AI wins with paper

  } else if(gameResult === 6) {
    //AI wins with scissors
  }
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
  let gameRun = true;
  let turnCounter = 1;
  while(gameRun) {
    //Take Input
    prompt("Rock Paper Scissors");
    //Check Input

    //Store Input and turn counter if valid

    //Run AIs turn
    let aiInput = aiTurn();
    //Check Results
    winCheck(userInput, aiInput);
    //Store Results

    //Check if user wants to continue
    gameRun = gameContinue();
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