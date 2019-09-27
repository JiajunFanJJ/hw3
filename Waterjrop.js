var x = 230;
var y = 220;
var high = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  fill(255);
  rect(0, 200, x, 20);

  // water
  colorMode(HSB);
  fill(233, 255, 80);
  rect(0, 370, 400, 30);
  
  // draw drip
  colorMode(HSB);
  fill(233, 255, 80);
  ellipse(x, y, 10, high);

  //size changing
  high += 0.2;
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y += 3;

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
    high = 10;
  }
}
