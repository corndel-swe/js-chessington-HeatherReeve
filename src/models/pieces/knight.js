import Square from '../square.js'
import Piece from './piece.js'

export default class Knight {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {

    let location =board.findPiece(this)
    let moves = []
    
    
    
    
    
    
    
    
    
    
    
    return []
    //copy king one 
    //knights move in an L shape 
    //one in one direction 
    //two in the other 
    //8 moves
    //BE METHODICAL AND CAREFUL
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
