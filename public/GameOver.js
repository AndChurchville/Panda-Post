class GameOver extends Phaser.Scene {
  constructor() {
    super("endGame");
  }

  preload() {}

  create() {
    this.background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setScale(0.6);

    this.ground = this.add
      .tileSprite(0, config.height, config.width, 26, "ground")
      .setOrigin(0, 1);

    var mainStyle = {
      font: "bold 62px Arial",
      fill: "white",
      backgroundColor: "#9C0011",
      padding: { left: 20, right: 20, top: 20, bottom: 20 },
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };

    var subStyle = {
      font: "bold 32px Arial",
      fill: "white",
      backgroundColor: "#9C0011",
      padding: { left: 20, right: 20, top: 20, bottom: 20 },
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };

    this.add.text(240, 250, "Game Over ", mainStyle);

    this.add.text(250, 410, "Press space to replay", subStyle);
    this.cursorkeys = this.input.keyboard.createCursorKeys();
  }

  //spacebar to replay game
  replayGame() {
    if (this.cursorkeys.space.isDown) {
      this.scene.start("playGame");
    }
  }

  update() {
    this.replayGame();
  }
}
