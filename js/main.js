window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.tilemap('Pacific', 'assets/stillocean2.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/water4.png' );
        game.load.spritesheet('player', 'assets/boat.png', 26, 26);
        game.load.image('trash', 'assets/trash.png');
        game.load.spritesheet('dolphin', 'assets/dolphin.png', 26, 26);
    }
    
    var map;
    var layer;
    var player;
    var cursors;
    
    function create() {
        game.stage.backgroundColor = '#787878';
        
        map = game.add.tilemap('Pacific');
        map.addTilesetImage('water4', 'tiles');
        
        layer = map.createLayer('Ocean');
        layer.resizeWorld();
        //layer.wrap = true;
        
        player = game.add.sprite(1 * 26, 1 * 26, 'player');
        
        game.camera.follow(player);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        
        cursors = game.input.keyboard.createCursorKeys();
        // Create a sprite at the center of the screen using the 'logo' image.
        //bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        //bouncy.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        //game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        //bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        //var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        //var text = game.add.text( game.world.centerX, 15, "Build something awesome.", style );
        //text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
        if(cursors.left.isDown){
            player.body.velocity.x = -26;
        }
        if(cursors.right.isDown){
            player.body.velocity.x = 26;
        }
        if(cursors.up.isDown){
            player.body.velocity.y = -26;
        }
        if(cursors.down.isDown){
            player.body.velocity.y = 26;
        }
    }
};
