function getPlayer(x, y, size) {
    
    var texture = PIXI.Texture.fromImage('./img/player.jpg');

    // create a new Sprite using the texture
    var player = new PIXI.Sprite(texture);

    player.position.x = x;
    player.position.y = y;
    player.scale.x = size;
    player.scale.y = size;
    
    player.interactive = true;
    
    player.tint = Math.random() * 0xFFFFFF;


    return player;
}