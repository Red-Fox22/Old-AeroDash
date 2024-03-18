const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const centerX_canvas = canvas.width / 2;
const centerY_canvas = canvas.height / 2;

const backgroundImage = new Image();
backgroundImage.src = "./assets/background.webp";

const planeImage = new Image();
planeImage.src = "./assets/plane.webp";

const speed = 10;

const background = new Background(backgroundImage, speed);
const planeObj = new Plane(planeImage, speed);

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  planeObj.draw();
  requestAnimationFrame(gameLoop);
};

gameLoop();
