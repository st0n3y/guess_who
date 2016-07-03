var React = require('react');


var GuessForm = React.createClass({

  render: function(){
    var guessOptions = this.props.chars.map(function(char){ 
      return <option key={char.name}>{char.name}</option>
    });
    return(
      <div>
        <h4>Make a guess:</h4>
        <select>
          {guessOptions}
        </select>
      </div>
    );
  }

});

module.exports = GuessForm;