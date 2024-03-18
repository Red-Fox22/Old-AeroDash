class Plane {
  constructor(img, speed) {
    this.img = img;
    this.speed = speed;
    
    this.plane = {
      width: 300,
      height: 150,
      initialX: centerX_canvas - plane.width / 2,
      initialY: centerY_canvas - plane.height / 2,
    };
  }

  draw() {
    ctx.drawImage(this.img, this.plane.initialX, this.plane.initialY, this.plane.width, this.plane.height);
  }
}
