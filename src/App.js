import React, { Component } from 'react';
import './App.css';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import  EmojiController from './Emoji/EmojiController'; 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    clickedEmoji : [],
    emojiType : 'twitter'
    }
    this.clickedEmoji = this.clickedEmoji.bind(this);
    this.clearState = this.clearState.bind(this);
  }
  

  clearState = () => {
    this.setState({clickedEmoji:[]});
  }

  clickedEmoji = function(emoji, event){
  const  clickedEmoji = emoji.native;
  let arr = this.state.clickedEmoji.slice();
  arr.push(clickedEmoji);
  this.setState({clickedEmoji:arr})
    //console.log(JSON.stringify(emoji))
  }


  btnClkHanlde = (value) => {  
     this.setState({emojiType:value});
  }



  render() {
    let clkemoj = ''; 
    if(this.state.clickedEmoji.length){
     clkemoj = <span><h3>You Clicked This Emoji : {this.state.clickedEmoji}</h3><a onClick={this.clearState}>Clear</a> </span>
    }


    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to React with Mohammad Intsar</h1><hr/>
        </header>
        <EmojiController onClickBtn={this.btnClkHanlde}/>
        {clkemoj}
        
        <h5>{this.state.emojiType}'s emojis</h5>
        <Picker set={this.state.emojiType} 
                autoFocus='true'
                onSelect={this.addEmoji} 
                onClick = {this.clickedEmoji}
                style={{ absolute: 'fixed', bottom: '20px', right: '20px'}}
                i18n={{ search: 'Search', categories: { search: 'Search', recent: 'Recents' } }}
                title='Pick your emoji…' emoji='point_up'
                />
      </div>
    );
  }
}

export default App;
