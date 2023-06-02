/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDragAndDropFleet\": () => (/* binding */ createDragAndDropFleet),\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard),\n/* harmony export */   \"renderButtons\": () => (/* binding */ renderButtons),\n/* harmony export */   \"renderPlayerFleet\": () => (/* binding */ renderPlayerFleet)\n/* harmony export */ });\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-and-drop */ \"./src/drag-and-drop.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\n\r\nfunction renderBoard(p1, p2) {\r\n  for (let i = 0; i < 10; i++) {\r\n    let row = document.createElement(\"div\");\r\n    row.classList.add(\"row-p1\");\r\n    row.setAttribute(\"id\", `p1-row${i}`);\r\n    document.getElementById(\"board1\").appendChild(row);\r\n\r\n    p1.board.board[i].forEach((e, j) => {\r\n      let cell = document.createElement(\"div\");\r\n      cell.classList.add(\"cell-p1\");\r\n      cell.setAttribute(\"id\", `p1-row${i}-cell${j}`);\r\n      row.appendChild(cell);\r\n    });\r\n  }\r\n\r\n  for (let i = 0; i < 10; i++) {\r\n    let row = document.createElement(\"div\");\r\n    row.classList.add(\"row-p2\");\r\n    row.setAttribute(\"id\", `p2-row${i}`);\r\n    document.getElementById(\"board2\").appendChild(row);\r\n\r\n    p2.board.board[i].forEach((e, j) => {\r\n      let cell = document.createElement(\"div\");\r\n      cell.classList.add(\"cell-p2\");\r\n      cell.setAttribute(\"id\", `p2-row${i}-cell${j}`);\r\n      row.appendChild(cell);\r\n    });\r\n  }\r\n}\r\n\r\nfunction createDragAndDropFleet(player) {\r\n  renderShipSelection(1, 1);\r\n  renderShipSelection(2, 2);\r\n  renderShipSelection(3, 3);\r\n  renderShipSelection(4, 4);\r\n\r\n  function renderShipSelection(i, length) {\r\n    const container = document.querySelector(\".ships\");\r\n    const shipContainer = document.createElement(\"div\");\r\n    shipContainer.classList.add(\"ship-container\");\r\n    container.appendChild(shipContainer);\r\n\r\n    const shipInfo = document.createElement(\"span\");\r\n    shipInfo.classList.add(`info-${i}`);\r\n    shipInfo.textContent = \"2x\";\r\n    shipContainer.appendChild(shipInfo);\r\n\r\n    const ship = document.createElement(\"div\");\r\n    ship.classList.add(\"ship\");\r\n    ship.classList.add(`ship-${i}`);\r\n    ship.setAttribute(\"draggable\", \"true\");\r\n    shipContainer.appendChild(ship);\r\n\r\n    for (let i = 0; i < length; i++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.classList.add(\"ship-cell\");\r\n      ship.appendChild(cell);\r\n    }\r\n  }\r\n  for (let i = 1; i < 5; i++) (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_0__.shipDrag)(player, `.ship-${i}`);\r\n}\r\n\r\nfunction renderPlayerFleet(player) {\r\n  document.querySelectorAll(\".cell-p2\").forEach((e, i) => {\r\n    let pos1, pos2;\r\n    let pos = \"\" + i;\r\n\r\n    if (i < 10) {\r\n      pos1 = 0;\r\n      pos2 = i;\r\n    } else {\r\n      pos = pos.split(\"\");\r\n      pos1 = pos[0];\r\n      pos2 = pos[1];\r\n    }\r\n\r\n    if (!player.board.board[pos1][pos2]) return;\r\n    if (player.board.board[pos1][pos2] == \"res\") e.classList.add(\"res\");\r\n    else e.classList.add(\"fleet\");\r\n  });\r\n}\r\n\r\nfunction resetBoards() {\r\n  document.querySelector(\".board-buttons\").innerHTML = \"\";\r\n  document.querySelector(\".ships\").innerHTML = \"\";\r\n  document.querySelectorAll(\".board\").forEach((board) => {\r\n    board.innerHTML = \"\";\r\n  });\r\n\r\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.initGame)();\r\n}\r\n\r\nfunction renderButtons(player) {\r\n  const boardButttons = document.querySelector(\".board-buttons\");\r\n  const board1 = document.getElementById(\"board1\");\r\n  //const board2 = document.getElementById(\"board2\");\r\n\r\n  boardButttons.innerHTML = `<button class='main-randon'> Randon Board </button>\r\n    <button class='main-reset'> Reset Board </button>`;\r\n\r\n  document.querySelector(\".main-reset\").addEventListener(\"click\", () => {\r\n    if (!player.turn.get()) return;\r\n\r\n    //reset boars and set´s blur\r\n    resetBoards(player);\r\n    board1.classList.add(\"notStarted\");\r\n  });\r\n\r\n  document.querySelector(\".main-randon\").addEventListener(\"click\", () => {\r\n    resetBoards();\r\n    p1.randonFleet();\r\n    renderPlayerFleet(p1);\r\n    p1.board.isStartAllowed.set(true);\r\n    document.querySelector(\".ships\").innerHTML = \"\";\r\n  });\r\n\r\n  board1.innerHTML += `<button class=\"main-start\">Start</button>`;\r\n\r\n  document.querySelector(\".main-start\").addEventListener(\"click\", (e) => {\r\n    if (player.board.isStartAllowed.get() === false) return;\r\n    //blur toggles before and after start\r\n    board1.classList.remove(\"notStarted\");\r\n    player.board.hasStarted.set(true);\r\n\r\n    board1.removeChild(e.target);\r\n    boardButttons.removeChild(document.querySelector(\".main-randon\"));\r\n  });\r\n  //prevent start when not all ships are placed o the board\r\n}\r\n\r\nasync function renderAttackP1(e, pos1, pos2, p1, p2) {\r\n  document.getElementById(\"board1\").classList.toggle(\"current-turn\");\r\n  let attack = p1.attack(p2, pos1, pos2);\r\n  if (!attack) return;\r\n  if (attack === \"miss\") e.target.classList.add(\"miss\");\r\n  if (attack === \"hit\") {\r\n    e.target.classList.add(\"hit\");\r\n    p2.board.board[pos1][pos2].ship.domTargets.push(e.target);\r\n\r\n    //stunk\r\n\r\n    if (p2.board.board[pos1][pos2].ship.isSunk()) {\r\n      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) => {\r\n        e.classList.add(\"sunk\");\r\n      });\r\n      return;\r\n    }\r\n  }\r\n  p2.isTurn(p1);\r\n  await delay(1000);\r\n  return p2.board.allAreStunk(p2.board.board) === true ? renderWin(p1) : aiPlay(false, p1, p2)}\r\n\r\nfunction delay(delayInMs) {\r\n  return new Promisse((resolve) => {\r\n    setTimeout(() => {\r\n      resolve(2);\r\n    }, delayInMs);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battle-ship/./src/dom.js?");

/***/ }),

/***/ "./src/drag-and-drop.js":
/*!******************************!*\
  !*** ./src/drag-and-drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipDrag\": () => (/* binding */ shipDrag),\n/* harmony export */   \"totalAmountShips\": () => (/* binding */ totalAmountShips)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\nlet totalAmountShips = 0;\r\n\r\nfunction shipDrag(player, shipName) {\r\n  let amountLeft = 2;\r\n  const ship = document.querySelector(shipName);\r\n  const body = document.querySelector(\"body\");\r\n  const cells = document.querySelectorAll(\".cell-p2\");\r\n  const child = ship.childNodes;\r\n  let dragSelection;\r\n  let offset;\r\n  let dir = \"h\";\r\n\r\n  if (child[0]) child[0].addEventListener(\"mouseenter\", () => (offset = 0));\r\n  if (child[1]) child[1].addEventListener(\"mouseenter\", () => (offset = -1));\r\n  if (child[2]) child[2].addEventListener(\"mouseenter\", () => (offset = -2));\r\n  if (child[3]) child[3].addEventListener(\"mouseenter\", () => (offset = -3));\r\n\r\n  //change chip direction on click\r\n\r\n  ship.addEventListener(\"click\", (e) => changeDir(e));\r\n\r\n  //show position reserved\r\n\r\n  ship.addEventListener(\"dragstart\", (e) => {\r\n    for (let i = 0; i < 10; i++)\r\n      player.board.board[i].forEach((e, j) => {\r\n        if (e === \"res\")\r\n          document\r\n            .getElementById(`p2-row${i}-cell${j}`)\r\n            .classList.toggle(\"not-available\");\r\n      });\r\n  });\r\n\r\n  //remove reserved cell display\r\n\r\n  ship.addEventListener(\"dragend\", (e, i) => {\r\n    document\r\n      .querySelectorAll(\".not-available\")\r\n      .forEach((e) => e.classList.remove(\"not-available\"));\r\n\r\n    if (dragSelection === -1) return;\r\n    let pos1;\r\n    let pos2;\r\n    let pos = \"\" + dragSelection;\r\n\r\n    if (dragSelection < 10) {\r\n      pos1 = 0;\r\n      pos2 = dragSelection;\r\n    } else {\r\n      pos = pos.split(\"\");\r\n      pos1 = pos[0] * 1;\r\n      pos2 = pos[1] * 1;\r\n    }\r\n\r\n    //place ship with proper offset\r\n\r\n    if (dir === \"h\") pos2 += offset;\r\n    if (dir === \"v\") pos1 += offset;\r\n    if (pos2 < 0) return;\r\n    if (shipName === \".ship-1\")\r\n      if (player.board.placeShip(pos1, pos2, 1, dir) === false) return;\r\n    if (shipName === \".ship-2\")\r\n      if (player.board.placeShip(pos1, pos2, 2, dir) === false) return;\r\n    if (shipName === \".ship-3\")\r\n      if (player.board.placeShip(pos1, pos2, 3, dir) === false) return;\r\n    if (shipName === \".ship-4\")\r\n      if (player.board.placeShip(pos1, pos2, 4, dir) === false) return;\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderPlayerFleet)(player);\r\n\r\n    amountLeft -= 1;\r\n    totalAmountShips++;\r\n    if (totalAmountShips === 8) player.board.isStartAllowed.set(true);\r\n    ship.parentNode.firstChild.textContent = amountLeft + \"x\";\r\n    if (amountLeft === 0) ship.parentNode.style.display = \"none\";\r\n    \r\n  });\r\n\r\n  //event listeners for drag on cells\r\n\r\n  cells.forEach((e, i) => {\r\n    e.addEventListener(\"dragover\", (e) => {\r\n      e.preventDefault();\r\n      dragSelection = i;\r\n    });\r\n  });\r\n  //remove index if drop outside of cells\r\n  body.addEventListener(\"dragenter\", (e) => {\r\n    dragSelection = -1;\r\n  });\r\n\r\n  function changeDir(e) {\r\n    if (dir === \"h\") {\r\n      dir = \"v\";\r\n      e.target.parentNode.classList.toggle(\"rotated\");\r\n    } else {\r\n      dir = \"h\";\r\n      e.target.parentNode.classList.toggle(\"rotated\");\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battle-ship/./src/drag-and-drop.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initGame\": () => (/* binding */ initGame),\n/* harmony export */   \"p1\": () => (/* binding */ p1),\n/* harmony export */   \"p2\": () => (/* binding */ p2)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\nlet p1, p2\r\n\r\nfunction initGame() {\r\n    p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(\"you\")\r\n    p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Enemy\")\r\n\r\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(p1, p2)\r\n   ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderButtons)(p1)\r\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createDragAndDropFleet)(p1)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battle-ship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\nconst Gameboard = () => {\r\n  let isStartAllowed = false;\r\n  let hasStarted = false;\r\n  let board = [];\r\n\r\n  const init = (() => {\r\n    for (let i = 0; i < 10; i++) {\r\n      board[i] = [];\r\n\r\n      for (let j = 0; j < 10; j++) {\r\n        board[i].push(false);\r\n      }\r\n    }\r\n  })();\r\n\r\n  const placeShip = (pos1, pos2, length, dir) => {\r\n    if (board[pos1][pos2]) return false;\r\n    let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);\r\n    let shipPos = 0;\r\n    if (dir === \"h\") {\r\n      if (pos2 + ship.length > 10) return false;\r\n\r\n      //check if pos is reserved\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (board[pos1][pos2 + i] === \"res\") return false;\r\n      }\r\n\r\n      \r\n\r\n      for (let i = pos2; i < pos2 + ship.length; i++) {\r\n        board[pos1].splice(i, 1, { ship, shipPos });\r\n        reserveAround(pos1, pos2 + shipPos)\r\n        shipPos++;\r\n      }\r\n    }\r\n\r\n    if (dir === \"v\") {\r\n      if (pos1 + ship.length > 10) return false;\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (board[pos1 + i][pos2] === \"res\") return false;\r\n      }\r\n      for (let i = pos1; i < pos1 + ship.length; i++) {\r\n        board[i].splice(pos2, 1, { ship, shipPos });\r\n        reserveAround(pos1+ shipPos, pos2);\r\n        shipPos++;\r\n      }\r\n    }\r\n  };\r\n\r\n  const reserveAround = (pos1, pos2) => {\r\n    function cell(n1, n2) {\r\n      if (pos1 + n1 > 9 || pos1 + n1 < 0) return;\r\n      if (board[pos1 + n1][pos2 + n2] === false)\r\n        board[pos1 + n1][pos2 + n2] = \"res\";\r\n    }\r\n    function reserveCell(row) {\r\n      cell(row, -1);\r\n      cell(row, 0);\r\n      cell(row, 1);\r\n    }\r\n\r\n    reserveCell(-1);\r\n    reserveCell(0);\r\n    reserveCell(1);\r\n  };\r\n\r\n  let receiveAttack = (pos1, pos2) => {\r\n    if (board[pos1][pos2] === \"miss\") return false;\r\n    if (\r\n      typeof board[pos1][pos2] == \"object\" &&\r\n      board[pos1][pos2].ship.tiles[board[pos1][pos2].shipPos] === \"hit\"\r\n    )\r\n      return false;\r\n\r\n    if (!board[pos1][pos2] || board[pos1][pos2] === \"res\") {\r\n      board[pos1][pos2] = \"miss\";\r\n      return board[pos1][pos2];\r\n    } else {\r\n      board[pos1][pos2].ship.hit(board[pos1][pos2].shipPos);\r\n      return board[pos1][pos2].ship.tiles[board[pos1][pos2].shipPos];\r\n    }\r\n  };\r\n\r\n  const isSunk = (pos1, pos2) => {\r\n    return board[pos1][pos2].ship.isSunk() === true ? true : false;\r\n  };\r\n\r\n  const allAreStunk = (board) => {\r\n    let notStunk = false;\r\n    for (let i = 0; i < 10; i++) {\r\n      board[i].forEach((e) => {\r\n        if (!e || e === \"miss\" || e === \"res\") return;\r\n        if (e.ship.isSunk() === false) notStunk = true;\r\n      });\r\n      return notStunk === true ? false : true;\r\n    }\r\n  };\r\n\r\n  return {\r\n    board,\r\n    placeShip,\r\n    receiveAttack,\r\n    isSunk,\r\n    allAreStunk,\r\n    isStartAllowed: {\r\n      get: function () {\r\n        return isStartAllowed;\r\n      },\r\n      set: function (value) {\r\n        isStartAllowed = value;\r\n      },\r\n    },\r\n    hasStarted: {\r\n      get: function () {\r\n        return hasStarted;\r\n      },\r\n      set: function (value) {\r\n        hasStarted = value;\r\n      },\r\n    },\r\n  };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battle-ship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\n\r\n\r\n(0,_game__WEBPACK_IMPORTED_MODULE_0__.initGame)()\n\n//# sourceURL=webpack://battle-ship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nfunction generateRandom() {\r\n  let random = Math.floor(Math.random() * 10);\r\n  return random;\r\n}\r\n\r\nconst Player = (n) => {\r\n  const name = n;\r\n  let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\r\n  let turn = false;\r\n\r\n  //change turns between player and enemy\r\n\r\n  let isTurn = (enemy) => {\r\n    turn = true;\r\n    enemy.turn.set(false);\r\n  };\r\n\r\n  let attack = (player, pos1, pos2) => {\r\n    return player.board.receiveAttack(pos1, pos2);\r\n  };\r\n\r\n  let randomPos = () => {\r\n    let pos1 = generateRandom();\r\n    let pos2 = generateRandom();\r\n    return [pos1, pos2];\r\n  };\r\n\r\n  // ship with random pos and orietation\r\n\r\n  const randomShip = (lenght) => {\r\n    let pos1 = generateRandom();\r\n    let pos2 = generateRandom();\r\n    let dir = Math.round(Math.random());\r\n\r\n    dir === 0\r\n      ? ((dir = \"h\"),\r\n        board.placeShip(pos1, pos2, length, dir) == false ? false : true)\r\n      : dir === 1\r\n      ? ((dir = \"v\"),\r\n        board.placeShip(pos1, pos2, length, dir) == false ? false : true)\r\n      : false;\r\n  };\r\n\r\n  //create a 8 random ships on board\r\n\r\n  const randomFleet = () => {\r\n    //Create 2 ship of length 1\r\n    for (let i = 0; i < 2; ) {\r\n      if (randomShip(1) == false) continue;\r\n      i++;\r\n    }\r\n    //create 2 ships of length 2\r\n    for (let i = 0; i < 2; ) {\r\n      if (randomShip(2) == false) continue;\r\n      i++;\r\n    }\r\n    //create 2 ships of lenght 3\r\n    for (let i = 0; i < 2; ) {\r\n      if (randomShip(3) == false) continue;\r\n      i++;\r\n    }\r\n\r\n    // create 2 ships of length 4\r\n    for (let i = 0; i < 2; ) {\r\n      if (randomShip(4) == false) continue;\r\n      i++;\r\n    }\r\n    board.isStartAllowed.set(true);\r\n  };\r\n\r\n  return {\r\n    name,\r\n    board,\r\n    attack,\r\n    randomFleet,\r\n    randomShip,\r\n    randomPos,\r\n    turn: {\r\n      get: function () {\r\n        return true;\r\n      },\r\n      set: function (value) {\r\n        turn = value;\r\n      },\r\n    },\r\n    isTurn,\r\n  };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battle-ship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nlet Ship = (l) => {\r\n\r\n  let length = l;\r\n\r\n let tiles = [...Array(l).keys()];\r\n \r\n  let domTargets = [];\r\n  \r\nlet hit = (pos) => {\r\n    if(tiles[pos] == \"hit\" ) return false\r\n    tiles.splice(pos, 1, \"hit\")\r\n}\r\n\r\nlet isSunk = () => {\r\n    let alive = false\r\n    tiles.forEach((e) => {\r\n        if(e !== 'hit') alive = true\r\n    })\r\n\r\n    return alive === true ? false : true\r\n\r\n}\r\n\r\nreturn {length, tiles, hit, isSunk, domTargets}\r\n\r\n};\r\n\r\n \r\n\n\n//# sourceURL=webpack://battle-ship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;