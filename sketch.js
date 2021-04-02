var start,startImage
var human,animal,tree,treeImage
var gameState="start"
var road,roadImage
var factory,factoryImage
var treesGroup,factoriesGroup,fruitsGroup
var orangeImage,mangoImage,appleImage,bananaImage
var gameOverImage,resetImage
function preload(){
    
    tree1=loadImage("tree1.png");
    tree2=loadImage("tree2.png");
    tree3=loadImage("tree3.png");
    tree4=loadImage("tree4.png");
    tree5=loadImage("tree5.jpg");

    startImage=loadImage("start1.jpg");

    roadImage=loadImage("road.png");

    factoryImage=loadImage("factory1.png");

    orangeImage=loadImage("orange1.png");
    mangoImage=loadImage("mango1.png");
    appleImage=loadImage("apple.png");
    bananaImage=loadImage("banana.png");

    gameOverImage=loadImage("gameover.png");
    resetImage=loadImage("reset.png");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);

    road = createSprite(600,450,200,100);
    road.addImage(roadImage);
    road.scale=0.3
    road.visible=false
    
    start=createSprite(600,200,50,50)
    start.addImage(startImage)
    start.scale=0.2

    human=createSprite(200,100,40,40);
    human.visible=false

    animal=createSprite(200,100,70,30);
    animal.visible=false

    treesGroup =createGroup();
    factoriesGroup =createGroup();
    fruitsGroup = createGroup();
}
function draw(){
    background(0)
    if(mousePressedOver(start)){
        gameState="play"
    }
    if(gameState=="play"){
        background(255)

        spawnTrees();
        spawnFactories();
        spawnFruits();

        start.visible=false
        human.visible=true
        animal.visible=true
       // tree.visible=true
        road.visible=true 
        factory.visible=true
        fruit.visible=true

        if(keyWentDown("UP_ARROW")){
            human.y=human.y-10
        }
        if(keyWentDown("DOWN_ARROW")){
            human.y=human.y+10
        }
        if(keyWentDown("LEFT_ARROW")){
            human.x=human.x-10
        }
        if(keyWentDown("RIGHT_ARROW")){
            human.x=human.x+10
        }
        
        camera.position.x=human.x

    }

    if(gameState=="end"){
        gameOver=createSprite(200,200,20,20);
        gameOver.addImage(gameOverImage);

        reset=createSprite(400,200,40,40);
        reset.addImage(resetImage);
    }

    
    drawSprites();
}

function spawnTrees(){
    if (frameCount % 300 === 0){
    tree=createSprite(600,300,70,30);
    
    tree.velocityX=-2
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: tree.addImage(tree1);
              break;
      case 2: tree.addImage(tree2);
              break;
      case 3: tree.addImage(tree3);
              break;
      case 4: tree.addImage(tree4);
              break;
      case 5: tree.addImage(tree5);
              break;
      default: break;
    }
    tree.scale=0.2
    treesGroup.add(tree)
    }
}

function spawnFactories(){
    factory=createSprite(300,320,40,40);
    factory.visible=false
    factory.addImage(factoryImage)
    factory.scale=0.5
    factoriesGroup.add(factory)
}

function spawnFruits(){
    fruit=createSprite(400,250,100,100);
    fruit.visible=false
    fruit.addImage(mangoImage);
    fruit.scale=0.06
    fruitsGroup.add(fruit);
}
