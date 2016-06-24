// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // console.log('dequeued');
    this.trigger('dequeue', this);
  },

  ended: function() {
    // console.log('i am triggered');
    this.trigger('ended', this);
  }

});
