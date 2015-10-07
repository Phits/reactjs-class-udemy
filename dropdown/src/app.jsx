var React = require('react');
var Dropdown = require('./dropdown');

var options = {
 title: 'Choose a desert', // What should button say to open and close dropdown
 items: [  // List of items to show in dropdown
   'Apple Pie',
   'Peach Cobbler',
   'Coconut Cream Pie'
 ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.target'));