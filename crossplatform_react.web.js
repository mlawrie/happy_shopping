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

module.exports = Object.assign({}, React, shims);