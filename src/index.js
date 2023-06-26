import MovingObject from "./moving-object.js"
import Asteroid from "./asteroid.js"
window.MovingObject = MovingObject()

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas")
    const context = canvas.getContext("2d")

    context.fillStyle = "rgba(255,255,255)"
    context.fillrect(0, 0, canvas.width, canvas.height)
}) 

