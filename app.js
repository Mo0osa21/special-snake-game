let snakeBody = ['square66', 'square65', 'square64']
let snakeSize = snakeBody.length
let direction = 'right'
let gameInterval
let board = [
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  'snake',
  'snake',
  'snake',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle'
]
let condition = false
let message = ''
let level = 1
let speed = 700
let score = snakeSize

const messageElm = document.querySelector('#message')
const scoreElm = document.querySelector('#score')
const levelElm = document.querySelector('#level')
const startButtonElm = document.querySelector('#start')
const instructionsElm = document.querySelector('#instructions')

const getNormalApple = () => {
  const randomIndex = Math.floor(Math.random() * 100)
  if (
    board[randomIndex] !== 'obstacle' &&
    board[randomIndex] !== 'snake' &&
    board[randomIndex] !== 'badApple'
  ) {
    board[randomIndex] = 'normalApple'
  } else {
    getNormalApple()
  }
}

const getBadApple = () => {
  const randomIndex = Math.floor(Math.random() * 100)
  if (
    board[randomIndex] !== 'obstacle' &&
    board[randomIndex] !== 'snake' &&
    board[randomIndex] !== 'normalApple'
  ) {
    board[randomIndex] = 'badApple'
  } else {
    getBadApple()
  }
}

const decreaseSize = () => {
  if (snakeSize > 1) {
    board[snakeBody[snakeSize - 1].substring(6)] = ''
    snakeBody.pop()
    snakeSize = snakeBody.length
    board.forEach((elm, index) => {
      if (elm === 'badApple') {
        board[index] = 'snake'
      }
    })
    getBadApple()
    updateBoard()
  } else {
    reset()
  }
}

const increaseSize = () => {
  board.forEach((elm, index) => {
    if (elm === 'normalApple') {
      snakeBody.push(`square${index}`)
      board[index] = 'snake'
    }
  })

  snakeSize = snakeBody.length

  getNormalApple()

  updateBoard()
}

const moveSnake = () => {
  if (direction === 'down') {
    downMovement()
  } else if (direction === 'up') {
    upMovement()
  } else if (direction === 'right') {
    rightMovement()
  } else if (direction === 'left') {
    leftMovement()
  }
}
const downMovement = () => {
  direction = 'down'
  snakeBody.forEach((part, index) => {
    if (index === 0) {
      pastLocation = part
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = `square${Number(part.substring(6)) + 12}`
      if (
        board[snakeBody[index].substring(6)] === 'obstacle' ||
        board[snakeBody[index].substring(6)] === 'snake'
      ) {
        reset()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'badApple') {
        decreaseSize()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'normalApple') {
        increaseSize()
        return
      }
      board[snakeBody[index].substring(6)] = 'snake'
    } else {
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = pastLocation
      board[snakeBody[index].substring(6)] = 'snake'
      pastLocation = part
    }
  })
  board[pastLocation.substring(6)] = ''
  updateBoard()
}
const upMovement = () => {
  direction = 'up'
  snakeBody.forEach((part, index) => {
    if (index === 0) {
      pastLocation = part
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = `square${Number(part.substring(6)) - 12}`
      if (
        board[snakeBody[index].substring(6)] === 'obstacle' ||
        board[snakeBody[index].substring(6)] === 'snake'
      ) {
        reset()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'badApple') {
        decreaseSize()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'normalApple') {
        increaseSize()
        return
      }
      board[snakeBody[index].substring(6)] = 'snake'
    } else {
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = pastLocation
      board[snakeBody[index].substring(6)] = 'snake'
      pastLocation = part
    }
  })
  board[pastLocation.substring(6)] = ''
  updateBoard()
}
const rightMovement = () => {
  direction = 'right'
  snakeBody.forEach((part, index) => {
    if (index === 0) {
      pastLocation = part
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = `square${Number(part.substring(6)) + 1}`
      if (
        board[snakeBody[index].substring(6)] === 'obstacle' ||
        board[snakeBody[index].substring(6)] === 'snake'
      ) {
        reset()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'badApple') {
        decreaseSize()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'normalApple') {
        increaseSize()
        return
      }
      board[snakeBody[index].substring(6)] = 'snake'
    } else {
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = pastLocation
      board[snakeBody[index].substring(6)] = 'snake'
      pastLocation = part
    }
  })
  board[pastLocation.substring(6)] = ''
  updateBoard()
}
const leftMovement = () => {
  direction = 'left'
  snakeBody.forEach((part, index) => {
    if (index === 0) {
      pastLocation = part
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = `square${Number(part.substring(6)) - 1}`
      if (
        board[snakeBody[index].substring(6)] === 'obstacle' ||
        board[snakeBody[index].substring(6)] === 'snake'
      ) {
        reset()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'badApple') {
        decreaseSize()
        return
      }
      if (board[snakeBody[index].substring(6)] === 'normalApple') {
        increaseSize()
        return
      }
      board[snakeBody[index].substring(6)] = 'snake'
    } else {
      board[snakeBody[index].substring(6)] = ''
      snakeBody[index] = pastLocation
      board[snakeBody[index].substring(6)] = 'snake'
      pastLocation = part
    }
  })

  board[pastLocation.substring(6)] = ''
  updateBoard()
}

const reset = () => {
  board.forEach((elm, index) => {
    if (elm !== 'obstacle') {
      board[index] = ''
    }
  })

  for (let i = 0; i < snakeSize; i++) {
    snakeBody.pop()
  }

  snakeBody = ['square66', 'square65', 'square64']
  snakeSize = snakeBody.length
  direction = 'right'

  snakeBody.forEach((part) => {
    board[Number(part.substring(6))] = 'snake'
  })

  getBadApple()
  getNormalApple()

  condition = false
  message = ''
  level = 1
  speed = 1000
  updateBoard()
}

const levelCalc = () => {
  if (score >= 3 && score < 5) {
    speed = 700
    level = 1
  } else if (score >= 5 && score < 10) {
    speed = 600
    level = 2
  } else if (score >= 10 && score < 15) {
    speed = 500
    level = 3
  } else if (score >= 15 && score < 20) {
    speed = 550
    level = 3
  } else if (score >= 20 && score < 25) {
    speed = 500
    level = 4
  } else if (score >= 25 && score < 30) {
    speed = 450
    level = 5
  } else if (score >= 30 && score < 35) {
    speed = 400
    level = 6
  } else if (score >= 35 && score < 40) {
    speed = 350
    level = 7
  } else if (score >= 40 && score < 45) {
    speed = 300
    level = 8
  } else if (score >= 45 && score < 50) {
    speed = 250
    level = 9
  } else if (score >= 50 && score < 55) {
    speed = 200
    level = 10
  } else if (score >= 55 && score < 60) {
    speed = 150
    level = 11
  } else if (score >= 60) {
    speed = 100
    level = 12
  }
}

const updateBoard = () => {
  let square = ''

  board.forEach((sqr, index) => {
    square = document.querySelector(`#square${index}`)

    if (sqr === 'obstacle') {
      square.style.backgroundColor = 'black'
    } else if (sqr === 'snake') {
      square.style.backgroundColor = 'green'
    } else if (sqr === 'normalApple') {
      square.style.backgroundColor = 'red'
    } else if (sqr === 'badApple') {
      square.style.backgroundColor = 'gray'
    } else if (sqr === '') {
      square.style.backgroundColor = 'white'
    }
  })

  score = snakeSize
  scoreElm.textContent = score
  levelElm.textContent = level
  levelCalc()

  clearInterval(gameInterval)
  gameInterval = setInterval(moveSnake, speed)
}

const startGame = () => {
  getBadApple()
  getNormalApple()
  updateBoard()
  instructionsElm.style.display = 'none'
  startButtonElm.style.display = 'none'
}

document.addEventListener('keyup', (event) => {
  let pastLocation = ''
  if (event.key === 'ArrowDown' && direction !== 'up') {
    downMovement()
  } else if (event.key === 'ArrowUp' && direction !== 'down') {
    upMovement()
  } else if (event.key === 'ArrowRight' && direction !== 'left') {
    rightMovement()
  } else if (event.key === 'ArrowLeft' && direction !== 'right') {
    leftMovement()
  }
})

startButtonElm.addEventListener('click', startGame)
