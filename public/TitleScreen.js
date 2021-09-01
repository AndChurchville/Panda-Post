class TitleScreen extends Phaser.Scene {
  constructor() {
    super("startGame");
  }

  preload() {
    this.load.image("background", "assets/images/clouds.png");
    this.load.image("ground", "assets/images/ground.png");
  }
}
