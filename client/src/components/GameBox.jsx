var React = require('react');
var DisplayBox = require('./DisplayBox');
var PictureBox = require('./PictureBox');
var QuestionForm = require('./QuestionForm');
var GuessForm = require('./GuessForm');
var _ = require('lodash');

var chars = require('../character_info.js')

var GameBox = React.createClass({

  getInitialState: function(){
    return {computerChoice: this.selectCharacter()}
  },

  selectCharacter: function(){
    let computerChoice = chars[_.random(7)]
    console.log(computerChoice);
    console.log(_.values(computerChoice));
  },

  trueOrFalse: function(question){
    var choiceArray = _.values(this.state.computerChoice)
    if((choiceArray.indexOf(question))+1){
      return "Yes";
    } else {
      return "No";
    }
  },

  render: function(){
    return(
      <div>
        <h1>Guess Who</h1>
        <DisplayBox chars={chars}/>
        <QuestionForm submitQuestion={this.trueOrFalse}/>
        <GuessForm chars={chars}/>
      </div>
    );
  }

});

module.exports = GameBox;