'use strict';
const React = require('./crossplatform');

if (typeof IS_WEB_APP != 'undefined' && IS_WEB_APP) {
  module.exports = (styles) => styles;
} else {
  module.exports = (styles) => React.StyleSheet.create(styles);
}