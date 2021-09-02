class PreloadScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/images/clouds.png");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("pandy", "assets/images/pandy.png");
    this.load.image("doggy", "assets/images/doggy.png");
    this.load.image("logo", "assets/images/pandapost-logo.png");

    this.load.spritesheet("runplayer", "assets/images/pandy-run.png", {
      frameWidth: 96,
      frameHeight: 96,
    });
    this.load.spritesheet("rundog", "assets/images/dog-run.png", {
      frameWidth: 96,
      frameHeight: 96,
    });
  }

  create() {
    this.background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setScale(0.6);
    this.ground = this.add
      .tileSprite(0, config.height, config.width, 26, "ground")
      .setOrigin(0, 1);

    this.add
      .text(280, 250, "Panda Post", {
        fontSize: "48px",
        fill: "black",
        fontStyle: "bold",
      })
      .setOrigin(0, 0);

    this.add
      .text(250, 450, "Press Space to Play!", {
        fontSize: "32px",
        fill: "green",
        fontStyle: "bold",
      })
      .setOrigin(0, 0);

    this.cursorkeys = this.input.keyboard.createCursorKeys();
  }
  //spacebar to switch scene
  startGame() {
    if (this.cursorkeys.space.isDown) {
      this.scene.start("playGame");
    }
  }

  update() {
    this.startGame();
  }
}
