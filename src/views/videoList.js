var VideoListView = Backbone.View.extend({

  initialize: function () {

  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.$el.find('.video-list').empty();
    this.$('.video-list').append(
      this.collection.map(function (video) {
        return new VideoListEntryView({model: video}).render().el;
      })
    );
    return this;
  },
  template: templateURL('src/templates/videoList.html')

});
