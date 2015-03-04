Quipper.QuipsController = Ember.ArrayController.extend({
  itemController: 'quip',
  sortProperties: ['date:desc'],
  sortedQuips: Ember.computed.sort('model', 'sortProperties'),
  isPosting: false,
  actions: {
    post: function() {
      this.set('isPosting', true);
    },
    save: function() {
      this.set('isPosting', false);
      var id = (quips.length + 1).toString();
      quips.addObject({ id: id,
                        body: this.body,
                        date: new Date,
                        replies: [],
                        hashtag: this.hashtag
      });
      this.set('body', null);
    }
  }
})
