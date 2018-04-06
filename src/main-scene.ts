export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "main" });
    }

    preload() {
        this.load.image('test', 'assets/test.png');
    }

    create() {
        this.add.sprite(100, 100, 'test');
    }

    update() {
    }
}