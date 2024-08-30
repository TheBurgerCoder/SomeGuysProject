class Map {
    constructor(map_data, scale) {
        this.map_data = map_data;
        this.scale = scale;

        this.width = map[0].length;
        this.height = map.length;
    }

    render(ctx) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let wall = map[y][x];
                if (wall > 0) {
                    ctx.fillStyle = 'rgb(200,200,200)';
                    ctx.fillRect(
                        x * this.scale,
                        y * this.scale,
                        this.scale, this.scale
                    );
                }
            }
    }
    }
}
