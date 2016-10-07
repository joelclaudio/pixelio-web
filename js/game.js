var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb} );
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

//add food
var foodPositions = [];
var foods = [];
for (var i = 0; i < 100; i++) {
    foodPositions.push({
        x: Math.random() * (1200 - 0) + 0,
        y: Math.random() * (700 - 0) + 0,
    });
}

for (var i = 0; i < foodPositions.length; i++) {
    var food = getFood(foodPositions[i].x, foodPositions[i].y)
    stage.addChild(food);
    foods.push(food);
}


//add players
var playersPositions = [];
var players = [];
for (var i = 0; i < 30; i++) {
    playersPositions.push({
        x: Math.random() * (1200 - 0) + 0,
        y: Math.random() * (700 - 0) + 0,
    });
}

for (var i = 0; i < playersPositions.length; i++) {
    var player = getPlayer(playersPositions[i].x, playersPositions[i].y, Math.random() * (2 - 0.4) + 0.4)
    stage.addChild(player);
    players.push(player);
}

/* map.js */
stage.addChild(getPlant());

//move players
function movePlayers () {

    for (var i = 0; i < players.length; i++) {
        players[i].position.x += Math.random() * (-10 - 10) + 10;
        players[i].position.y += Math.random() * (-10 - 10) + 10;
    }
    
}



var socket = null;
         var isopen = false;
         window.onload = function() {
            socket = new WebSocket("ws://88.157.229.216:9000/?id=1234");
            socket.binaryType = "arraybuffer";
            socket.onopen = function() {
               console.log("Connected!");
               isopen = true;
            }
            socket.onmessage = function(e) {
               if (typeof e.data == "string") {
                   movePlayers();
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
