var scene = new Phaser.Scene("game");

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [PreloadScene, PlayScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  parent: "maingame",
};
window.onload = function () {
  var game = new Phaser.Game(config);
};
