function setup() {
  createCanvas(400, 400);
  x = 0;
  y = 100;
}

function draw() {
  background(74, 74, 74);
  
  fill(230)
  stroke(255)
  ellipse(x, y, 60, 60);
  fill(74,74, 74)
  strokeWeight(0)
  ellipse(x+10, y-10, 40, 40)
  x = x +(-1.2, 4);
  y = y - 1;
  
  fill(0, 105, 0);
  strokeWeight(0);
  rect(0, 300, 400, 400);
  
  strokeWeight(1)
  fill(255, 165, 0);
  stroke(255, 135, 0);
  rect(80, 150, 240, 210, 200)

  strokeWeight(.5)
  stroke(0, 165, 0);
  fill(0, 135, 0);
  triangle(200, 168, 180, 125, 220, 120);
  
  stroke(255, 135, 0);
  strokeWeight(1.75)
  line(200, 170, 170, 155); line(170, 155, 100, 200);
  line(100, 200, 90, 290); line(90, 290, 170, 350);
  line(170, 350, 200, 360);
  
  line(200, 170, 230, 155); line(230, 155, 300, 200);
  line(300, 200, 310, 290); line(310, 290, 230, 350);
  line(230, 350, 200, 360);
  
  line(200, 170, 170, 170);line(170, 170, 130, 200);
  line(130, 200, 130, 290);line(130, 290, 200, 360);
  
  line(200, 170 , 230, 170);line(230, 170, 270, 200);
  line(270, 200, 270, 290);line(270, 290, 200, 360);
  
  line(200, 170, 160, 250);line(160, 250, 200, 360);
  line(200, 170, 240, 250);line(240, 250, 200, 360);
  
  if (y < 0) {
    y = 100;
    x=0
  }

  
  
  
  
  
  
}