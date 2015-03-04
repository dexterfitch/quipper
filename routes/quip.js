Quipper.QuipRoute = Ember.Route.extend({
  model: function(params) {
    return quips.findBy('id', params.id);
  }
});
