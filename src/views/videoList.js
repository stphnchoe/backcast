var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function () {
    this.render();
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.collection);
    this.$el.find('.video-list').empty();
    this.collection.forEach(function (video) {
      var entry = new VideoListEntryView({model: video});
      // this.$el.append(entry.render());
    });
    debugger;
    return this;
  },
  template: templateURL('src/templates/videoList.html')

});
