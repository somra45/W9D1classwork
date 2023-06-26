import MovingObject from "./moving-object.js";
import {randomVec,scale} from "./utils.js";

class Asteroid extends MovingObject {
    static RADIUS = 20;
    static COLOR = "rgb(128,138,135)";
    constructor(pos) {
        super(obj);
        this.pos = pos
        this.color = COLOR
        this.radius = RADIUS
        this.vel = scale(randomVec(length(30)), 2)
        const obj = new Object({color: this.color, radius: this.radius, vel: this.vel, pos: this.pos});


    };

};



export default Asteroid;
