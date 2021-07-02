// Generación del canvas

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 480
    this.canvas.height = 270
    this.context = this.canvas.getContext('2d')
    this.canvas.style.border = '1px solid green'
    document.body.insertBefore(this.canvas, document.body.childNodes[0])

    this.interval = setInterval(updateGameArea, 20)
  },
  clear: function () {
    this.context.clearRect(0, 0, innerWidth, innerHeight)
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

  }
  right() {

  }
  top() {

  }
  button() {

  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
  crashWith() {

  }
}


// Monitor de juego
const updateGameArea = () => {
  myGameArea.clear()
  player.newPos()
  player.update()
}

// Eventos
const player = new Component(30, 30, 'orange', 0, 110)




myGameArea.start()

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      player.speedX -= 1
      break
    case 39:
      player.speedX += 1
      break
    case 38:
      player.speedY -= 1
      break
    case 40:
      player.speedY += 1
      break
  }
  console.log(player);
})
// Reset speed
document.addEventListener('keyup', (event) => {
  player.speedX = 0
  player.speedY = 0
  console.log('freno', player);
})