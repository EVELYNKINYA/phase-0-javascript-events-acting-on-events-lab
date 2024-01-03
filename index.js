// Your code here

let dodger;

function moveDodgerLeft() {
  let currentPosition = dodger.style.left || '0px';
  let currentPositionInt = parseInt(currentPosition);

  
  dodger.style.left = `${currentPositionInt - 5}px`;
}

function moveDodgerRight() {
  let currentPosition = dodger.style.left || '0px';
  let currentPositionInt = parseInt(currentPosition);

  
  dodger.style.left = `${currentPositionInt + 5}px`;
}
