
function getPlant1() {
    // create a texture from an image path
    var plant = new PIXI.Graphics();
    plant.lineStyle(2, 0xFF0000, 1);
    plant.beginFill(0xFF00BB, 0.25);
    plant.drawRect(275, 50, 500, 450);
    plant.endFill();

    return plant;
}


function getPlant() {
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage('./img/map_rasterized.png');

    // create a new Sprite using the texture
    var map = new PIXI.Sprite(texture);

    map.position.x = 50;
    map.position.y = 50;


    return map;
}