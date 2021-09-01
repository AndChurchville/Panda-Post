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

    this.add.text(config.width / 2, config.height / 2, "Game Over ", {
      fontSize: "48px",
      fill: "black",
      fontStyle: "bold",
    });

    this.add.text(200, 300, "Replay!", {
      fontSize: "48px",
      fill: "black",
      fontStyle: "bold",
    });
  }
}
