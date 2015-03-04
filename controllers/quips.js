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
      quips.addObject({ id: (quips.length + 1).toString(),
                        body: this.body,
                        date: new Date(),
                        replies: []
      });
      // this.set('body', null);
    }
  }
})

// Quipper.QuipsController = Ember.ArrayController.extend({
//   sortProperties: ['date'],
//   sortAscending: false,
//   isPosting: false,
//   isShowingDetails: false,
//   actions: {
//     post: function() {
//       this.set('isPosting', true)
//     },
//     save: function() {
//       this.set('isPosting', false),
//       quips.addObject({ id: (quips.length + 1).toString(),
//                         body: this.body,
//                         date: Date.now().toString(),
//                         dateShow: (new Date()).toString()
//       })
//     },
//     showDetails: function() {
//       this.set('isShowingDetails', true)
//     },
//     hideDetails: function() {
//       this.set('isShowingDetails', false)
//     }
//   }
// })
