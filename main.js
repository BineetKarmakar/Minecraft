var canvas= new fabric.Canvas("myCanvas");

var block_height=30;
var block_width=30;

player_x=10;
player_y=10;

var player_obj="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_obj=img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({
            top:player_y,left:player_x
        });
        canvas.add(player_obj);
    })

}


var block_obj="";

function block_update(getImage){
    fabric.Image.fromURL(getImage,function(img){
        block_obj=img;
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({
            top:player_y,left:player_x
        });
        canvas.add(block_obj);
    })

}


window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyPressed =e.keyCode;
    if (e.shiftKey==true && keyPressed=="80"){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("Width").innerHTML=block_width;
        document.getElementById("Height").innerHTML=block_height;
    }

    if (e.shiftKey==true && keyPressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("Width").innerHTML=block_width;
        document.getElementById("Height").innerHTML=block_height;
    }
    if (keyPressed=="37"){
        left()
    }
    if (keyPressed=="38"){
        up()
    }
    if (keyPressed=="39"){
        right()
    }
    if (keyPressed=="40"){
        down()
    }

    if (keyPressed=="67"){
        block_update("cloud.jpg");
    }
    if (keyPressed=="68"){
        block_update("dark_green.png");
    }
    if (keyPressed=="71"){
        block_update("ground.png");
    }
    if (keyPressed=="76"){
        block_update("light_green.png");
    }
    if (keyPressed=="82"){
        block_update("roof.jpg");
    }
    if (keyPressed=="84"){
        block_update("trunk.jpg");
    }
    if (keyPressed=="85"){
        block_update("unique.png");
    }
    if (keyPressed=="87"){
        block_update("wall.jpg");
    }
    if (keyPressed=="89"){
        block_update("yellow_wall.png");
    }
}


function up(){

    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_obj);
        player_update();
    }
}

function down(){

    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_obj);
        player_update();
    }
}

function left(){

    if(player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_obj);
        player_update();
    }
}

function right(){

    if(player_x<=900){
        player_x=player_x+block_width;
        canvas.remove(player_obj);
        player_update();
    }
}