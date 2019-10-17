class TicTacToe {
    
    // Init player1 & player2 symbol and turn
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
    
    // Switching next turn
    nextTurn(rowIndex, columnIndex) {
        if (this.turns[rowIndex][columnIndex] === null) {
            this.turns[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.player1.turn = !this.player1.turn; // switching player1 turn
            this.player2.turn = !this.player2.turn; // switching player2 turn
        }
    }

    // Check finishing game
    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
        return false
        };
    }

    // Winner combinations
    getWinner() {
        if ((this.turns[0][0] === this.turns[0][1]) && (this.turns[0][0] === this.turns[0][2]) && (this.turns[0][0] !== null)) {
            this.winMark = this.turns[0][0];
        } else if ((this.turns[0][0] === this.turns[1][0]) && (this.turns[0][0] === this.turns[2][0]) && (this.turns[0][0] !== null)) {
            this.winMark = this.turns[0][0];
        } else if ((this.turns[0][0] === this.turns[1][1]) && (this.turns[0][0] === this.turns[2][2]) && (this.turns[0][0] !== null)) {
            this.winMark = this.turns[0][0];
        } else if ((this.turns[1][1] === this.turns[1][0]) && (this.turns[1][1] === this.turns[1][2]) && (this.turns[1][1] !== null)) {
            this.winMark = this.turns[1][1];
        } else if ((this.turns[1][1] === this.turns[0][1]) && (this.turns[1][1] === this.turns[2][1]) && (this.turns[1][1] !== null)) {
            this.winMark = this.turns[1][1];
        } else if ((this.turns[1][1] === this.turns[0][2]) && (this.turns[1][1]=== this.turns[2][0]) && (this.turns[1][1] !== null)) {
            this.winMark = this.turns[1][1];
        } else if ((this.turns[2][2] === this.turns[2][0]) && (this.turns[2][2] === this.turns[2][1]) && (this.turns[2][2] !== null)) {
            this.winMark = this.turns[2][2];
        } else if ((this.turns[2][2] === this.turns[0][2]) && (this.turns[2][2] === this.turns[1][2]) && (this.turns[2][2] !== null)) {
            this.winMark = this.turns[2][2];
        }

        return this.winMark;
    }

    // Checking for more turns
    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!this.turns[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Checking draw
    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
            return false
        };
    }

    // Field value for this turn
    getFieldValue(rowIndex, colIndex) {
        return this.turns[rowIndex][colIndex];
    }

}

module.exports = TicTacToe;
