// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    // console.log('what is this', this);
    this.on('ended', this.deleted, this);

    this.on('dequeue', this.remove, this);

  },

  playFirst: function() {
    this.first().play();
  },

  deleted: function() {
    this.remove(this.first());

    if (this.length > 0) {
      this.playFirst();
    }
  }

});