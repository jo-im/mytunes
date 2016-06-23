// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', this.delete, this);

    this.on('dequeue', this.delete, this);

  },

  playFirst: function() {
    this.first().play();
  },

  delete: function() {
    this.shift();

    if (this.length > 0) {
      this.playFirst();
    }
  }

});