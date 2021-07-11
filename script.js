const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 500)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER");
    }
}, 10)

const btn = document.getElementById("btn");
btn.addEventListener("click", function(event) {
    stopGame();
})

btn.addEventListener("keydown", function(event) {
    event.preventDefault();
})

function stopGame() {
    if (cactus.classList == "move") {
        cactus.classList.remove("move");
        btn.innerText = "Start";
    } else {
        cactus.classList.add("move");
        btn.innerText = "Stop";
    }
}