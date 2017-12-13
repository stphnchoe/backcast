var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function () {

  },
  
  render: function() {
    // console.log(this);
    this.$el.html(this.template(this.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
