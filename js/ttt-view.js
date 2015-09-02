(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    this.$el.on('click','li',function (e) {
      this.makeMove($(e.currentTarget));
    }.bind(this))
  };

  View.prototype.makeMove = function ($square) {
    var pos = $square.data('pos');
    var currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
      $square.text(currentPlayer);
    } catch (MoveError) {
      alert("That's an invalid move!")
    }

    this.checkIfOver();
  };

  View.prototype.checkIfOver = function () {
    if (this.game.isOver()){
      this.$el.off('click');
      if (this.game.winner()) {
        alert("Congradulations " + this.game.winner() +" !")
      } else {
        alert("It's a tie!")
      }
    }
  }

  View.prototype.setupBoard = function () {
    var $ul = $("<ul class='ttt-grid group'></ul>");
    this.$el.append($ul);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var $li = $("<li></li>")
        $li.data('pos', [i, j])
        $ul.append($li);
      }
    }
  };
})();
