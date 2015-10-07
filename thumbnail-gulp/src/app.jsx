var options = {
  thumbnailData: [{
    title: "Show Courses",
    number: 12,
    header: 'Learn React',
    description: 'React is fantastic library.',
    imageURL: 'http://formatjs.io/img/react.svg'
  },{
    title: "Show Courses",
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp speeds up your development workflow.',
    imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

console.log('hey');

// React, please render Class
var element = React.createElement(ThumbnailList, options);

// React, after you render, place in body tag
React.render(element, document.querySelector('.target'));