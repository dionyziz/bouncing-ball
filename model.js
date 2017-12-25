function integrate() {
    const dt = 1

    if (typeof ball === 'undefined') {
        return
    }

    ball.position.x += ball.velocity.x * dt
    ball.position.y += ball.velocity.y * dt

    if (ball.position.x + ball.radius > 1
     || ball.position.x - ball.radius < 0) {
        ball.velocity.x = -ball.velocity.x
    }
    if (ball.position.y + ball.radius > 1
     || ball.position.y - ball.radius < 0) {
        ball.velocity.y = -ball.velocity.y
    }
}

class Ball {
    constructor() {
        this.position = new Vector(0.5, 0.5)
        this.velocity = new Vector(0, 0)
        this.radius = 0.02
    }
}

class VelocityLine {
    constructor() {
        this.start = new Vector(0, 0)
        this.end = new Vector(0, 0)
    }
}
