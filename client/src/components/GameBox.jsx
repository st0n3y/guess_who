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
  },

  trueOrFalse: function(question){
    if(question === this.state.computerChoice.species){
      return true;
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