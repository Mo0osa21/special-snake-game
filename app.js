let snakeBody = ['square66', 'square65', 'square64']
let snakeSize = snakeBody.length
let direction = 'right'
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
let Speed = 0.3

const messageElm = document.querySelector('#message')
const scoreElm = document.querySelector('#score')
const levelElm = document.querySelector('#level')

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

  scoreElm.textContent = snakeBody.length
}

getBadApple()
getNormalApple()
updateBoard()

document.addEventListener('keyup', (event) => {
  let pastLocation = ''
  if (event.key === 'ArrowDown' && direction !== 'up') {
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
  } else if (event.key === 'ArrowUp' && direction !== 'down') {
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
  } else if (event.key === 'ArrowRight' && direction !== 'left') {
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
  } else if (event.key === 'ArrowLeft' && direction !== 'right') {
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
})

const moveSnake = () => {
  if (direction === 'down') {
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
  } else if (direction === 'up') {
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
  } else if (direction === 'right') {
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
  } else if (direction === 'left') {
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
  level = 0
  Speed = 0.3
  updateBoard()
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

const levelCalc = () => {}
//setInterval(moveSnake, 400)
