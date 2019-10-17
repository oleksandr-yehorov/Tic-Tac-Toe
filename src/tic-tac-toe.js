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

    

}

module.exports = TicTacToe;
