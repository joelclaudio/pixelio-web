
function getPlant1() {
    // create a texture from an image path
    var plant = new PIXI.Graphics();
    plant.lineStyle(2, 0xFF0000, 1);
    plant.beginFill(0xFF00BB, 0.25);
    plant.drawRect(275, 50, 500, 450);
    plant.endFill();

    return plant;
}


function getPlant2() {
    var plant2 = new PIXI.Graphics();
    plant2.lineStyle(2, 0xFF0000, 1);
    plant2.beginFill(0xFF00BB, 0.25);
    plant2.drawRect(25, 50, 250, 350);
    plant2.endFill();
    return plant2;
}