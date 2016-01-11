'use strict';

import React, {AppRegistry, Component, ScrollView} from 'react-native';
const ShoppingList = require('./shopping_list');

class happy_shopping extends Component {
  render() {
    return (
      <ScrollView>
        <ShoppingList/>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('happy_shopping', () => happy_shopping);
