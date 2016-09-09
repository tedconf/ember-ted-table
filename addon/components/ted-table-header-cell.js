import Ember from 'ember';
import layout from '../templates/components/ted-table-th';

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  classNames: 'p-x:.7 p-y:.9'
});
