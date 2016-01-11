'use strict';

const React = require('./crossplatform_react');
const styleSheet = require('./stylesheet');
const Button = require('./button');
const {Component, Text, View} = React;
const ListItem = require('./list_item');
const _ = require('lodash');

let lastId = 0;

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  
  addItem() {
    lastId += 1;
    this.setState({items: this.state.items.concat([{name: '', id: lastId}])});
  }

  removeItem(item) {
    this.setState({items: _.without(this.state.items, item)}); 
  }

  changeItem(item, name) {
    let newItems = this.state.items.concat([]);
    newItems[newItems.indexOf(item)] = Object.assign({}, item, {name: name});
    this.setState({items: newItems});
  }

  render() {
    const renderedItems = this.state.items.map((item, index) =>
      <ListItem key={index} item={item.name}
        onChange={(name) => this.changeItem(item, name)}
        onRemove={() => this.removeItem(item)}/>
      );

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
    web: {
      maxWidth: '600',
      margin: '0 auto'
    },
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
      textDecoration: 'none',
      display: 'block'
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
