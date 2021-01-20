var pet,petimg,petimg2;
var database,foodS;

function preload()
{
  petimg = loadImage("dogImg.png");
  petimg2 = loadImage("dogImg1.png");
}

function setup() {
  database =firebase.database();
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(petimg);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);
}


function draw() {  
background("green");
  drawSprites();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  //foodS = foodS;

}
// if(keyWentDown(DOWN_ARROW)){
//   writeStock(foodS);
//   foodS = foodS+1;
// }
textSize(18);
fill("black");
stroke("black");
strokeWeight(1);
text("note:Press UP_ARROW key to feed Drago Milk",100,50);
text("food remaining:"+foodS,100,100);

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=1){
    x=0;
    pet.addImage(petimg2);
  }else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })

}
