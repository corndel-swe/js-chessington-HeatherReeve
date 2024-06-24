import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
      // white pawns can move "up" by one
      moves.push(new Square(location.row + 1, location.col))
    } else {
      // black pawns can move "down" by one
      moves.push(new Square(location.row - 1, location.col))
    }
    //if at top cannot move 
    //can more one OR two squares in first move
    //cannot move if there is a piece in front 
    //cannot move two scares if there is a piece two squares in front 
    //can move diagonally if there is a piece there 
    //cannot move diagonally if there is not a piece there 
    //cannot friendly fire
    //cannot take opposite king

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
