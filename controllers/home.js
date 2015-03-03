Twizzler.HomeController = Ember.ArrayController.extend({
  sortProperties: ["date"],
  actions: {
    sortByDate: function() {
      this.set("sortProperties", ["date"]);
    }
  }
});
