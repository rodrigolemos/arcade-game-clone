/**
* @description HUD (heads-up display) Handles on-screen information
*/
class HUD {

  constructor() {
  }

  showInstructions() {
    if (player.readInstructions === false) {

      ctx.globalAlpha = 0.85;
      ctx.fillStyle = "beige";
      ctx.fillRect(0, 50, 505, 535);

      ctx.font = "20pt Fredoka One";
      ctx.fillStyle = "darkred";
      ctx.fillText(`Hey there!`, 255, 250);

      ctx.font = "14pt Fredoka One";
      ctx.fillText(`Press enter and help me to get to the other side!`, 255, 330);

      ctx.globalAlpha = 1.0;
    }
  }

  showScore() {
    ctx.font = "16pt monospace";
    ctx.fillStyle = "#EEE";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${player.score}`, 10, 30);
    if (player.points > 0) {
      ctx.font = "10pt monospace";
      ctx.fillText(`(${player.points})`, 149, 30);
    }
  }

  showLevel() {
    ctx.font = "16pt monospace";
    ctx.fillStyle = "#EEE";
    ctx.textAlign = "center";
    ctx.fillText(`Level: ${player.level}`, 255, 30);
  }

  showLives() {
    ctx.font = "16pt monospace";
    ctx.fillStyle = "#EEE";
    ctx.textAlign = "right";
    ctx.fillText(`Lives: ${player.lives}`, 490, 30);
  }

  showGameOver() {

    ctx.textAlign = "center";

    if (player.hasLost) {

      ctx.drawImage(Resources.get('images/game-over.png'), 0, 50, 505, 550);
      ctx.font = "16pt monospace";
      ctx.fillStyle = "#EEE";
      ctx.fillText(`Thanks for playing!`, 255, 215);
      ctx.fillText(`Press enter to try again!`, 255, 450);

    }


  }

  showWin() {
    if (player.hasWon) {
      ctx.drawImage(Resources.get('images/you-win.png'), 310, -8, 67, 67);
    }
  }

  render() {
    this.showInstructions();
    this.showScore();
    this.showLevel();
    this.showLives();
    this.showGameOver();
    this.showWin();
  }
}
