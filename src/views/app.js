var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(exampleVideoData);
    this.search = new SearchView();
    this.videoList = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView(new Video(exampleVideoData[0]));
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
