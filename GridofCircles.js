function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 375;
var y = 375;

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(255), 100, 100);
  rect(x, y, 25, 25);

  // set up next circle
  x -= 30;

  // if we hit the right edge, go down a line
  if (x < 0) {
    x = 375;
    y -= 30;
  }

  // if we hit the bottom edge, reset to top
  if (y < 0) {
    y = 375;
  }
}
