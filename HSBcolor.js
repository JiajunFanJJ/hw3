function setup() {
  createCanvas(400, 400);
  background(220);
  // HSB with H range 0-400, S range 0-400, B range 0-100:
  colorMode(HSB, 300, 300, 50);
}

function draw() {
  var x = random(width);
  var y = random(height);
  fill(x, y, 100);
  noStroke()
  rect(x, y, 20, 20);
  ellipse(y, x, 20)
}
