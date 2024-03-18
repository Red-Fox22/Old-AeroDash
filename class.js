class Background {
  constructor(img, speed) {
    this.img = img;
    this.speed = speed;
    this.xPos = 0;
  }
  
  draw() {
    ctx.drawImage(this.img, this.xPos, 0, canvas.width, canvas.height);
    ctx.drawImage(this.img, this.xPos + canvas.width, 0, canvas.width, canvas.height);

    this.xPos -= this.speed;

    if (this.xPos <= -canvas.width) {
      this.xPos = 0;
    }
  }
}