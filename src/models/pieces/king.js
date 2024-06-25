import Square from '../square.js'
import Piece from './piece.js'

export default class King {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this)
    let moves = []
    if(location.row +1 <= 7 && location.col +1 <=7){
      moves.push(new Square(location.row +1, location.col +1))
      //repeat clockwise, so some rows will just be empty if its the same row 
      //draw a grid to get this 
      //should be 7 new rows 
      //if - >=0 
      //delete if not needed
    }
    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
