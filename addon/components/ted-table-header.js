import Ember from 'ember';
import layout from '../templates/components/ted-table-header';

export default Ember.Component.extend({
  layout,
  tagName: 'thead',
  classNames: 't-a:l f-w:b bg:gray-ll f:1 v-a:b b-t:gray-l b-t-w:2'
});
