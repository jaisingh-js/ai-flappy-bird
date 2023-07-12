const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const bird = new Bird();
const pipes = new Pipes();

animate();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // bird.update();
  pipes.update();
  bird.draw(ctx);
  pipes.draw(ctx);
  requestAnimationFrame(animate);
}
