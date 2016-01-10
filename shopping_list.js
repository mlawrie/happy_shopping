'use strict';

const React = require('./crossplatform');
const styleSheet = require('./stylesheet');
const {Component, Text} = React;

module.exports = React.createClass({
  render: () => {
    return <Text tag="h1" style={styles.heading}>Some heading!</Text>
  }
});

const styles = styleSheet({
  heading: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30
  },
});