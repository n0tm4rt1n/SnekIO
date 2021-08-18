// Creating variables
var socket = io();
var snekX = [], snekY = [];
var fruitcol = ["orange","red","yellow","green"]
var snekcol = [], user = 0;
var timer = 0;
var dir = 0; // 0 - up, 1 - right, 2- down, 3- left;
var hrana ={
    x:0,
    y:0,
}
for (i = 0;i < 1000;i++){
    snekcol[i] = Math.floor(Math.random()*16777215).toString(16);
}
socket.on("hrana" ,function(x,y){
    hrana.x=x;
    hrana.y=y;

});
socket.on("myrdane",function(id,x,y){
    snekX[id] = x;
    snekY[id] = y;
})
socket.on("id", function(id,x,y){
    id = user;
    snekX[id] = x;
    snekY[id] = y;    
});
function update() {
    if(isKeyPressed[37]){
        dir = 3;
    }
    if(isKeyPressed[38]){
        dir = 0;
    }
    if(isKeyPressed[39]){
        dir = 1;
    }
    if(isKeyPressed[40]){
        dir = 2;
    }
    if(timer>=20){
    switch(dir){
        case 0:
            snekY[user]--;
            timer = 0
            break;
        case 1:
            snekX[user]++;
            timer = 0
            break;
        case 2:
            snekY[user]++;
            timer = 0
            break;
        case 3:
            snekX[user]--;
            timer = 0
            break;
       }
    }   
    ++timer;
} 


function draw() {
    context.fillRect(snekX[user],snekY[user],30,30)
}

function keyup(key) {
}
function mouseup() {
}
