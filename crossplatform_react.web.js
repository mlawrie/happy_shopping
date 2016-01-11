const React = require('react-native');
const _ = require('lodash');

class BasicShim extends React.Component {
  render() {
    const Tag = this.props.tag ? this.props.tag : 'span';
    return <Tag {... _.omit(this.props, 'tag')}>{this.props.children}</Tag>
  }
}

class TextInputShim extends React.Component {
  render() {
    const onChange = (event) => {
      this.props.onChangeText(event.target.value);
    };
    return <input type="text" {... _.omit(this.props, 'onChangeText')} onChange={onChange}/>
  }
}

const shims = {
  TextInput: TextInputShim,
  Text: BasicShim,
  View: BasicShim
};

module.exports = Object.assign({}, React, shims);