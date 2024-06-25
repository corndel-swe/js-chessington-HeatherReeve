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
   
    //add first go it can move two ways 
    //second row = paw has not moved yet 
    //so rule if pawn is on 2nd row therefore it can move 2 
    //if location.row ===1 it can move 2 
    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
