function createProgressArc(x, y, d = 100, color = "green", width = 5) {
  let start = 0;
  let stop = 0;
  let isClick = false;
  let isHover = false;

  return {
    update() {
      isHover = dist(x, y, mouseX, mouseY) <= d / 2;

      if (isHover && !isClick) {
        push();
        stroke(color);
        noFill();
        circle(x, y, d);
        strokeWeight(width);
        strokeCap(SQUARE);
        stop = stop + 10;
        arc(x, y, d - width, d - width, start - 90, stop - 90);

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

      return isClick;
    }
  };
}
