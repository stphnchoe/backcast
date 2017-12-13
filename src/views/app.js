var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({el: $('.search')}).render();
    new VideoListView({collection: this.videos, el: '.list'}).render();
    new VideoPlayerView({model: this.videos.at(0), el: $('.player'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
