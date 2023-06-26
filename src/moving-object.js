export default class MovingObject {
    constructor(object) {
        this.pos = object.pos;
        this.vel = object.vel;
        this.radius = object.radius;
        this.color = object.color;
    };

    draw(context) {
        let asteroidPath = context.createPath();
        context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)
        context.fillStyle = this.color
        context.fill(asteroidPath)
    };

    move () {

    }

    isCollidedWith (object) {

    }
};

