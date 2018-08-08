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


const cellFactory = function (id, value = null) {
  return {id, value};
}


const gameboard = (function() {
  var cells = [];
  for (var i = 1; i < 10; i++) {
    var cell = cellFactory(i);
    cells.push(cell);
  }
  return {cells};
})();

console.log(gameboard.cells);





const fieldController = (function() {
  $('button').on('click', function(e) {
    console.log('Cell', e.target.id, 'clicked!');
  });
})();






const playerFactory = function (isX, name = 'John Doe', score = 0) {
  return {name, isX, score};
}

const playerController = (function() {
  var player1 = playerFactory(true, 'Player1');
  var player2 = playerFactory(false, 'Player2');
  console.log(player1);
  console.log(player2);
})();








// gameboard object module
  // >> sqare object * 9
// gameboardController module


// player object * 2
// playersController module


// displayController
// gameController

//
