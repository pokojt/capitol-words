import Ember from 'ember';

export default Ember.Component.extend({
  party: null,
  parties: Ember.String.w('"" D R I'),
  actions: {
    selectParty(party) {
      this.set('party', party);
    },
    wordLookup() {
      var params = {
        phrase: this.get('phrase'),
        party: this.get('target.value')
      };
      this.sendAction('wordLookup', params);
    }
  }
});
