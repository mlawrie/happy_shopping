'use strict';
global.IS_WEB_APP = true;
const React = require('react');
const ReactDOM = require('react-dom');
const ShoppingList = require('./shopping_list');
ReactDOM.render(<ShoppingList/>, document.getElementById('app'));
