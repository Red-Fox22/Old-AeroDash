class Plane {
  constructor(img, speed) {
    this.img = img;
    this.speed = speed;
    
    this.plane = {
      width: 175,
      height: 50,
      initialX: 150,
      initialY: centerY_canvas - 150 / 2,
    };
  }

  draw() {
    ctx.drawImage(this.img, this.plane.initialX, this.plane.initialY, this.plane.width, this.plane.height);
  }
}
