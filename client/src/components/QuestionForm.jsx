var React = require('react');


var QuestionForm = React.createClass({

  handleSelect: function(e){
    e.preventDefault();
    let question = e.target.options[e.target.selectedIndex].value;
    this.props.submitQuestion(question);
  },

  render: function(){
    return(
      <div>
        <h4>Ask a question:</h4>
        <select onChange={this.submitQuestion}>
          <option value="Human">Human?</option>
          <option value="Rebel">Rebel?</option>
        </select>
        
      </div>
    );
  }

});

module.exports = QuestionForm;