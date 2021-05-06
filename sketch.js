const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundimage;
var response,j,daytime,hour;
var ampm;
var bg ;


function preload() {
  //getBackgroundImg();
  gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage)
      background(backgroundimage);
      
   
    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12){ 
        text("Time : "+ hour%12 + " PM", 50,100); }
    else if(hour==0){ 
        text("Time : 12 AM",100,100); }
    else{ 
        text("Time : "+ hour%12 + " AM", 50,100); }
   
}


async function gettime(){

  // write code to fetch time from API
  async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    j = await response.json();
    daytime = j.datetime;
    // write code slice the datetime
    hour =  daytime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
   if(hour <= 8 && hour >= 6){
       var bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       var bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       var bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
       var bg = "sunrise5.png";
   }
   else if(hour <= 15 && hour >= 14){
       var bg = "sunset7.png";
   }
   else if(hour <= 17 && hour >= 15){
       var bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 17){
       var bg = "sunset11.png";
   }
   else {
       var bg = "sunset12.png";
   }
   //load the image in backgroundImg variable here
   backgroundimage = loadImage(bg);
    console.log(hour);

  }
}