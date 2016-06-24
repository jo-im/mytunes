// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    this.fetch();  
  },

  parse: function(response) {
    // console.log('going to push to songData');
    // console.log('songData', songData);
    return response.results;
  }

  // sync: function(method, model, options) {
  //   var that = this;
  //   var params = _.extend({
  //     type: 'GET',
  //     dataType: 'json',
  //     url: that.url,
  //     contentType: 'application/json',
  //     processData: false
  //   }, options);

  //   console.log('params', params);
  //   return $.ajax(params);
  // }

});
