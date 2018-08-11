// 1) Function Constructor
// function Player(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log('Hi, my name is', this.name);
//   }
// }
// var player = new Player('John', 36);
// player.sayHello();


// 2) Factory function
// const playerFactory = function (name, age) {
//   const sayHello = function () {
//     console.log('Hi, my name is', name);
//   }
//   // --private method, not accessible outside player object
//   const eat = function () {
//     console.log(name, 'is eating something.');
//   }
//   // --public method .publicEat() invokes private method .eat()
//   const publicEat = function () {
//     eat();
//   }
//   return {name, age, sayHello, publicEat};
// };
//
// const player = playerFactory('John', 36);
// player.sayHello();
// player.publicEat();


// // 3) Module Pattern
// const game = (function () {
//   const play = function (rounds) {
//     if (rounds > 2) {
//       console.log('Game over!');
//     } else {
//       console.log('Continue...');
//     }
//   }
//   return {play};
// })();
//
// game.play(2);
// game.play(3);


const cellFactory = function(id, value = '') {
  return {id, value};
}


const gameboard = (function() {
    var cells = [];
    for (var i = 0; i < 9; i++) {
      cells.push(cellFactory(i));
    }
    var rounds = 0;
    const setFirst = function() {
      if (rounds % 2 == 0) {
        player1.isX();
        player2.isO();
      } else {
          player1.isO();
          player2.isX();
      }
    }
    // for (var i = 0; i < 9; i++) {
      // var cell = cellFactory(i);
      // cells.push(cell);
    // }
    return {cells};
})();

console.log(gameboard.cells);

const playerFactory = function (name, status = '', score = 0) {
  const isX = function() {
    status = 'x';
  }
  const isO = function() {
    status = 'o';
  }
  return {name, status, score, isX, isO};
}

const gameController = (function() {
  var player1 = playerFactory('Player1');
  var player2 = playerFactory('Player2');
  console.log(player1);
  console.log(player2);
  return {player1, player2};
})();


const displayController = (function() {
  $('button').text('');
  $('button').on('click', function(e) {
    var id = e.target.id;
    console.log('Cell', id, 'clicked!');
    console.log(gameboard.cells[id]);
  });
  console.log(gameController.player1);
  const render = function() {
    for (var i = 0; i < gameboard.cells.length; i++) {
      $('button').filter(i).text(gameboard.cells[i].value);
    }
  }
})();
















// gameboard object module
  // >> sqare object * 9
// gameboardController module


// player object * 2
// playersController module


// displayController
// gameController

//
