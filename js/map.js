function getPlant() {
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage('./img/map_rasterized.png');

    // create a new Sprite using the texture
    var map = new PIXI.Sprite(texture);

    map.position.x = 0;
    map.position.y = 0;


    return map;
}