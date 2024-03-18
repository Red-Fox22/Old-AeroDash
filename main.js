const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const centerX_canvas = canvas.width / 2;
const centerY_canvas = canvas.height / 2;

const background = new Image();
background.src = "./assets/background.webp";

const plane = new Image();
plane.src = "./assets/plane.webp";

const back = new Back(background, 10);

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  back.draw();
  requestAnimationFrame(gameLoop);
};

gameLoop();
