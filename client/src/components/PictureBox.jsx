var React = require('react');
var characterInfo = require('../character_info.js');

var PictureBox = React.createClass({

  render: function(){
    return(
      <div>
        <img src={this.props.photo} height="100" width="80" className="pic"/>
        <h5>{ this.props.name }</h5>
      </div>
    );
  }

});

module.exports = PictureBox;