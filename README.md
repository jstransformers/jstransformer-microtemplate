<<<<<<< HEAD
# jstransformer-microtemplate
microtemplate support for JSTransformers
=======
# JSTransformer Boilerplate

Use JSTransformer Boilerplate to create and update transformers.

1. Visit [the Boilerplate Wiki](https://github.com/jstransformers/boilerplate/wiki) on how to get started
2. Remove this top notice from any transformers

# jstransformer-microtemplate

[microtemplate](https://www.npmjs.com/package/microtemplate) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-microtemplate/master.svg)](https://travis-ci.org/jstransformers/jstransformer-microtemplate)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-microtemplate/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-microtemplate?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-microtemplate/master.svg)](http://david-dm.org/jstransformers/jstransformer-microtemplate)
[![NPM version](https://img.shields.io/npm/v/jstransformer-microtemplate.svg)](https://www.npmjs.org/package/jstransformer-microtemplate)

## Installation

    npm install jstransformer-microtemplate

## API

```js
var microtemplate = require('jstransformer')(require('jstransformer-microtemplate'))

microtemplate.render('Hello, <#=name#>', {name: 'World'}).body
//=> 'Hello, World'
```

## License

MIT
>>>>>>> baf7091c768ba97174848a3c3f1393ec3cf9cba2
