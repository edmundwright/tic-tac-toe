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
  };

  View.prototype.makeMove = function ($square) {
  };

  View.prototype.setupBoard = function () {
    var $ul = $("<ul class='ttt-grid group'></ul>");
    this.$el.append($ul);

    for (var i = 0; i < 9; i++) {
      $ul.append("<li></li>");
    }
  };
})();
