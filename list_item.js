'use strict';

const React = require('./crossplatform_react');
const styleSheet = require('./stylesheet');
const Button = require('./button');
const {Component, Text, View, TextInput} = React;

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View tag="li" style={styles.container}>
        <TextInput style={styles.input} placeholder="New Item" onChangeText={(text) => this.props.onChange(text)} value={this.props.item}/>
        <Button style={styles.removeItem} onPress={() => this.props.onRemove()} label="X"/>
      </View>;
  }
}

const styles = styleSheet({
  container: {
    web: {
      paddingRight: 60
    },
    native: {
      paddingRight: 50
    },
    marginBottom: 20,
    position: 'relative',
    height: 40
  },
  input: {
    web: {
      display: 'block',
      width: '100%',
      border: 'none'
    },
    textAlign: 'left',
    color: '#333333',
    fontSize: 20,
    height: 40,
    fontFamily: 'Helvetica'
  },
  removeItem: {
    native: {
      lineHeight: 30,
      top: -40,
      right: -50
    },
    web: {
      top: 0,
      right: 0,
      lineHeight: '40px',
      textDecoration: 'none'
    },
    fontSize: 15,
    fontFamily: 'Helvetica',
    color: '#fff',
    backgroundColor: '#B22222',
    width: 40,
    height: 40,
    lineHeight: 30,
    textAlign: 'center',
    position: 'absolute'
  }
});

module.exports = ListItem;
