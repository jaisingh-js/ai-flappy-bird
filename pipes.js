class Pipes {
    constructor() {
        this.pipes = [];
        this.#generatePipes();
        this.velocity = 1;
    }

    #generatePipes() {
        this.pipes.push(new Pipe(400, -50));
        this.pipes.push(new Pipe(400, 300));

        this.pipes.push(new Pipe(700, -100));
        this.pipes.push(new Pipe(700, 250));
    }

    update() {
        this.pipes.forEach(pipe => pipe.update(this.velocity));
    }

    draw(ctx) {
        this.pipes.forEach(pipe => pipe.draw(ctx));
    }
}


class Pipe {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 250;
    }

    update(velocity) {
        this.x -= velocity;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'green';
        ctx.fill();
    }
}