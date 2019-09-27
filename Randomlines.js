function setup() {
  createCanvas(400, 400);
  // frameRate(10);
}

function draw() {
  background(220, 50);
  var x1 = random(width);
  var y1 = random(height);
  var x2 = random(width);
  var y2 = random(height);
  var weight = random(5, 15);
  strokeWeight(weight);
  stroke(random(255), random(255), random(255));
  line(x1, y1, x2, y2);
}
