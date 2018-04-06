import 'phaser';
import { MainScene } from "./main-scene";
import { TitleScene } from "./title-scene";
import { Config } from "./config";

new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'content',
    width: Config.width,
    height: Config.height,
    resolution: 1,
    backgroundColor: "#fff",
    scene: [
        TitleScene,
        MainScene
    ]
});