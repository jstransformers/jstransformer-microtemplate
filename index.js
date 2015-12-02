'use strict';

var microtemplate = require('microtemplate');

exports.name = 'microtemplate';
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  return microtemplate.compile(str, options);
};
