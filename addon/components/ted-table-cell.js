import Ember from 'ember';
import layout from '../templates/components/ted-table-td';

export default Ember.Component.extend({
  layout,
  tagName: 'td',
  classNames: 'p-x:.7 p-y:2'
});
