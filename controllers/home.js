Twizzler.HomeController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ["datestamp"],
  actions: {
    checkChars: function() {

    },
    newTwizzle: function() {
      if (this.twizzle.split("").length > 141) {
        alert("Nobody wants to read that much.")
      } else {
        twizzles.addObject({
          id: (twizzles.length + 1),
          twizzard: this.twizzard,
          twizzle: this.twizzle,
          datestamp: Date.now()
        });
      }

    }
    // sortByDate: function() {
    //   this.set("sortProperties", ["datestamp"]);
    // }
  }
});
