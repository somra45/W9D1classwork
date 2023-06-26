import MovingObject from "./moving-object.js"
import Asteroid from "./asteroid.js"
import Game from "./game.js"
window.MovingObject = MovingObject

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas")
    const steroid = new Asteroid({ pos: [30,30]});
})
