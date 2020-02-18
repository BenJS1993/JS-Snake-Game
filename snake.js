const canvasBorderColour = "black";
const canvasBackgroundColour = "white";
const snakeBorderColour = "lightgreen";
const snakeBackgroundColour = "darkgreen";
const foodBorderColour = "darkred";
const foodBackgroundColour = "red";

const gameSpeed = 100;

let score = 0;

let snake = [ 
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150}, 
    {x: 120, y: 150},
    {x: 110, y: 150},
];

let dx = 10

/*let nextSnake = [ {x: 160, y: 150}, {x: 150, y: 150}, {x: 140, y: 150}, 
    {x: 130, y: 150}, {x: 120, y: 150}]*/

const snakeCanvas = document.getElementsByClassName("snakeCanvas")
const ctx = canvas.getContext("2d")

// function drawsnakeCanvas(canvas) {
//     let canvas = document.getElementsByClassName("snakeCanvas");
//     let ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#FFFFFF";
//     ctx.fillRect = (0, 0, 150, 75);
// }

function drawSnake() { 
    snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
    Ctx.fillstyle = snakeBackgroundColour;
    Ctx.strokestyle = snakeBorderColour;
    Ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
    const leftKey = 37;
    const rightKey = 39;
    const upKey = 38;
    const downKey = 40;

    const keyPressed = event.keycode;

    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === leftKey && !goingRight) { dx = -10; dy = 0; }
    if (keyPressed === upKey && !goingDown) { dx = 0; dy = -10; }
    if (keyPressed === rightKey && !goingLeft) { dx = 10; dy = 0; }
    if (keyPressed === downKey && !goingUp) { dx = 0; dy = 10; }
}

function advanceSnake() { 
    const head = { 
        x: snake[0].x + dx, y: snake[0].y + dy }  
        snake.unshift(head); 
        snake.pop();
    }

function clearCanvas() { 
    ctx.fillstyle = "white"; 
    ctx.strokestyle = "black";
    ctx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height); 
    ctx.strokeRect(0, 0, snakeCanvas.width, snakeCanvas.height);
    }

function main() {
    if (didGameEnd()) return;

    setTimeout(function onTick() { 
        clearCanvas(); 
        advanceSnake(); 
        drawSnake();
    
        main();
    }, gameSpeed);
}

function randomTen(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() { 
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gamecanvas.height - 10);

    snake.forEach(function isFoodOnSnake(part) {
        const isFoodOnSnake = part.x == foodX && part.y == foodY
        if (foodIsOnSnake)
        createFood();
    })
}

function drawFood() {
    ctx.fillstyle = foodBackgroundColour;
    ctx.strokestyle = foodBorderColour;
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

function advanceSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y
    };

    snake.unshift(head);

    const didEatfood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatfood) {
        score += 10;
        document.getElementById('snakeScore').innerHTML = score;

        createFood();
    } else {
        snake.pop();
    }
}

function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if (didCollide) return true;
    }
        const hitLeftWall = snake[0].x < 0;
        const hitRightWall = snake[0].x > gameCanvas.width - 10;
        const hitTopWall = snake[0].y &lt; 0;
        const hitBottomWall = snake[0].y > gameCanvas.height - 10;

        return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

function main() {
    
}