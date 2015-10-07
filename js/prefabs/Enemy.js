var DunCrawl = DunCrawl || {};

DunCrawl.Enemy = function(state, data) {
    var position = state.board.getXYFromRowCol(data);

    Phaser.Sprite.call(this, state.game, position.x, position.y, data.asset);

    this.game = state.game;
    this.state = state;
    this.board = state.board;
    this.row = data.row;
    this.col = data.col;
    this.data = data;
    this.data.type = 'enemy';

    this.anchor.setTo(0.5);
};

DunCrawl.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
DunCrawl.Enemy.prototype.constructor = DunCrawl.Enemy;
