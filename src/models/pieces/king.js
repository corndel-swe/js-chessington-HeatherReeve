export default class King {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        return [];
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}