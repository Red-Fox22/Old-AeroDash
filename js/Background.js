class Background {
  constructor(speed) {
    this.speed = speed;
    this.xPos = 0;
  }

  draw() {
    ctx.drawImage(backgroundImage, this.xPos, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, this.xPos + canvas.width, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.filter = 'opacity(.9)';
    ctx.drawImage(sunImage, -100, -100, 200, 200);
    ctx.restore();

    this.xPos -= this.speed;

    if (this.xPos <= -canvas.width) {
      this.xPos = 0;
    }
  }
}