//Made this with a tutorial on gamedevacademy
var OceanRescue = OceanRescue || {};

//title screen
OceanRescue.Game = function(){};

OceanRescue.Game.prototype = {
    create: function() {
	//set dimensions
	this.game.world.setBounds(0, 0, 1920, 1920);

	//background
	this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'water');
	
	//create player
	this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'boat');

	//add animations
	this.player.animations.add('up', [0, 1, 2], 10, true);
	this.player.animations.add('down', [7, 8, 9], 10, true);
	this.player.animations.add('right', [14, 15, 16, 17, 18, 19, 20], 10, true);
	this.player.animations.add('left', [21, 22, 23, 24, 25, 26], 10, true);

	//initial score of zero
	this.playerScore = 0;

	//enable physics
	this.game.physics.arcade.enable(this.player);
	this.playerSpeed = 26;
	this.player.bodycollideWorldBounds = true;

	//make camera follow the player
	this.game.camera.follow(this.player);

	this.generateTrash();
	this.generateDolphins();

	//add sound
	this.collectSound = this.game.add.audio('collect');

	//show score
	this.showLabels();
    },
    update: function() {
	//collision between player and trash
	this.game.physics.arcade.overlap(this.player, this.trash, this.hitsTrash, null, this);
	this.game.physics.aracade.overlap(this.dolpins, this.trash, this.eatsTrash, null, this);
	this.game.physics.arcade.collide(this.player, this.dolphins, this.hitsDolphin, null, this);
    },
    generateTrash: function() {
	this.trash = this.game.add.group();

	//give the trash physics
	this.trash.enableBody = true;
	this.trash.physicsBodyType = Phaser.Physics.ARCADE;

	//generate a random number to populate the map
	var numTrash = this.game.rnd.integerInRange(150, 200);
	var trashBag;

	for (var i = 0; i &lt; numTrash; i++) {
	    //add sprite and make the trash "float" in the water
	    trashBag = this.trash.create(this.game.world.randomX, this.game.world.randomY, 'trash');
	    trashBag.body.velocity.x = this.game.rnd.integerInRange(-2, 2);
	    trashBag.body.velocity.y = this.game.rnd.integerInRange(-2, 2);
	    trashBag.body.immovable = true;
	    trashBag.body.collideWorldBounds = true;
	}
    },
    generateDolphins: function() {
	this.dolphins = this.game.add.group();

	//give the dolphins physics
	this.dolphins.enableBody = true;
	this.dolphins.physicsBodyType = Phaser.Physics.ARCADE;

	//generate dolphins around the map
	var numDolphins = this.game.rnd.integerInRange(5, 25);
	var dolphin;

	for (var j = 0; j &lt; numDolphins; j++) {
	    //add sprite and animations
	    dolphin = this.dolphins.create(this.game.world.randomX, this.game.world.randomY, 'dolphin');
	    dolphin.animations.add('swimRight', [0, 1], 5, true);
	    dolphin.animations.add('swimLeft', [2, 3], 5, true);
	    dolphin.animations.add('swimUp', [4, 5], 5, true);
	    dolphin.animations.add('swimDown', [6, 7], 5, true);
	    dolphin.animations.play('swimDown');
	}
    },
    hitsTrash: function(player, trash) {
	//play collection sound
	this.collectSound.play();
	this.playerScore++;
	this.scoreLabel.text = this.playerScore;
	this.trash.kill();
    },
    hitsDolphin: function(player, dolphin) {
	//Ends game...for now...
	this.player.kill();
	this.game.time.events.add(800, this.gameOver, this);
    },
    eatsTrash: function(dolphin, trash){
	//decrease score and hurt dolphin
	this.playerScore -= 10;
	this.dolphin.kill(); //add health later
    },
    showLabels: function() {
	//score text
	var text = "0";
	var style = { font: "20px Arial", fill: "#fff", align: "center" };
	this.scoreLabel = this.game.add.text(this.game.width - 50, this.game.height - 50, text, style);
	this.scoreLabel.fixedToCamera = true;
    },
    gameOver: function() {
	this.game.state.start('MainMenu', true, false, this.playerScore);
    },
};
