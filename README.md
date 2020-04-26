# jstransformer-microtemplate

[microtemplate](https://www.npmjs.com/package/microtemplate) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-microtemplate/master.svg)](https://travis-ci.org/jstransformers/jstransformer-microtemplate)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-microtemplate/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-microtemplate)
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
