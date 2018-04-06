import { Config } from "./config";

export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "title" });
  }

  preload() {
  }

  create() {
    this.add.text(Config.width / 2, Config.height / 2, Config.title, {
      color: "#000",
      fontSize: "48px",
      fontFamily: "sans-serif"
    }).setOrigin(0.5, 0.5);
  }

  update() {
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).isDown ||
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER).isDown) {
      this.scene.start("main");
    }
  }
}