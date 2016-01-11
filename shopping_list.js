'use strict';

const React = require('./crossplatform_react');
const styleSheet = require('./stylesheet');
const {Component, Text, View} = React;

module.exports = React.createClass({
  render: () => {
    return <View tag="div" style={styles.container}>
      <Text tag="h1" style={styles.heading}>Shopping List</Text>
      </View>;
  }
});

const styles = styleSheet({
  container: {
    padding: 10,
    paddingTop: 30
  },
  heading: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontFamily: 'Helvetica'
  },
});