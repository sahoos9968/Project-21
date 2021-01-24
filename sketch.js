var canvas;
var music;

var s1,s2,s3,s4;

var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    s1 = createSprite(100,575, 175,50);
    s1.shapeColor = "blue";

    s2 = createSprite(280,575, 175,50);
    s2.shapeColor = "red";

    s3 = createSprite(465,575, 175,50);
    s3.shapeColor = "orange";

    s4 = createSprite(670,575, 175,50);
    s4.shapeColor = "green";

    
    box = createSprite(random(20,750),20,30,30);
    box.shapeColor = "white"
    box.velocityX = 4;
    box.velocityY = 4

 


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    
    if (box.x > 800 || box.x < 0){
        box.velocityX = box.velocityX * (-1);
    }

    if (box.y < 0){
        box.velocityY = box.velocityY * (-1);
    }

    boxTouch(box,s1);
    boxTouch(box,s2);
    boxTouch(box,s3);
    boxTouch(box,s4);

    //add condition to check if box touching surface and make it box
    drawSprites();

    function boxTouch(ob1,ob2){
        if (ob1.isTouching(ob2) || ob1.bounceOff(ob2)){
            ob1.shapeColor = ob2.shapeColor;
            
            ob1.velocityY = ob1.velocityY * (-1);
            
        }

        
    }
}
