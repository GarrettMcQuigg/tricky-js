function guessingGame() {
  const hiddenNum = Math.floor(Math.random() * 99);
  let gameOver = false;
  let guesses = 0;

  return function myGuess(num) {
    if (gameOver) return "You win";
    guesses++;
    if (num === hiddenNum) {
      gameOver = true;
      return `You win! You needed ${guesses} guesses to win.`;
    }
    if (num < hiddenNum) return "too low";
    if (num > hiddenNum) return "too high";
  };
}

let game = guessingGame();
console.log(game(50));

module.exports = { guessingGame };
