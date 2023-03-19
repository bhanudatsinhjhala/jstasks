/* Reset or Start New Game Code */

/* Reset game */
function resetBoard() {
  modifyCellsAttribute(false, "");
  emptyBoard();
  displayPlayersTurn(0);
  playerTurnValue = "x";
  emptyPositionOccupied();
}

/* disable and empty value of cells */

function modifyCellsAttribute(disabled, value = null) {
  cells = [...cells];
  cells.forEach((cell) => {
    if (value !== null) cell.value = "";
    if (!disabled) return cell.removeAttribute("disabled");
    cell.setAttribute("disabled", true);
  });
}

/* new game code */

function newGame() {
  playersForm.style.display = "block";
  boardForm.style.display = "none";
  emptyBoard();
  modifyCellsAttribute(false, "");
  player1.value = "";
  emptyPositionOccupied();
}

/* empty position occupied property of players */
function emptyPositionOccupied() {
  players[0].positionsOccupied = [];
  players[1].positionsOccupied = [];
}
