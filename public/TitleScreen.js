class TitleScreen extends Phaser.Scene{
    constructor(){
        super('startGame');
    }

    preload() {
        this.load.image('background', 'assets/images/clouds.png');
        this.load.image('ground', 'assets/images/ground.png');
    }

    create(){
         this.background = this.add.image(0, 0, 'background').setOrigin(0, 0).setScale(0.6);
         this.ground = this.add.tileSprite(0, height, width, 26, 'ground').setOrigin(0,1);

         this.add.text(280, 350, 'Panda Post', {
             fontSize: '32px',
             fill: 'pink',
             fontStyle: 'bold'
         });
         this.add.text(225, 400, 'Press Space to Play!', {
             fontSize: '32px',
             fill: 'green',
             fontStyle: 'bold'
         }).setInteractive({useHandCursor: true}).on('pointerdown', () => this.scene.start('PlayScene'))
    }

}