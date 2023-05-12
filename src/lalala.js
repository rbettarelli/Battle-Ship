let board = [];

for (let i = 0; i < 10; i++) {
  board[i] = [];

  for (let j = 0; j < 10; j++) {
    board[i].push(false);
    console.log(`board[${i}][${j}] = ${board[i][j]}`);
  }
}