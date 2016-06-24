// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    console.log('player view this', this);
    console.log('player view this.model', this.model);
    this.$el.on('ended', function() {
      this.model.ended();
    }.bind(this));
    // this.$el.on('end', function() {
    //   this.model.ended();
    // });
    // this.render();
  },

  setSong: function(song) {
    this.model = song;
    // this.$el.on('ended', function() {
    //   // console.log('ended');
    // });
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
