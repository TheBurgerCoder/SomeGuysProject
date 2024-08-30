let GAME_SCALE = 35;

let map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,1],
	[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

class Game {
    constructor() {
        // Get DOM stuff
        this.canvas = gId("game");
        this.ctx = this.canvas.getContext('2d');

        // Create game components
        this.map = new Map(map, GAME_SCALE);
        this.player = new Player(GAME_SCALE);
        this.input = new Input(this.canvas);

        // Set canvas size
        this.canvas.width = this.map.width * GAME_SCALE;
        this.canvas.height = this.map.height * GAME_SCALE;
        this.canvas.style.width = (this.map.width * GAME_SCALE) + 'px';
        this.canvas.style.height = (this.map.height * GAME_SCALE) + 'px';

        // Main loop
        window.requestAnimationFrame(this.update.bind(this));
    }
    
    update() {
        this.update_logic();
        this.update_render();

        window.requestAnimationFrame(this.update.bind(this));
    }

    update_logic() {
        if (this.input.key(Input.UP)) this.player.moveForward();
        if (this.input.key(Input.DOWN)) this.player.moveBack();
        if (this.input.key(Input.LEFT)) this.player.rotateLeft();
        if (this.input.key(Input.RIGHT)) this.player.rotateRight();
    }

    update_render() {
        this.ctx.fillStyle = 'rgb(0,0,0)';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.map.render(this.ctx);
        this.player.render(this.ctx);
    }
}

(function() {
    new Game();
})();
