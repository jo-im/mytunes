// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  },

  playFirst: function() {
    // console.log('entering playFirst method');
    // console.log('this.length is', this.length);
    // console.log('this.at(0) is', this.at(0));
    console.log('this in playfirst', this);
    if (this.length > 0) {
      console.log('entering this if statement and going to play first song');
      this.at(0).play();
    }
  },

  enqueue: function() {
    // console.log('Entering enqueue method');
    console.log('this is', this);
    this.add('song');
    if (this.models.length === 1) {
      this.playFirst();
    }
  },

});