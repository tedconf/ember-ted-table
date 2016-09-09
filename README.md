# Ember-ted-table

## Installation

```
ember install ember-ted-table
```

This addon depends on `ember-ted-shed` and `ember-cli-sass` for styling:

```
ember install ember-ted-shed
ember install ember-cli-sass
```

```
// app.scss
@import 'ember-ted-shed/colors;
@import 'ember-ted-shed/borders;
```

## Usage

Use ted-table components for rendering table markup to automatically include TED style classes.

```hbs
{{#ted-table}}
  {{#ted-table-header}}
    {{#ted-table-row}}
      {{#ted-table-header-cell}}Talk{{/ted-table-header-cell}}
      {{#ted-table-header-cell}}Speaker name{{/ted-table-header-cell}}
    {{/ted-table-row}}
  {{/ted-table-header}}
  {{#ted-table-body}}
    {{#each talks as |talk|}}
      {{#ted-table-row}}
        {{#ted-table-cell}}{{talk.title}}{{/ted-table-cell}}
        {{#ted-table-cell}}{{talk.speakerName}}{{/ted-table-cell}}
      {{/ted-table-row}}
    {{/each}}
  {{/ted-table-body}}
{{/ted-table}}
```

If you need to customize, you can add your own [shed.css](http://tedconf.github.io/shed-css/) class names:

```hbs
{{#ted-table-header classNames="bg:gray"}}
```


## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

##3 Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
