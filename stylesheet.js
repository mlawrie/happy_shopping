'use strict';
const React = require('./crossplatform_react');
const _ = require('lodash');

module.exports = (styles) => {
  let processedStyles = {};
  Object.keys(styles).forEach((key) => {
    const ruleset = styles[key];
    processedStyles[key] = Object.assign(_.omit(ruleset, ['web', 'native']), ruleset.native);
  });
  
  return React.StyleSheet.create(processedStyles);
};

