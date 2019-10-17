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

    
}

module.exports = TicTacToe;
