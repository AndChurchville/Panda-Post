class PreloadScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/images/clouds.png");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("pandy", "assets/images/pandy.png");
    this.load.image("doggy", "assets/images/doggy.png");

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
    this.add.text(20, 20, "loading");
    this.scene.start("playGame");
  }
}
