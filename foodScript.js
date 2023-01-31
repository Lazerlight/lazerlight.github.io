import { onSnake, expandSnake } from "./snakeScript.js";
import { randomPosition } from "./handleGridScript.js";
let food = getFoodPosition();
const EXPANSION_RATE = 2;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getFoodPosition();
  }
}

export function draw(mainEl) {
  const foodEl = document.createElement("div");
  foodEl.style.gridColumnStart = food.x;
  foodEl.style.gridRowStart = food.y;
  foodEl.classList.add("food");
  mainEl.appendChild(foodEl);
}

function getFoodPosition() {
  let foodPosition;
  while (foodPosition == null || onSnake(foodPosition)) {
    foodPosition = randomPosition();
  }
  return foodPosition;
}
