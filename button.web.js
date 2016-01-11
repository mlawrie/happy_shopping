'use strict';

const React = require('./crossplatform_react');
const _ = require('lodash');
const {Component, Text} = React;

module.exports = class Button extends Component {
  render() {
    return <a href="#" {... _.omit(this.props, ['onPress', 'label'])} onClick={this.props.onPress}>
        {this.props.label}
      </a>;
  }
}