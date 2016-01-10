const React = require('react-native');
const _ = require('lodash');

class BasicShim extends React.Component {
  render() {
    const Tag = this.props.tag ? this.props.tag : 'span';
    return <Tag {... _.omit(this.props, 'tag')}>{this.props.children}</Tag>
  }
}

const shims = {
  Text: BasicShim,
  View: BasicShim
};

if (typeof IS_WEB_APP != 'undefined' && IS_WEB_APP) {
  module.exports = Object.assign({}, React, shims);
} else {
  module.exports = React;
}