import { shipDrag } from "./drag-and-drop";
import { initGame, p1, p2 } from "./game";

function renderBoard(p1, p2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p1");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("board1").appendChild(row);

    p1.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);

      cell.addEventListener("click", (e) => {
        if (!p1.turn.get() || !p1.board.isStartAllowed.get()) return;
        renderAttackP1(e, i, j, p1, p2);
      });
    });
  }

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p2");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("board2").appendChild(row);

    p2.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }
}

function createDragAndDropFleet(player) {
  renderShipSelection(1, 1);
  renderShipSelection(2, 2);
  renderShipSelection(3, 3);
  renderShipSelection(4, 4);

  function renderShipSelection(i, length) {
    const container = document.querySelector(".ships");
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    container.appendChild(shipContainer);

    const shipInfo = document.createElement("span");
    shipInfo.classList.add(`info-${i}`);
    shipInfo.textContent = "2x";
    shipContainer.appendChild(shipInfo);

    const ship = document.createElement("div");
    ship.classList.add("ship");
    ship.classList.add(`ship-${i}`);
    ship.setAttribute("draggable", "true");
    shipContainer.appendChild(ship);

    for (let i = 0; i < length; i++) {
      const cell = document.createElement("div");
      cell.classList.add("ship-cell");
      ship.appendChild(cell);
    }
  }
  for (let i = 1; i < 5; i++) shipDrag(player, `.ship-${i}`);
}

function renderPlayerFleet(player) {
  document.querySelectorAll(".cell-p2").forEach((e, i) => {
    let pos1, pos2;
    let pos = "" + i;

    if (i < 10) {
      pos1 = 0;
      pos2 = i;
    } else {
      pos = pos.split("");
      pos1 = pos[0];
      pos2 = pos[1];
    }

    if (!player.board.board[pos1][pos2]) return;
    if (player.board.board[pos1][pos2] == "res") e.classList.add("res");
    else e.classList.add("fleet");
  });
}

function resetBoards() {
  document.querySelector(".board-buttons").innerHTML = "";
  document.querySelector(".ships").innerHTML = "";
  document.querySelectorAll(".board").forEach((board) => {
    board.innerHTML = "";
  });

  initGame();
}

function renderButtons(player) {
  const boardButttons = document.querySelector(".board-buttons");
  const board1 = document.getElementById("board1");
  //const board2 = document.getElementById("board2");

  boardButttons.innerHTML = `<button class='main-randon'> Randon Board </button>
    <button class='main-reset'> Reset Board </button>`;

  document.querySelector(".main-reset").addEventListener("click", () => {
    if (!player.turn.get()) return;

    //reset boars and set´s blur
    resetBoards(player);
    board1.classList.add("notStarted");
  });

  document.querySelector(".main-randon").addEventListener("click", () => {
    resetBoards();
    p1.randomFleet();
    renderPlayerFleet(p1);
    p1.board.isStartAllowed.set(true);
    document.querySelector(".ships").innerHTML = "";
  });

  board1.innerHTML += `<button class="main-start">Start</button>`;

  document.querySelector(".main-start").addEventListener("click", (e) => {
    if (player.board.isStartAllowed.get() === false) return;
    //blur toggles before and after start
    board1.classList.remove("notStarted");
    player.board.hasStarted.set(true);

    board1.removeChild(e.target);
    boardButttons.removeChild(document.querySelector(".main-randon"));
  });
  //prevent start when not all ships are placed o the board
}

async function renderAttackP1(e, pos1, pos2, p1, p2) {
  document.getElementById("board1").classList.toggle("current-turn");
  let attack = p1.attack(p2, pos1, pos2);
  if (!attack) return;
  if (attack === "miss") e.target.classList.add("miss");
  if (attack === "hit") {
    e.target.classList.add("hit");
    p2.board.board[pos1][pos2].ship.domTargets.push(e.target);

    //stunk

    if (p2.board.board[pos1][pos2].ship.isSunk()) {
      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) => {
        e.classList.add("sunk");
      });
      return;
    }
  }
  p2.isTurn(p1);
  await delay(1000);
  return p2.board.allAreStunk(p2.board.board) === true
    ? renderWin(p1)
    : aiPlay(false, p1, p2);
}

function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
}

function renderWin () {
  
}

async function renderAttackP2(p1, p2, pos1, pos2) {
  let isStunk = false;
  let e = document.getElementById(`p2-row${pos1}-cell${pos2}`);
  let attack = p2.attack(p1, pos1, pos2);

  if (!attack) {
    let repeat = true;
    aiPlay(repeat, p1, p2);
  }
  if (attack === "miss") {
    setWasHit(false);
    e.classList.add("miss");
  }
  if (attack === "hit") {
    setWasHit(true, true, pos1, pos2);
    e.classList.add("hit");
    p1.board.boar[pos1][pos2].ship.domTargets.push(e);
    //if ship is stunk, add stunk class
    if (p1.board.board[pos1][pos2].ship.isStunk()) {
      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
      isStunk = true;
      if (p1.board.areAllStunk(p1.board.board) === true) return renderWin(p2);
    }
  }
  await delay(1000);
  return aiPlay(false, p1, p2, isSunk);
}

export {
  renderBoard,
  renderPlayerFleet,
  createDragAndDropFleet,
  renderButtons,
  renderAttackP1,
  renderAttackP2
};
