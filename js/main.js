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

const playerFactory = (name, score = 0) => {
  const setX = () => {
    this.status = 'x';
  }
  const setO = () => {
    this.status = 'o';
  }
  const getStatus = () => {
    return this.status;
  }
  return {name, score, setX, setO, getStatus};
}

var player1 = playerFactory('Player1');
var player2 = playerFactory('Player2');

console.log(player1.getStatus());
console.log(player2.getStatus());


const gameController = (() => {
  var rounds = 0;

  const setRounds = (value) => {
    if (typeof value == 'number') {
      this.rounds = value;
    }
  }

  const getRounds = () => {
    return this.rounds;
  }

  const prioritize = () => {
    if (this.rounds % 2 == 0) {
      // player1.status = 'x';
      // player2.status = 'o';
      player1.setX();
      player2.setO();
    } else {
        // player2.status = 'x';
        // player1.status = 'o';
        player2.setX();
        player1.setO();
    }
  }

  return {prioritize, setRounds, getRounds};
})();

const cellFactory = function(id, value = '') {
  return {id, value};
}

const gameboard = (function() {
    var cells = [];
    for (var i = 0; i < 9; i++) {
      cells.push('');
    }
    return {cells};
})();

console.log(gameboard.cells);





const displayController = (function() {
  $('button').on('click', function(e) {
    var id = e.target.id;
    console.log('Cell', id, 'clicked!');
    console.log(gameboard.cells[id]);
  });
  console.log(player1);
  const render = function() {
    for (var i = 0; i < gameboard.cells.length; i++) {
      $('#' + i).text(gameboard.cells[i].toUpperCase());
    }
  }
  return {render};
})();

console.log('Testing...');
gameController.prioritize();
console.log('---gameController---');
console.log('.rounds ->',gameController.rounds);
console.log('.getRounds() ->',gameController.getRounds());
console.log('---players---');
console.log('player1.status ->', player1.status);
console.log('player1.getStatus() ->', player1.getStatus());
console.log('player2.status ->', player2.status);
console.log('player2.getStatus() ->', player2.getStatus());
console.log('...End');














// gameboard object module
  // >> sqare object * 9
// gameboardController module


// player object * 2
// playersController module


// displayController
// gameController

//
