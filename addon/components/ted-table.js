import Ember from 'ember';
import layout from '../templates/components/ted-table';

export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNames: 'w:full'
});
