var React = require('react');
var ListItem = React.creatClass({
  render: function(){
    return(
    <li>
      <h4>{this.props.ingredient}</h4>
  </li>
);
  }
});

module.exports = ListItem;
