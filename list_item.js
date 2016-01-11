'use strict';

const React = require('./crossplatform_react');
const styleSheet = require('./stylesheet');
const Button = require('./button');
const {Component, Text, View} = React;

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View tag="li" style={styles.container}>
        <Text tag="h4" style={styles.heading}>{this.props.item}</Text>
        <Button style={styles.removeItem} onPress={() => this.props.remove()} label="X"/>
      </View>;
  }
}

const styles = styleSheet({
  container: {
    marginBottom: 20,
    position: 'relative',
    height: 40
  },
  heading: {
    textAlign: 'left',
    color: '#333333',
    fontSize: 20,
    fontFamily: 'Helvetica',
    paddingRight: 50
  },
  removeItem: {
    native: {
      lineHeight: 30,
      top: -40
    },
    web: {
      top: 0,
      lineHeight: '40px'
    },
    fontSize: 15,
    fontFamily: 'Helvetica',
    color: '#fff',
    backgroundColor: '#B22222',
    width: 40,
    height: 40,
    lineHeight: 30,
    textAlign: 'center',
    position: 'absolute',
    top: -40,
    right: 0
  }
});

module.exports = ListItem;
