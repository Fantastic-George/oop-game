console.log("hello world");

// ********** Player **********

class Player {
    constructor() {
        this.positionX = 10;
        this.positionY = 10;
        this.width = 20;
        this.height = 10;

        this.playerElm = document.getElementById("player");
        this.updateUI();
       
    }
    updateUI(){
        this.playerElm.style.width = `${this.width}vw`;
        this.playerElm.style.height = `${this.height}vh`;
        this.playerElm.style.backgroundColor = "black";
        this.playerElm.style.left = `${this.positionX}vw`;
        this.playerElm.style.bottom = `${this.positionY}vh`;
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--;
            this.updateUI();
        }   
    }
    moveRight() {
        if (this.positionX < 100 - this.width) {
            this.positionX++;
            this.updateUI();
        }
    }
    moveUp() {
        if (this.positionY < 100 - this.height) {
            this.positionY++;
            this.updateUI();
        }
        
    }
    moveDown() {
        if (this.positionY > 0) {
            this.positionY--;
            this.updateUI();
        }
        }
}


// ********** Obstacle **********


class Obstacle {
    constructor() {
        
        this.positionY = 90;
        this.width = 20;
        this.height = 10;
        this.speed = Math.random() + 1;
        this.positionX = Math.floor(Math.random() * (100 - this.width) + 1);

        this.createDomElement();

        
    }
    createDomElement(){
        this.obstacleElm = document.createElement("div");

        this.obstacleElm.className = "obstacle";
        this.obstacleElm.style.left = `${this.positionX}vw`;
        this.obstacleElm.style.bottom = `${this.positionY}vh`;
        this.obstacleElm.style.width = `${this.width}vw`;
        this.obstacleElm.style.height = `${this.height}vh`;
        // smooth transition movement
        this.obstacleElm.style.transition = "bottom 0.1s linear";
        
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }
    moveDown(){
        this.positionY-=this.speed;
        this.obstacleElm.style.bottom = `${this.positionY}vh`;
    }
}

const obstaclesArr = [];

// create obstacle
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
    console.log(obstaclesArr);
}, 5000);

// move obstacle down
setInterval(() => {
        obstaclesArr.forEach(obstacle => {
        obstacle.moveDown();

        // detect collision
        if (
            player.positionX < obstacle.positionX + obstacle.width &&   
            player.positionX + player.width > obstacle.positionX &&
            player.positionY < obstacle.positionY + obstacle.height &&
            player.positionY + player.height > obstacle.positionY
        ) {
            console.log("💥");
            location.href = "gameover.html";
        }


    });
}, 100);

const player = new Player();

player.moveLeft();
player.moveRight();
player.moveUp();
player.moveDown();


// ********** Event listener **********

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        player.moveLeft();
    }
    if (event.code === "ArrowRight") {
        player.moveRight();
    }
    if (event.code === "ArrowUp") {
        player.moveUp();
    }
    if (event.code === "ArrowDown") {
        player.moveDown();
    }
});