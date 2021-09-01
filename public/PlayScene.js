class PlayScene extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  init() {}
  preload() {}

  create() {
    const { height, width } = this.game.config;
    this.gameSpeed = 10;

    this.background = this.add
      .tileSprite(0, 0, config.width, config.height, "background")
      .setOrigin(0, 0);
    this.ground = this.add
      .tileSprite(0, height, width, 26, "ground")
      .setOrigin(0, 1);

    //Panda Character: Pandy
    this.pandy = this.physics.add
      .sprite(0, height, "pandy")
      .setOrigin(0, 1)
      .setCollideWorldBounds(true)
      .setGravityY(5000);

    //Hazard Character: Dog
    this.hazardDog = this.physics.add
      .sprite(width, height, "doggy")
      .setOrigin(0, 1);

    //set variable for object containing 4 directions, space, and shift key
    this.cursorkeys = this.input.keyboard.createCursorKeys();

    //Lose Condition: if Pandy touches hazardDog game over man, game over
    this.physics.add.overlap(
      this.pandy,
      this.hazardDog,
      this.playerHit,
      null,
      this
    );
  }
  //callback function for player touching hazard
  playerHit(pandy, hazardDog) {
    console.log("player hit!");
  }

  //move hazard dog across screen
  moveDog(dog, speed) {
    dog.x -= speed;
    if (dog.x < -config.width) {
      this.resetDog(dog);
    }
  }
  //move dog back to right of screen
  resetDog(dog) {
    dog.x = config.width;
  }

  initAnims() {
    this.anims.create({
      key: "running",
      frames: this.anims.generateFrameNumbers("runplayer", {
        start: 0,
        end: 1,
      }),
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: "hazardDog",
      frames: this.anims.generateFrameNumbers("rundog", {
        start: 0,
        end: 1,
      }),
      frameRate: 6,
      repeat: -1,
    });
  }

  jumpPandy() {
    //player jumps with spacebar
    if (!this.pandy.body.onFloor()) {
      return;
    }
    if (this.cursorkeys.space.isDown) {
      this.pandy.setVelocityY(-1600);
    } else {
      this.pandy.setVelocityX(0);
    }
  }

  //   placeHazards() {
  //     const { height, width } = this.game.config;
  //     const distance = Phaser.Math.Between(600, 900);
  //     let hazard;
  //     hazard = this.hazards.create(width + distance, height, "dog");
  //     hazard.body.offset.y += 10;
  //     hazard.setImmovable();
  //   }

  update() {
    //60 fps runs
    this.background.tilePositionX += this.gameSpeed;
    this.ground.tilePositionX += this.gameSpeed;

    //create run animation
    this.initAnims();
    //call to handle player input
    this.jumpPandy();

    //run
    if (this.pandy.body.deltaAbsY() > 0) {
      this.pandy.anims.stop();
      this.pandy.setTexture("pandy");
    } else {
      this.pandy.play("running", true);
    }
    this.hazardDog.play("hazardDog", true);

    //move dog across screen
    this.moveDog(this.hazardDog, 8);

    console.log("scene 2");
  }
}
