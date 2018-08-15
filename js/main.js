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




// Model Module *******************
const model = (() => {

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


  var game = {
    moves: 0,
    rounds: 0
  }


  var gameboard = [];
    for (var i = 0; i < 9; i++) {
      gameboard.push('');
  }

  var activePlayer = player1;
  prioritize();

  // function calculateActivePlayer() {
    // if (game.rounds % 2 == 0) {
      // if (game.moves % 2 == 0) {
        // activePlayer = player1;
  //     } else activePlayer = player2;
  //   } else activePlayer = player2;
  // }

  function switchActivePlayer() {
    switch (activePlayer) {
      case player1: activePlayer = player2;
      break;
      case player2: activePlayer = player1;
      break;
    }
  }

  const increaseRounds = () => {
    game.rounds += 1;
  }
  const increaseMoves = () => {
    game.moves += 1;
  }
  const initGame = () => {
    game.rounds = 0;
    game.moves = 0;
  }

  function prioritize() {
    if (this.rounds % 2 == 0) {
      player1.setX();
      player2.setO();
    } else {
        player2.setX();
        player1.setO();
    }
  }

  function cellClicked(currentId) {
    gameboard[currentId] = activePlayer.getStatus();
    increaseMoves();
    switchActivePlayer();
    view.render();
  }

  return {prioritize, switchActivePlayer, gameboard, cellClicked};
})();
//*******************
//
//
// View Module ****************
const view = (() => {
  const render = () => {
    for (var i = 0; i < model.gameboard.length; i++) {
      $('#' + i).text(model.gameboard[i].toUpperCase());
    }
  }
  return {render};
})();
//*******************
//
//
// Controller Module *******************
const controller = (function() {
  view.render();
  $('button').on('click', function(e) {
    var id = parseInt(e.target.id);
    model.cellClicked(id);
    console.log('Cell', id, 'clicked!');
    console.log('typeof id', typeof id);
    console.log(model.gameboard[id]);
  });

})();
//*******************


//
