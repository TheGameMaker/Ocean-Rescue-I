//Found this through a tutorial called gamedevacademy
var OceanRescue = OceanRescue || {};

OceanRescue.Boot = function(){};

OceanRescue.Boot.prototype = {
    preload: function(){
	this.load.image('preloadbar', 'assets/preloaderbar.png');
    },
    create: function(){
	//Sets background to white
	this.game.stage.backgroundColor = '#fff';

	//scaling options
	this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	this.scale.minWidth = 240;
	this.scale.minHeight = 170;
	this.scale.maxWidth = 2880;
	this.scale.maxHeight = 1920;

	//centers the game horizontally
	this.scale.pageAlignHorizontally = true;

	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);

	this.state.start('Preload');
    }
};
