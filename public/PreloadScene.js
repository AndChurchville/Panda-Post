class PreloadScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/images/clouds.png");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("pandy", "assets/images/pandy.png");
    this.load.image("doggy", "assets/images/doggy.png");
    this.load.image("house", "assets/images/house.png");
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

    var mainStyle = {
      font: "bold 62px Arial",
      fill: "white",
      backgroundColor: "#097D9B",
      padding: { left: 20, right: 20, top: 20, bottom: 20 },
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };

    var subStyle = {
      font: "bold 32px Arial",
      fill: "white",
      backgroundColor: "#097D9B",
      padding: { left: 20, right: 20, top: 20, bottom: 20 },
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };
    this.add.text(240, 250, "Panda Post", mainStyle).setOrigin(0, 0);

    this.add.text(250, 410, "Press Space to Play!", subStyle).setOrigin(0, 0);

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
