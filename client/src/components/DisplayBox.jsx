var React = require('react');
var PictureBox = require('./PictureBox');


var DisplayBox = React.createClass({

  render: function(){
    var charNodes = this.props.chars.map(function(char) {
      return (
        <PictureBox key={char.name} name={char.name} photo={char.photo}/>
      );
    }.bind(this));

    return(
      <div>
        <div id="display-box">
          {charNodes}
        </div>
      </div>
    );
  }

});

module.exports = DisplayBox;