/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {AppRegistry, Component} from 'react-native';
const ShoppingList = require('./shopping_list');

class happy_shopping extends Component {
  render() {
    return (
      <ShoppingList/>
    );
  }
}

AppRegistry.registerComponent('happy_shopping', () => happy_shopping);
