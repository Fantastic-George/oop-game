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
        this.positionX--;
        this.updateUI();

    }
    moveRight() {
        this.positionX++;
        this.updateUI();

    }
    moveUp() {
        this.positionY++;
        this.updateUI();
        
    }
    moveDown() {
        this.positionY--;
        this.updateUI();
    }
}


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