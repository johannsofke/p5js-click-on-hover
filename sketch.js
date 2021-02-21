/* eslint-disable no-undef, no-unused-vars */
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  smooth();
  pa1 = createProgressArc(200, 200);
  pa2 = createProgressArc(300, 200, 200, "red", 10);
}

function draw() {
  background("white");

  isClick1 = pa1.update();
  if (isClick1) {
    fill("blue");
  } else {
    fill("red");
  }
  square(200, 200, 50);

  isClick2 = pa2.update();
  if (isClick2) {
    fill("black");
  } else {
    fill("red");
  }
  square(300, 200, 50);
}
