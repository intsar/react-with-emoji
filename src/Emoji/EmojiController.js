import React, { Component } from 'react';

class EmojiControlller extends Component {

    constructor(props){
        super(props);
        }

   
    btnclk = (value) => {
       // console.log(value);
        var btnklkValue = value
        this.props.onClickBtn(btnklkValue);
    }
    render() {
      return (
        <div>
			<button value="Twitter" onClick={()=>this.btnclk('twitter')}>Twitter</button>
            <button value="Facebook" onClick={()=>this.btnclk('facebook')}>Facebook</button>
            <button value="Apple" onClick={()=>this.btnclk('apple')}>Apple</button>
            <button value="Google" onClick={()=>this.btnclk('google')}>Google</button>
            <button value="Messenger" onClick={()=>this.btnclk('messenger')}>Messenger</button>
            <button value="Emojione" onClick={()=>this.btnclk('emojione')}>Emojione</button>
        </div>
      )
    }
  
}

export default EmojiControlller;
   