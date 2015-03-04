Twizzler.DetailsRoute = Ember.Route.extend({
  model: function(params) {
    return twizzles.findBy('id', params.twizzle_id);
  }
})
