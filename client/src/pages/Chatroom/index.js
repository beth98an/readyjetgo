import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './chat.css';


class Chatroom extends Component {
  

    state = {
        isLoggedIn: false,
        messages: [],
        value: '',
        name: '',
        room: 'readyjetgo',
      }
    
      client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat/' + this.state.room + '/');

      onButtonClicked = (e) => {
        e.preventDefault();
        this.client.send(JSON.stringify({
          type: "message",
          name: this.state.name,
          message: this.state.value,
          
        }));
        this.setState.value = ''
      }
      
      
    
      componentDidMount() {
        this.client.onopen = () => {
          console.log('WebSocket Client Connected!')
        };
        this.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log(dataFromServer)
            console.log('got reply! ', dataFromServer.type);
            if (dataFromServer) {
              this.setState((state) =>
                ({
                  messages: [...state.messages,
                  {
                    name: dataFromServer.name,
                    msg: dataFromServer.message,
                  }]
                })
              );
            }
          };
      }

    render() {
        return (
          
            <div className="container" role="chat">
                {this.state.isLoggedIn ? <div style={{ marginTop: 50}}>
                Room Name: {this.state.room}

                <div className="chat-window"> 
                {this.state.messages.map(message => <>
                    <div className="card">
                        <div className="card-header">
                        <p>{message.name}</p>
                        <p>{message.msg}</p>
                        </div>
                    </div>
                </>)}
                </div>

                <form className="form" noValidate onSubmit={this.onButtonClicked}>
                    <textarea 
                    id="outlined-helperText"
                    label="Make a comment"
                    variant="outlined"
                    value={this.state.value}
                    onChange={e => {
                        this.setState({ value: e.target.value });
                        this.value = this.state.value;
                    }}
                    />
                    <button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.onButtonClicked}
                    >Send Message!
                    </button>
                </form>
                </div> 
                
                :
                 
                <div className="chatroom" role='chatroom'>
                <h1 id="readyChatTitle" role="head">Ready Jet Go, Chat!</h1>

                <form role='startRoom' className="form" noValidate onSubmit={value => this.setState({ isLoggedIn: true })}>
                  <h3 id="joinRoomTag">Enter Roomname:</h3>
                    <textarea 
                    variant="outlined"
                    margin="normal"
                    required
                    id="email"
                    label="Chatroom Name"
                    name="Chatroom Name"
                    autoFocus
                    value={this.state.room}
                    onChange={e => {
                        this.setState({ room: e.target.value });
                        this.value = this.state.room;
                        // Makes the input form change 
                  }}
                    />
                    <h3 id="chatTag">Type your first message:</h3>
                    <textarea
                    variant="outlined"
                    margin="normal"
                    required
                    name="username"
                    label="username"
                    type="username"
                    id="Name"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value });
                        this.value = this.state.name;
                    }}
                    
                    />
                    <button
                    id='letsChatButton'
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit"
                    >
                    Let's chat!
                    </button>
                </form>
                </div>}
          
            </div>
        )
    }

}

export default Chatroom
