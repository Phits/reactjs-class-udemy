// We need to show a button and a list.
// This component should know when user clicks on button.

var React = require('react');
var Button = require('./button');
// var List = require('./list');

module.exports = React.createClass({
	render: function() {

		return <div className="dropdown">
		<Button className="btn-default" title={this.props.title} subTitleClassName="caret"/>
		</div>
	}
});