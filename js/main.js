//Made with help from tutorial on gamedevacademy
var OceanRescue = OceanRescue || {};

OceanRescue.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

//Adds game states to the game
OceanRescue.game.state.add('Boot', OceanRescue.Boot);
OceanRescue.game.state.add('Preload', OceanRescue.Preload);
OceanRescue.game.state.add('MainMenu', OceanRescue.MainMenu);
OceanRescue.game.state.add('Game', OceanRescue.Game);

OceanRescue.game.state.start('Boot');
