var VideoPlayerView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('select', this.selectVideo, this);
  },
  
  selectVideo: function (video) {
    this.model = video;
    this.render();
  },
  render: function() {
    // console.log(this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
