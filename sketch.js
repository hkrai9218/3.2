function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(206, 184, 228);

  drawCharacter();

  drawLines();

  drawClouds();

  drawRightClouds();

  drawTown();

  let s = 'Here you are, you little dream self you.';
  fill(255);
  text(s, 175, 30, 70, 80);

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

function drawClouds(){
  push();
  noStroke();
  fill(228, 184, 207);
  ellipse(56, 46, 55, 55);
  ellipse(60, 74, 84, 67);
  ellipse(100, 50, 60, 85);
  ellipse(120, 90, 100, 60);
  pull();
}

function drawRightClouds(){
  push();
  noStroke();
  fill(228, 184, 207);
  ellipse(364, 40, 70, 70);
  ellipse(387, 45, 45, 67);
  ellipse(330, 75, 85, 85);
  ellipse(380, 110, 300, 100);
  pop();

function drawTown(){
  push();
  noStroke();
  fill(129, 87, 177);
  rect(25, 370, 15, 400);
  rect(35, 390, 40, 400);
  rect(40, 325, 20, 400);
  rect(60, 370, 15, 400);
  rect(75, 390, 40, 400);
  rect(80, 330, 20, 400);
  rect(90, 370, 15, 400);
  rect(160, 350, 40, 400);
  rect(120, 290, 40, 400);
  rect(180, 265, 45, 400);
  rect(240, 300, 25, 400);
  rect(230, 350, 20, 400);
  rect(300, 360, 25, 400);
  rect(267, 375, 30, 400);
  rect(320, 345, 25, 400);
  rect(350, 370, 35, 400);
  pop();
}

function keyPressed(){

  if (key === 'd'){
    console.log(`key is being pressed`)
  }

  return false;

}
