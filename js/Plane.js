class Plane {
  constructor(speed) {
    this.speed = speed;

    this.plane = {
      width: 175,
      height: 50,
      x: 150,
      y: centerY_canvas - 50 / 2,
      targetY: centerY_canvas - 150 / 2,
    };
  }

  draw() {
    ctx.drawImage(
      planeImage,
      this.plane.x,
      this.plane.y,
      this.plane.width,
      this.plane.height
    );
  }

  updatePosition() {
    if (this.plane.targetY > this.plane.y + this.speed) {
      this.plane.y += Math.ceil((this.plane.targetY % this.plane.y) / 5);
    } else if (this.plane.targetY < this.plane.y - this.speed) {
      this.plane.y -= Math.ceil((this.plane.y % this.plane.targetY) / 5);
    }
  }

  move(mouseY) {
    mouseY = Math.floor(mouseY);
    if (this.plane.y != mouseY) {
      this.plane.targetY = mouseY;
    }
  }
}
