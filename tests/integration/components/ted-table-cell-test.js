import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ted-table-cell', 'Integration | Component | ted table cell', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`
    {{#ted-table-cell}}
      template block text
    {{/ted-table-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
