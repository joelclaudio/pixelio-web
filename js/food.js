function getFood(x,y) {
    
    var texture = PIXI.Texture.fromImage('./img/player.jpg');

    // create a new Sprite using the texture
    var food = new PIXI.Sprite(texture);

    food.position.x = x;
    food.position.y = y;

    food.scale.x = 0.3;
    food.scale.y = 0.3;
    
    food.interactive = true;

    food.rotation = Math.random() * (Math.PI * 2)

    food.tint = Math.random() * 0xFFFFFF;

    return food;
}