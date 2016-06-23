// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    // console.log('Entering the play method and this is', this);
    // console.log('what is this', this.trigger('play', this));
    this.trigger('play', this);
    console.log('that', this.trigger('play', this));
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {

  },

  ended: function() {

  }

});
