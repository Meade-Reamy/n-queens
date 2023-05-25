/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// recursive function to check all possible moves from current game state
// var recurse = function(currentQueens) {
//   possibleMoves = [];

//   var maxQueensSoFar = [[[0,1], [0,0], [0,0]], [], [], []];

//   if (length recurse(possibleMoves) === maxQueens) {
//     maxQueens.push(possibleMoves);
//   } else if () {

//   }

//   return [[[0,0], [1, 2], [2, 4], [3, 6]], []];
// }

window.findNRooksSolution = function(n) {
  var solutions = [];

  var board = new Board({'n': n});

  var recurseOverPossibleSolutions = function(rowIndex) {
    // base case
    if (rowIndex === board.get('n')) {
      // push to solutions
      var boardArr = [];
      for (var i = 0; i < board.get('n'); i++) {
        var mappedRow = board.attributes[i].map(elem => { return elem; });
        boardArr.push(mappedRow);
      }

      solutions.push(boardArr);

      return;
    }

    // for loop going over the first row
    for (var col = 0; col < board.get('n'); col++) {
      board.togglePiece(rowIndex, col);
      if (board.hasColConflictAt(col)) {
        // toggle piece back
        board.togglePiece(rowIndex, col);
        continue;
      }

      recurseOverPossibleSolutions(rowIndex + 1);

      // toggle piece back
      board.togglePiece(rowIndex, col);
    }
  };

  recurseOverPossibleSolutions(0);

  return solutions[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];

  var board = new Board({'n': n});

  var recurseOverPossibleSolutions = function(rowIndex) {
    // some base case
    if (rowIndex === board.get('n')) {
      // push to solutions
      var boardArr = [];
      for (var i = 0; i < board.get('n'); i++) {
        var mappedRow = board.attributes[i].map(elem => { return elem; });
        boardArr.push(mappedRow);
      }

      solutions.push(boardArr);

      return;
    }

    // for loop going over the first row
    for (var col = 0; col < board.get('n'); col++) {
      board.togglePiece(rowIndex, col);
      if (board.hasColConflictAt(col)) {
        // toggle piece back
        board.togglePiece(rowIndex, col);
        continue;
      }

      recurseOverPossibleSolutions(rowIndex + 1);

      // toggle piece back
      board.togglePiece(rowIndex, col);
    }
  };

  recurseOverPossibleSolutions(0);

  return solutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = [];

  var board = new Board({'n': n});

  var recurseOverPossibleSolutions = function(rowIndex) {
    // base case
    if (rowIndex === board.get('n')) {
      // push to solutions
      var boardArr = [];
      for (var i = 0; i < board.get('n'); i++) {
        var mappedRow = board.attributes[i].map(elem => { return elem; });
        boardArr.push(mappedRow);
      }

      solutions.push(boardArr);

      return;
    }

    // for loop going over the first row
    for (var col = 0; col < board.get('n'); col++) {
      board.togglePiece(rowIndex, col);
      if (board.hasColConflictAt(col) || board.hasMajorDiagonalConflictAt(board._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, col)) || board.hasMinorDiagonalConflictAt(board._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, col))) {
        // toggle piece back
        board.togglePiece(rowIndex, col);
        continue;
      }

      recurseOverPossibleSolutions(rowIndex + 1);

      // toggle piece back
      board.togglePiece(rowIndex, col);
    }
  };

  recurseOverPossibleSolutions(0);
  if (solutions[0] === undefined) {
    var boardArr = [];
    for (var i = 0; i < board.get('n'); i++) {
      var mappedRow = board.attributes[i].map(elem => { return elem; });
      boardArr.push(mappedRow);
    }

    solutions.push(boardArr);
  }
  return solutions[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = [];

  var board = new Board({'n': n});

  var recurseOverPossibleSolutions = function(rowIndex) {
    // base case
    if (rowIndex === board.get('n')) {
      // push to solutions
      var boardArr = [];
      for (var i = 0; i < board.get('n'); i++) {
        var mappedRow = board.attributes[i].map(elem => { return elem; });
        boardArr.push(mappedRow);
      }

      solutions.push(boardArr);

      return;
    }

    // for loop going over the first row
    for (var col = 0; col < board.get('n'); col++) {
      board.togglePiece(rowIndex, col);
      if (board.hasColConflictAt(col) || board.hasMajorDiagonalConflictAt(board._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, col)) || board.hasMinorDiagonalConflictAt(board._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, col))) {
        // toggle piece back
        board.togglePiece(rowIndex, col);
        continue;
      }

      recurseOverPossibleSolutions(rowIndex + 1);

      // toggle piece back
      board.togglePiece(rowIndex, col);
    }
  };

  recurseOverPossibleSolutions(0);
  return solutions.length;
};
