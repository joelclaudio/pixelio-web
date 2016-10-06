function getPlayer() {
    
    var texture = PIXI.Texture.fromImage('./img/player.jpg');

    // create a new Sprite using the texture
    var player = new PIXI.Sprite(texture);

    player.position.x = 250;
    player.position.y = 50;

    player.interactive = true;


    return player;
}