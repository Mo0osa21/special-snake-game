let snakeBody = ['square66', 'square65', 'square64']
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
    } else if (sqr === '') {
      square.style.backgroundColor = 'white'
    }
  })
}
snakeBody.forEach((part, index) => {
  board[snakeBody[index].substring(6)] = 'snake'
})
updateBoard()

document.addEventListener('keyup', (event) => {
  let pastLocation = ''
  if (event.key === 'ArrowDown') {
    snakeBody.forEach((part, index) => {
      pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) + 12}`
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
  } else if (event.key === 'ArrowUp') {
    snakeBody.forEach((part, index) => {
      pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) - 12}`
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
  } else if (event.key === 'ArrowRight') {
    snakeBody.forEach((part, index) => {
      pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) + 1}`
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
  } else if (event.key === 'ArrowLeft') {
    snakeBody.forEach((part, index) => {
      let pastLocation = ''
      if (index === 0) {
        pastLocation = part
        board[snakeBody[index].substring(6)] = ''
        snakeBody[index] = `square${Number(part.substring(6)) - 1}`
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
