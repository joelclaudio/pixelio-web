var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb} );
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var plant = new PIXI.Graphics();
plant.lineStyle(2, 0xFF0000, 1);
plant.beginFill(0xFF00BB, 0.25);
plant.drawRect(275, 50, 500, 450);
plant.endFill();

var plant2 = new PIXI.Graphics();
plant2.lineStyle(2, 0xFF0000, 1);
plant2.beginFill(0xFF00BB, 0.25);
plant2.drawRect(25, 50, 250, 350);
plant2.endFill();

var player = new PIXI.Graphics();
player.lineStyle(0);
player.beginFill(0xFFFF0B, 0.5);
player.drawCircle(470, 290,60);
player.endFill();


stage.addChild(plant);
stage.addChild(plant2);

stage.addChild(player);


var socket = null;
         var isopen = false;
         window.onload = function() {
            socket = new WebSocket("ws://88.157.229.216:9000");
            socket.binaryType = "arraybuffer";
            socket.onopen = function() {
               console.log("Connected!");
               isopen = true;
            }
            socket.onmessage = function(e) {
               if (typeof e.data == "string") {
                  console.log("Text message received: " + e.data);
               } else {
                  var arr = new Uint8Array(e.data);
                  var hex = '';
                  for (var i = 0; i < arr.length; i++) {
                     hex += ('00' + arr[i].toString(16)).substr(-2);
                  }
                  console.log("Binary message received: " + hex);
               }
            }
            socket.onclose = function(e) {
               console.log("Connection closed.");
               socket = null;
               isopen = false;
            }
         };
         function sendText() {
            if (isopen) {
               socket.send("Hello, world!");
               console.log("Text message sent.");               
            } else {
               console.log("Connection not opened.")
            }
         };
         function sendBinary() {
            if (isopen) {
               var buf = new ArrayBuffer(32);
               var arr = new Uint8Array(buf);
               for (i = 0; i < arr.length; ++i) arr[i] = i;
               socket.send(buf);
               console.log("Binary message sent.");
            } else {
               console.log("Connection not opened.")
            }
         };


// start animating
animate();
function animate() {
    requestAnimationFrame(animate);


    // render the container
    renderer.render(stage);
}
