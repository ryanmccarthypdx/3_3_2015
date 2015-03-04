Twizzler.TwizzleController = Ember.ObjectController.extend({
  currentDisplay: false,
  actions: {
    toggleDisplay: function() {
      if (this.currentDisplay === false) {
        this.set('currentDisplay', true);
      } else {
        this.set('currentDisplay', false);
      }
    },
    replyToTwizzle: function(reply) {
      var tempArray = this.get('replies');
      tempArray.push(this.get('reply'));
      this.set('replies', tempArray);
debugger;
    }
  }
});
