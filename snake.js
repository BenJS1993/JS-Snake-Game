const canvasBorderColour = "black";
const canvasBackgroundColour = "white";
const snakeColour = "lightgreen";
const snakeBorderColour = "darkgreen";

let snake = [ {x: 150, y: 150}, {x: 140, y: 150}, {x: 130, y: 150}, 
    {x: 120, y: 150}, {x: 110, y: 150},];

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
    Ctx.fillstyle = snakeColour;
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
    if (keyPressed === downKey && !goingUp) {dx = 0; dy = 10; }
}

function advanceSnake() { const head = { x: snake[0].x + dx, y: snake[0].y + dy }  
                            snake.unshift(head); 
                            snake.pop(); }

function clearCanvas() { ctx.fillstyle = "white"; 
                            ctx.strokestyle = "black";
                            ctx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height); 
                            ctx.strokeRect(0, 0, snakeCanvas.width, snakeCanvas.height);
                        }

function main() {
    setTimeout(function onTick() { 
    clearCanvas(); 
    advanceSnake(); 
    drawSnake();
    
    main();
},100);
}