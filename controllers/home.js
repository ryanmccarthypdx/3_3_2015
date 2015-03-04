Twizzler.HomeController = Ember.ArrayController.extend({
  itemController: 'twizzle',
  sortAscending: false,
  sortProperties: ["datestamp"],

  actions: {
    newTwizzle: function() {
      twizzles.addObject({
        id: (twizzles.length + 1),
        twizzard: this.twizzard,
        twizzle: this.twizzle,
        datestamp: Date.now()
      });
    }
  }
});
