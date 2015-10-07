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

// React, please render Class
var element = React.createElement(ThumbnailList, options);

// React, after you render, place in body tag
React.render(element, document.querySelector('.target'));

var Badge = React.createClass({displayName: "Badge",
	render: function() {

	  return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
	    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
	)
	}
});
var Thumbnail = require('thumbnail');

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
	  var list = this.props.thumbnailData.map(function(thumbnailProps){
	    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
	  });

	  return React.createElement("div", null, 
	    list
	  )
	}
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
	  return React.createElement("div", {className: "col-md-4"}, 
	    React.createElement("div", {className: "thumbnail"}, 
	      React.createElement("img", {src: this.props.imageURL, alt: "..."}), 
	      React.createElement("div", {className: "caption"}, 
	        React.createElement("h3", null, this.props.header), 
	        React.createElement("p", null, this.props.description), 
	        React.createElement("p", null, 
	          React.createElement(Badge, {title: this.props.title, number: this.props.number})
	        )
	      )
	    )
	  )
	}
});