import { Gameboard } from "../gameboard";

test("i dont know what todo", () => {
  let g = Gameboard();
  expect(g.board.length && g.board[0].length).toBe(10);
});

test("place horizontal ship od length 1 at pos 0", () => {
  let g = Gameboard();
  g.placeShip(0, 1, "h");
  expect(g.board[0]).toBeTruthy();
});
test("reject horizontal boat that goes over the right edge", () => {
  let g = Gameboard();
  expect(g.placeShip(1, 6, 5, "h")).toBe(false);
});
test("extend vertical ship down", () => {
  let g = Gameboard();
  g.placeShip(0, 0, 2, "v");
  expect(g.board[0][0] && g.board[1][0]).toBeTruthy();
});
test("2x hit ship return pos with 'hit'", () => {
    let g = Gameboard();
    g.placeShip(0, 0, 5, "v");
    g.receiveAttack(0, 0);
    g.receiveAttack(1, 0);
    expect(
      g.board[0][0].ship.tiles[g.board[0][0].shipPos] &&
        g.board[1][0].ship.tiles[g.board[1][0].shipPos]
    ).toBe("hit");
  });
  test("sunk ship returns sunk", () => {
    let g = Gameboard();
    g.placeShip(0, 0, 2, "v");
    g.receiveAttack(0, 0);
    g.receiveAttack(1, 0);
  
    expect(g.isSunk(0, 0)).toBeTruthy();
  });
  test("are all ships on the board sunk?", () => {
    let g = Gameboard();
    g.placeShip(0, 0, 2, "v");
    g.placeShip(0, 4, 2, "h");
    g.receiveAttack(0, 0);
    g.receiveAttack(1, 0);
    g.receiveAttack(0, 4);
    g.receiveAttack(0, 5);
  
    expect(g.allAreStunk(g.board)).toBeTruthy();
  });