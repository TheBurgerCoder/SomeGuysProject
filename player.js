class Player {
    constructor(scale) {
        this.scale = scale;
        this.position = new V2d(50, 50);
        this.rotation = Math.PI;
        this.rotation_speed = 0.08;
        this.direction = new V2d(1, 0);
        this.direction.setAngle(this.rotation);
    }

    render(ctx) {
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.arc(this.position.x, this.position.y, .5 * this.scale, 0, 2 * Math.PI, false);
        ctx.fill();
        
        let pos = this.position.clone();
        pos.add(this.direction.clone().muls(.5 * this.scale));
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.closePath();
        ctx.stroke();
    }

    moveForward() {
        this.position.add(this.direction.clone().muls(2));
    }

    moveBack() {
        this.position.add(this.direction.clone().muls(-2));
    }

    rotateRight() {
        this.rotation += this.rotation_speed;
        this.direction.setAngle(this.rotation);
    }
    
    rotateLeft() {
        this.rotation -= this.rotation_speed;
        this.direction.setAngle(this.rotation);
    }
}
