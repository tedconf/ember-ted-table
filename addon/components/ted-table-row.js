import Ember from 'ember';
import layout from '../templates/components/ted-table-row';

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  classNames: 'b-t:gray-l'
});
