function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(220, 20);
  noStroke();
  fill(random(255), 50, 100);
  ellipse(random(width), random(height), random(20, 80));
}
