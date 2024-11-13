let snakeBody = ['square60', 'square59', 'square58']
let snakeSize = snakeBody.length
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
  'snake',
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
  'normalApple',
  'badApple',
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
let level = 0
let Speed = 0.3

const messageElm = document.querySelector('#message')
const scoreElm = document.querySelector('#score')
const levelElm = document.querySelector('#level')

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
    }
  })
}
updateBoard()

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowDown') {
    snakeBody.forEach((part, index) => {
      let pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) + 12}`
        board[snakeBody[index].substring(6)] = 'snake'
      } else {
        snakeBody[index] = pastLocation
        board[snakeBody[index].substring(6)] = 'snake'
        pastLocation = part
      }
    })
    updateBoard()
  } else if (event.key === 'ArrowUp') {
    snakeBody.forEach((part, index) => {
      let pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) - 12}`
        board[snakeBody[index].substring(6)] = 'snake'
      } else {
        snakeBody[index] = pastLocation
        board[snakeBody[index].substring(6)] = 'snake'
        pastLocation = part
      }
    })
    updateBoard()
  } else if (event.key === 'ArrowRight') {
    snakeBody.forEach((part, index) => {
      let pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) + 1}`
        board[snakeBody[index].substring(6)] = 'snake'
      } else {
        snakeBody[index] = pastLocation
        board[snakeBody[index].substring(6)] = 'snake'
        pastLocation = part
      }
    })
    updateBoard()
  } else if (event.key === 'ArrowLeft') {
    snakeBody.forEach((part, index) => {
      let pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) - 1}`
        board[snakeBody[index].substring(6)] = 'snake'
      } else {
        snakeBody[index] = pastLocation
        board[snakeBody[index].substring(6)] = 'snake'
        pastLocation = part
      }
    })
    updateBoard()
  }
})
