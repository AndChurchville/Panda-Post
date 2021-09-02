class PlayScene extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    const { height, width } = this.game.config;
    this.gameSpeed = 10;
    this.hazard, this.hazardGroup;

    this.background = this.add
      .tileSprite(0, 0, config.width, config.height, "background")
      .setOrigin(0, 0);
    this.ground = this.add
      .tileSprite(0, height, width, 26, "ground")
      .setOrigin(0, 1);

    //Panda Character: Pandy
    this.pandy = this.physics.add
      .sprite(60, height, "pandy")
      .setOrigin(0, 1)
      .setCollideWorldBounds(true)
      .setGravityY(5000);

    //create a sprite pool
    this.hazardGroup = this.physics.add.group({
      defaultKey: "rundog",
      maxSize: 10,
      visible: true,
      active: false,
    });

    this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: () => {
        this.hazardGroup
          .get(config.width, height)
          .setActive(true)
          .setVisible(true)
          .setOrigin(0, 1)
          .setSize(10, 10, true)
          .play("hazardDog", true);
      },
    });

    //set variable for object containing 4 directions, space, and shift key
    this.cursorkeys = this.input.keyboard.createCursorKeys();

    //Lose Condition: if Pandy touches hazardDog game over man, game over
    this.physics.add.collider(
      this.pandy,
      this.hazardGroup,
      this.playerHit,
      null,
      this
    );
  }

  //callback function for player touching hazard
  //hit by doggy switch to game over scene
  playerHit() {
    this.scene.start("endGame");
  }

  //animations for player and hazard
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
    //move hazards across screen

    this.hazardGroup.incX(-8);
    this.hazardGroup.getChildren().forEach((hazard) => {
      if (hazard.active && hazard.x < -config.width) {
        this.hazardGroup.killAndHide(hazard);
      }
    });
  }
}
