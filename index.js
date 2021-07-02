// Generación del canvas

const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function () {
        this.canvas.width = 480
        this.canvas.height = 270
        this
        this.context = this.canvas.getContext('2d')
        this.canvas.style.border = '1px solid green'
        document.body.insertBefore(this.canvas, document.body.childNodes[0])

        this.interval = setInterval(updateGameArea, 20)
    },
    clear: function () {
        this.context, clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

class Component {
    constructor(width, height, color, x, y) {
        this.width = width
        this.height = height
        this.color = color
        this.x = x
        this.y = y
        this.speedX = 0
        this.speedY = 0
    }
    update() {
        const ctx = myGameArea.context
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}


// Monitor de juego
const updateGameArea = () => {
    console.log("hola")
    myGameArea.clear
    player.update()
}

// Eventos
const player = new Component(30, 30, 'orange', 0, 110)




myGameArea.start()