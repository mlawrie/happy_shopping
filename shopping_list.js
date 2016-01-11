'use strict';

const React = require('./crossplatform_react');
const styleSheet = require('./stylesheet');
const Button = require('./button');
const {Component, Text, View} = React;
const ListItem = require('./list_item');

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  addItem() {
    this.setState({items: this.state.items.concat(['New Item'])});
  }

  render() {
    const renderedItems = this.state.items.map((item, index) => <ListItem key={index} item={item} remove={() => {}}/>);

    return <View tag="div" style={styles.container}>
        <Text tag="h1" style={styles.heading}>Shopping List</Text>
        <View tag="ul">
          {renderedItems}
        </View>
        <Button style={styles.addItem} onPress={() => this.addItem()} label="Add an Item"/>
      </View>;
  }
}

const styles = styleSheet({
  container: {
    padding: 10,
    paddingTop: 40
  },
  heading: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontFamily: 'Helvetica',
    marginBottom: 20
  },
  addItem: {
    web: {
      textDecoration: 'none'
    },
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: '#fff',
    backgroundColor: '#1E90FF',
    padding: 10,
    width: 150,
    textAlign: 'center',
    marginBottom: 20
  }
});

module.exports = ShoppingList;
