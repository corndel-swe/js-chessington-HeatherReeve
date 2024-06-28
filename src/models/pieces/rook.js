import Square from '../square.js'
import Piece from './piece.js'

export default class Rook {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    return []
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)

    //copy bishop 
    //rook only moves in one direct, 4 for loops. up down left and right 
    //one direction at a time  location.row -i, location.col [LEAVE BLANK]
  }
}
