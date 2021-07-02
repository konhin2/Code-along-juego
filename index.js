// Generación del canvas

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 480
    this.canvas.height = 270
    this.context = this.canvas.getContext('2d')
    this.canvas.style.border = '3px solid #5075EB'
    this.canvas.style.background = '#F2F5FF'
    document.body.insertBefore(this.canvas, document.body.childNodes[0])

    this.interval = setInterval(updateGameArea, 20)
  },
  clear: function () {
    this.context.clearRect(0, 0, innerWidth, innerHeight)
  },
  stop: function () {
    clearInterval(this.interval)
  }
}

class Component {
  constructor(width, height, color, x, y) {
    this.speedX = 0
    this.speedY = 0
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
  }
  update() {
    const ctx = myGameArea.context
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  left() {
    return this.x
  }
  right() {
    return this.x + this.width
  }
  top() {
    return this.y
  }
  button() {
    return this.y + this.height
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
  crashWith(obstacle) {
    return !(
      this.button() < obstacle.top()||
      this.top() > obstacle.button()||
      this.right() < obstacle.left()||
      this.left() > obstacle.right()
    )
  }
}


// Monitor de juego
const updateGameArea = () => {
  myGameArea.clear()
  player.newPos()
  player.update()
  updateObstacles()
  checkGameOver()
}
const updateObstacles = () => {
  for (let elem of myObstacles){
    elem.x += -1
    elem.update()
  }
  myGameArea.frames += 1
  if (myGameArea.frames % 120 === 0) {
    let canvasWidth = myGameArea.canvas.width
    

    let minHight = 20
    let maxHight = 200
    let minGap = 70
    let maxGap = 100

    let height = Math.floor(Math.random() * (maxHight - minHight + 1) + minHight)
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

    myObstacles.push(new Component(10, height, '#EB7382', canvasWidth, 0))
    myObstacles.push(new Component(10, myGameArea.canvas.height - height - gap, '#EB7382', canvasWidth, height + gap))
  }
}
const checkGameOver = () => {
  const crashed = myObstacles.some((obstacle) => {
    return player.crashWith(obstacle)
  })
  if (crashed){
    myGameArea.stop()
    console.log('crashed')
  }
}
// Eventos
const player = new Component(30, 30, '#16F29F', 0, 110)

const myObstacles = []


myGameArea.start()

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      player.speedX -= 2
      break
    case 39:
      player.speedX += 2
      break
    case 38:
      player.speedY -= 2
      break
    case 40:
      player.speedY += 2
      break
  }
})
// Reset speed
document.addEventListener('keyup', (event) => {
  player.speedX = 0
  player.speedY = 0
})