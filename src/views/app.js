var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView().render();
    new VideoListView({collection: this.videos, el: '.list'}).render();
    new VideoPlayerView(new Video(window.exampleVideoData[0])).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
