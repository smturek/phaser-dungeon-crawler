var DunCrawl = DunCrawl || {};

DunCrawl.Enemy = function(state, data) {
    var position = {
        x: 10,
        y:10
    };

    Phaser.Sprite.call(this, state.game, position.x, position.y, data.asset);

    this.game = state.game;
    this.state = state;
    this.board = state.board;
    this.row = data.row;
    this.col = data.col;
    this.data = data;

    this.achor.setTo(0.5);
};

DunCrawl.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
DunCrawl.Enemy.prototype.constructor = DunCrawl.Enemy;
