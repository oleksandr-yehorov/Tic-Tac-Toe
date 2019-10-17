class TicTacToe {
    
    constructor() {
        this.player1 = {
            symbol: 'x',
            turn: true
        };

        this.player2 = {
            symbol: 'o',
            turn: false
        };
        
        this.turns = [[null, null, null], [null, null, null], [null, null, null]]
        this.winMark = null;
    }

    getCurrentPlayerSymbol() {
        let currentPlayerSymbol;
        if (this.player1.turn) {
            currentPlayerSymbol = this.player1.symbol;
        } else {
            currentPlayerSymbol = this.player2.symbol;
        };
        return currentPlayerSymbol;
    }
    
    nextTurn(rowIndex, columnIndex) {
        if (this.turns[rowIndex][columnIndex] === null) {
            this.turns[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.player1.turn = !this.player1.turn; // switching player1 turn
            this.player2.turn = !this.player2.turn; // switching player2 turn
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
        return false
        };
    }

   
}

module.exports = TicTacToe;
