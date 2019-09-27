  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();
  
   if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
  "h" means how high the grass will be
  
  "height-10-random(h)" means the grass would not be able grow up out off screen 
