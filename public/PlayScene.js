class PlayScene extends Phaser.Scene{
    constructor(){
        super('playGame');
    }
   
    create() {
        this.gameSpeed = 10;
        const {height, width} = this.game.config;

        // this.background = this.add.image(0, 0, 'background').setOrigin(0, 0).setScale(0.6);
        // this.background.setOrigin(0,0);

        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0,0);
        this.ground = this.add.tileSprite(0, height, width, 26, 'ground').setOrigin(0,1);

        //Panda character
        this.pandy = this.physics.add.sprite(0,height,'pandy').setOrigin(0,1).setCollideWorldBounds(true).setGravityY(5000);     
      //set variable for object containing 4 directions, space, and shift key
        this.cursorkeys = this.input.keyboard.createCursorKeys();
    }
   

    initAnims(){
        this.anims.create({
            key: 'running',
            frames: this.anims.generateFrameNumbers('runplayer', {start: 0, end: 1}),
            frameRate: 6,
            repeat: -1
        })
    }

    jumpPandy(){
        //player jumps with spacebar
         if(!this.pandy.body.onFloor()) {return;}
         if(this.cursorkeys.space.isDown){
            this.pandy.setVelocityY(-1600);
         } else { 
            this.pandy.setVelocityX(0)
            }
        }     
        
        
    update(){
        //60 fps runs
        this.background.tilePositionX += this.gameSpeed;
        this.ground.tilePositionX += this.gameSpeed;
        

        //create run animation
        this.initAnims();
        //call to handle player input  
        this.jumpPandy();

        //run
        if(this.pandy.body.deltaAbsY() > 0) {
            this.pandy.anims.stop();
            this.pandy.setTexture('pandy')
        } else {
            this.pandy.play('running', true);
        }
    } 

     
    
    } 
