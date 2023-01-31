const mainEl = document.querySelector("main");
import { update as updateFood, draw as drawFood } from "./foodScript.js";
import { outsideGrid } from "./handleGridScript.js";
import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getHead,
  snakeIntesection,
} from "./snakeScript.js";

let lastRenderTime = 0;
let gameOver = false;

function renderGame(Time) {
  if (gameOver) {
    if (confirm("You Lost! Please press OK to restart!")) {
      window.location = "/";
    }
    return;
  }

  const timeSinceLastRender = (Time - lastRenderTime) / 1000;
  window.requestAnimationFrame(renderGame);
  if (timeSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = Time;

  updateLoop();
  drawLoop();
}

window.requestAnimationFrame(renderGame);

function updateLoop() {
  updateSnake();
  updateFood();
  handleLose();
}

function drawLoop() {
  mainEl.innerHTML = "";
  drawSnake(mainEl);
  drawFood(mainEl);
}

function handleLose() {
  gameOver = outsideGrid(getHead()) || snakeIntesection();
}
