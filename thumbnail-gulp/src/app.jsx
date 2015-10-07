var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: "Show Courses",
    number: 120,
    header: 'Learn React',
    description: 'React is fantastic library.',
    imageURL: 'http://formatjs.io/img/react.svg'
  },{
    title: "Show Courses",
    number: 215,
    header: 'Learn Gulp',
    description: 'Gulp speeds up your development workflow.',
    imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));