var VideoListView = Backbone.View.extend({

  initialize: function () {
    // this.render();
    // this.on('sync', this.render, this);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // console.log(this.collection);
    // debugger;
    this.collection.forEach(this.renderEntry, this);
    return this;
  },
  renderEntry: function (video) {
    var entryView = new VideoListEntryView({model: video});
    this.$el.append(entryView.render());
  },
  template: templateURL('src/templates/videoList.html')

});
