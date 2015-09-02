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
      this.makeMove($(e.target));
    }.bind(this))
  };

  View.prototype.makeMove = function ($square) {
    if (this.game.isOver()) {
      return;
    }

    var posString = $square[0].classList[0];
    var pos = [parseInt(posString[0]), parseInt(posString[2])];
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
        var pos = [i, j]
        $ul.append("<li class='" + pos + "'></li>");
      }
    }
  };
})();
