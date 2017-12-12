var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function () {
    // console.log(this);
    this.render();
    // console.log(this.collection.models[0].render);
    // event listener
  },
  
  render: function() {
    this.$el.html(this.template(this.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
