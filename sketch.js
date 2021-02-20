/* eslint-disable no-undef, no-unused-vars */
let x = 200;
let y = 200;
let start = 0;
let stop = 0;
let isClick = false;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  smooth();
}

function draw() {
  console.log("hallo");
  background("white");

  let isHover = mouseX > 175 && mouseX < 225 && mouseY > 175 && mouseY < 225;

  if (isClick === true) {
    fill("black");
  } else {
    fill("red");
  }
  square(x, y, 50);

  if (isHover && !isClick) {
    push();
    stroke("green");
    noFill();
    circle(200, 200, 100);
    strokeWeight(5);
    strokeCap(SQUARE);
    stop = stop + 10;
    arc(x, y, 100 - 5, 100 - 5, start - 90, stop - 90);

    if (stop >= 360) {
      isClick = true;
      stop = 0;
    } else {
      isClick = false;
    }
    pop();
  }

  if (!isHover) {
    isClick = false;
    stop = 0;
  }
}
