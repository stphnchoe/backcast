var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(lookup) {
    $.ajax({
      url: 'youtube.googleapis.com', 
      type: 'GET',
      data: {maxResults: 5,
        query: lookup,
        key: 'AIzaSyAhr96buJiFk4KrGgg8uK10gV-Cry70H14'
      },
      success: function() {
        console.log('success');
      },
      error: function (error) {
        console.log('error' + error);
      },
    });
  }

});
