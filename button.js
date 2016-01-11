'use strict';

const React = require('./crossplatform_react');
const _ = require('lodash');
const {Component, Text, TouchableOpacity} = React;

module.exports = class Button extends Component {
  render() {
    return <TouchableOpacity onPress={this.props.onPress}>
        <Text {... _.omit(this.props, ['onPress', 'label'])}>{this.props.label}</Text>
      </TouchableOpacity>;
  }
}