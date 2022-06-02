let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//generate new secret target number for each round
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

//get absolute distance between 2 numbers
const getAbsoluteDistance = (num1,num2) =>{
  return Math.abs(num1-num2);
}

//determine which guess is closest to the target number
const compareGuesses = (humanGuess,computerGuess,secretTarget)=>{

  let humanAbs = getAbsoluteDistance(humanGuess,secretTarget);
  let computerAbs = getAbsoluteDistance(computerGuess,secretTarget);

  if(humanGuess>=0 && humanGuess<=9){
    if(humanAbs <= computerAbs){
    return true;
    }else{
    return false;
    }
  }else{
    window.alert('Number is out of range');
  }
}

//correctly increase the winner's score after each round
const updateScore = winner => {
  switch (winner){
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

//update round number after each round
const advanceRound = () => currentRoundNumber++;

