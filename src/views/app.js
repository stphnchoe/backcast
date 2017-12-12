var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(exampleVideoData);
    this.search = new SearchView();
    this.videoPlayer = new VideoPlayerView();
    this.videoList = new VideoListView({collection: this.videos});
    

  },


  render: function() {
    // new VideoPlayerView({}).render();
    // new VideoListView({el: this.$('#app'), collection: this.videos}).render();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
