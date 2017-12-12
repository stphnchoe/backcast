var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',
  
  events: {
    'click' : 'handleClick',
  },
  initialize: function () {
    this.render();
    // console.log(this.model);
  },
  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },
  handleClick: function (event) {
    console.log(event);
    console.log(this);
  },
  template: templateURL('src/templates/videoListEntry.html')

});
