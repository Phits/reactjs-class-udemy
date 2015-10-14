// We need to show a button and a list.
// This component should know when user clicks on button.

var React = require('react');
var Button = require('./button');
var ItemItem = require('./list-item');

module.exports = React.createClass({
	 handleClick: function() {
      	alert('Hello from dropdown');
    },
	render: function() {
		var list = this.props.items.map(function(item) {
           return <ListItem item={item} />
		});

		return <div className="dropdown">
		  <Button 
			whenClicked={this.handleClick} 
			className="btn-default" 
			title={this.props.title} 
			subTitleClassName="caret"
			/>
			<ul>
			{list}
			</ul>
		</div>
	}
});
