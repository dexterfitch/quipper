Quipper.QuipController = Ember.ObjectController.extend({
  isExpanded: false,
  actions: {
    expandToggle: function() {
      this.set('isExpanded', !this.get('isExpanded'));
    }
    // addReply: function(quip) {
    //   quip.replies.addObject(quip.reply);
    //   this.set('reply', null);
    // }
  }
});
