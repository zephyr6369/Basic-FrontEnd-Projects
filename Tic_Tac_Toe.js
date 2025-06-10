let boxes = document.getElementsByClassName('box');
let resetBtn = document.getElementById('reset');
let newGameBtn = document.getElementById('new-btn');
let msgContainer = document.getElementsByClassName('msg-container')[0];
let msg = document.getElementById('msg');

let turnO = true; // true means it's O's turn
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

function checkWinner() {
  let hasWin = false;

  for (let i = 0; i < winPatterns.length; i++) {
    let pattern = winPatterns[i];
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      hasWin = true;
      return;
    }
  }

  if (!hasWin) {
    let allFilled = true;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].textContent === "") {
        allFilled = false;
      }
    }

    if (allFilled) {
      msgContainer.classList.remove('hide');
      msg.textContent = "Match Drawn";
    }
  }
}

function showWinner(winner) {
  msg.textContent = "Congratulations, Winner is " + winner;
  msgContainer.classList.remove('hide');
  disableBoxes();
}

function boxClick(index) {
  let box = boxes[index];

  if (box.textContent === "") {
    if (turnO) {
      box.textContent = "O";
      box.style.color = "green";
    } else {
      box.textContent = "X";
      box.style.color = "black";
    }
    turnO = !turnO;
    checkWinner();
  }
}

function handleBoxClick(index) {
  boxClick(index);
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleBoxClick.bind(null, i));
}

function enableBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    boxes[i].disabled = false;
  }
}

function disableBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].disabled = true;
  }
}

function resetGame() {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add('hide');
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
