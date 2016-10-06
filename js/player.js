function getPlayer() {
    var player = new PIXI.Graphics();
    player.lineStyle(0);
    player.beginFill(0xFFFF0B, 0.5);
    player.drawCircle(470, 290, 60);
    player.endFill();
    return player;
}