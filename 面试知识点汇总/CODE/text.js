/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let step = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let ans = false;
  let mX = board.length;
  if (mX === 0) {
    return ans;
  }
  let mY = board[0].length;
  if (mY === 0) {
    return ans;
  }
  let isVisit = new Array(mX);
  for (let i = 0; i < mX; ++i) {
    isVisit[i] = new Array(mY);
    for (let j = 0; j < mY; ++j) {
      isVisit[i][j] = false;
    }
  }
  let dfs = function (x, y, index) {
    if (index === word.length) {
      ans = true;
    }
    if (ans) {
      return;
    }
    for (let e = 0; e < 4; ++e) {
      let nx = x + step[e][0];
      let ny = y + step[e][1];
      if (nx >= mX || nx < 0 || ny >= mY || ny < 0) {
        continue;
      }
      if (isVisit[nx][ny]) {
        continue;
      }
      if (board[nx][ny] === word[index]) {
        isVisit[nx][ny] = true;
        dfs(nx, ny, index + 1);
        isVisit[nx][ny] = false;
      }

      if (ans) {
        return;
      }
    }
  };
  dfs(0, 0, 0);
  return ans;
};

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

exist(board,word)
