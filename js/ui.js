
var heightScore = 40; 

function getTopBarScoreBackground() {
    var graphics = new PIXI.Graphics();

    graphics.lineStyle(2, 0xF5BD07, 0.5);
    graphics.beginFill(0xF5BD07, 0.75);
    graphics.drawRoundedRect(window.innerWidth-125, 25, 100, heightScore, 4);
    graphics.endFill();

    return graphics;
}

function getTopBarScoreText(value) {

    var basicText = new PIXI.Text(value +"",{
        fontFamily: 'VT323',
        fontSize: "24px",
        fill : 0xff1010,  
    });
    
    basicText.x = 30;
    basicText.y = 90;
    basicText.anchor.x = 1;
    basicText.position.x = window.innerWidth-30;
    basicText.position.y = 30;

    return basicText;
}