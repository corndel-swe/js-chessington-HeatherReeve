import { strict as assert } from 'assert'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'
import Board from '../../../src/models/board.js'
import Queen from '../../../src/models/pieces/queen.js'
import Pawn from '../../../src/models/pieces/pawn.js'

describe('Queen', () => {
    let board
    beforeEach(() => (board = new Board()))

    it('can move diagonally', () => {
        const queen = new Queen(Player.WHITE)
        board.setPiece(new Square(2, 3), queen)
    
        const moves = queen.getAvailableMoves(board)
    
        const expectedMoves = [
          // Forwards diagonal
          new Square(0, 1),
          new Square(1, 2),
          new Square(3, 4),
          new Square(4, 5),
          new Square(5, 6),
          new Square(6, 7),
          // Backwards diagonal
          new Square(0, 5),
          new Square(1, 4),
          new Square(3, 2),
          new Square(4, 1),
          new Square(5, 0)
        ]
        for (let expectedMove of expectedMoves){
            assert (moves.some(square =>square.equals(expectedMove)))
        }       
       
    
        })


        it('can move laterally', () => {
            const queen = new Queen(Player.WHITE)
            board.setPiece(new Square(1, 2), queen)
        
            const moves = queen.getAvailableMoves(board)
        
            const expectedMoves = [
              // Horizontal
            
              new Square(1, 0),
              new Square(1, 1),
              new Square(1, 3),
              new Square(1, 4),
              new Square(1, 5),
              new Square(1, 6),
              new Square(1, 7),
              // Vertical
              new Square(0, 2),
              new Square(2, 2),
              new Square(3, 2),
              new Square(4, 2),
              new Square(5, 2),
              new Square(6, 2),
              new Square(7, 2)
            ]
        
            for (let expectedMove of expectedMoves){
                assert (moves.some(square =>square.equals(expectedMove)))
            }       
           
      
        })

        it('cannot make any other moves', () => {
    const queen = new Queen(Player.WHITE)
    board.setPiece(new Square(1, 2), queen)

    const moves = queen.getAvailableMoves(board)

    assert.equal(moves.length, 23, '`moves` does not have length 23')
  })

  it('cannot move through friendly pieces', () => {
    const queen = new Queen(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(4, 6), friendlyPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 7))),
      '`moves` contains the square (4, 7)'
    )
      })
})
