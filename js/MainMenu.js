//I found this through a tutorial on gamedevacademy
var OceanRescue = OceanRescue || {};

//title screen
OceanRescue.MainMenu = function(){};

OceanRescue.Mainmenu.prototype = {
    init: function(score) {
	var score = score || 0;
	this.highScore = this.highScore || 0;

	this.highscore = Math.max(score, this.highScore);
    },
    create: function() {
	//show the water tile repeated
	this.background = this.game.add.tileSprite(0,  0, this.game.width, this.game.height, 'water');

	//give it speed
	this.background.autoScroll(-20, 0);

	//Main menu text
	var text = "Press to Begin";
	var style = { font: "30px Arial", fill: "#fff", align: "center" };
	var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
	t.anchor.set(0.5);

	//High score
	text = "Highest score; "+this.highestScore;
	style = { font: "15px Arial", fill: "#fff", align: "center" };

	var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
	h.anchor.set(0.5);
    },
    update: function() {
	if(this.game.input.activePointer.justPressed()) {
	    this.game.state.start('Game');
	}
    }
};
