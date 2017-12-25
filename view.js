let W = 600, H = 600

function viewToModel(viewCoordinates) {
    return new Vector(
        viewCoordinates.x / W,
        viewCoordinates.y / H
    )
}
function modelToView(modelCoordinates) {
    return new Vector(
        modelCoordinates.x * W,
        modelCoordinates.y * H
    )
}
function initView() {
    canvas.width = W
    canvas.height = H
}
function render() {
    integrate()

    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, W, H)

    renderBall(ball)
    renderVelocityLine(velocityLine)

    requestAnimationFrame(render)
}
function renderBall(ball) {
    if (typeof ball === 'undefined') {
        return
    }
    const viewCoordinates = modelToView(ball.position)

    ctx.strokeStyle = 'blue'
    ctx.beginPath()
    ctx.arc(
        Math.floor(viewCoordinates.x),
        Math.floor(viewCoordinates.y),
        Math.floor(ball.radius * W),
        0,
        2 * Math.PI
    )
    ctx.stroke()
}
function renderVelocityLine(velocityLine) {
    if (velocityLine == null) {
        return
    }
    const viewStart = modelToView(velocityLine.start)
    const viewEnd = modelToView(velocityLine.end)

    ctx.strokeStyle = 'red'
    ctx.beginPath()
    ctx.moveTo(viewStart.x, viewStart.y)
    ctx.lineTo(viewEnd.x, viewEnd.y)
    ctx.stroke()
}

initView()
render()
