const Phaser = require('phaser');
const Config = require('./Config.js').Config;
const BasicScene = require('./BasicScene').BasicScene;

class BasicGame extends Phaser.Game {
  constructor() {
    super(new Config(BasicScene));
  }
}

exports.BasicGame = BasicGame;
