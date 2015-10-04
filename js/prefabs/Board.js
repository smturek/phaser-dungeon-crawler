var DunCrawl = DunCrawl || {};

DunCrawl.Board = function(state, data) {

    this.state = state;
    this.game = state.game;
    this.rows = data.rows;
    this.cols = data.cols;
    this.numCells = this.rows * this.cols;
    this.tileSize = data.tileSize;

    var i, j, tile;

    for(i = 0; i < this.rows; i++) {
        for(j = 0; j < this.cols; j++) {
            tile = new Phaser.Sprite(this.game, j * this.tileSize, i * this.tileSize, 'rockTile');
            tile.row = i;
            tile.col = j;

            this.state.backgroundTiles.add(tile);
        }
    }
};
