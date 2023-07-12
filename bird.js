class Bird {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 50;
    this.height = 30;
    this.controls = new Controls();
    this.velocityY = 0;
    this.gravity = 0.1;
    this.dead = false;
  }

  update() {
    //add gravity
    this.velocityY += this.gravity;
    if (this.controls.up && this.velocityY > 0) {
      this.velocityY = -3;
    }
    //add velocity every frame
    this.y += this.velocityY;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
