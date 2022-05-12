function setup() {
  createCanvas(400, 400);
}

let clouds = [];

function preload(){

  for (let i = 0; i <= 1; i++){
    clouds[i] = loadImage("assets/cloud png tiny.jpeg")
  }
}

function draw() {
  background(206, 184, 228);

  drawCharacter();

  drawLines();

  if (keyPressed)
    triangle(200, 175, 185, 210, 220, 215)
    line(width * .489, height * 0.53, width * 0.5, height * 0.58);
    line(width * .513, height * 0.534, width * 0.525, height * 0.58);
    line(width * .45, height * 0.5, width * 0.475, height * 0.49);
    line(width * .529, height * 0.49, width * 0.57, height * 0.51);
}

function drawCharacter(){
  triangle(200, 175, 185, 210, 220, 215)
}

function drawLines(){
  line(width * .489, height * 0.53, width * 0.5, height * 0.58);
  line(width * .513, height * 0.534, width * 0.525, height * 0.58);
  line(width * .45, height * 0.5, width * 0.475, height * 0.49);
  line(width * .529, height * 0.49, width * 0.57, height * 0.51);

}

function keyPressed(){

  if (key === 'd'){
    console.log(`key is being pressed`)
  }

  return false;

}

function preload(){

  for (let i = 0; i <= 1; i++){
    clouds[i] = loadImage("assets/cloud png tiny.jpeg")
