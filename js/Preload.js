//Found this through a tutorial through gamedevacademy
var OceanRescue = OceanRescue || {};

OceanRescue.Preload = funtion(){};

OceanRescue.Preload.prototype = {
    preload: function() {
	//loading screen
	this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
	this.preloadBar.anchor.setTo(0.5);

	this.load.setPreloadsprite(this.preloadBar);

	//load game assets
	this.load.image('water', 'assets/watertile.png');
	this.load.image('trash', 'assets/trash.png');
	this.load.spritesheet('boat', 'assets/boatsheet.png', 26, 26, 28);
	this.load.spritesheet('dolphin', 'assets/dolphinsheet.png', 26, 26, 8);
	this.load.audio('collect', 'assets/audio/collect.ogg');
    },
    create: function() {
	this.state.start('MainMenu');
    }
};
