import React, { useEffect, Component } from 'react'
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
        this.client.send(JSON.stringify({
          type: "message",
          message: this.state.value,
          name: this.state.name
        }));
        this.setState.value = ''
        e.preventDefault();
      }
    
      componentDidMount() {
        this.client.onopen = () => {
          console.log('WebSocket Client Connected!')
        };
        this.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply! ', dataFromServer.type);
            if (dataFromServer) {
              this.setState((state) =>
                ({
                  messages: [...state.messages,
                  {
                    msg: dataFromServer.message,
                    name: dataFromServer.name,
                  }]
                })
              );
            }
          };
      }

    render() {
        return (
            <div className="container">
                {this.state.isLoggedIn ? <div style={{ marginTop: 50}}>
                Room Name: {this.state.room}

                <div className="chat-window" style={{ height: 500, maxHeight: 500, overflow: 'auto'}}>
                {this.state.messages.map(message => <>
                    <div className="card">
                        <div className="card-header"
                        title={message.name}
                        subheader={message.msg}>
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
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit"
                    >Let's Chat!
                    </button>
                </form>
                </div> 
                : 
                <div className="chatroom">
                <h1>Ready Jet Go Chat!</h1>

                <form className="form" noValidate onSubmit={value => this.setState({ isLoggedIn: true })}>
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
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit"
                    >
                    Let's Chat!
                    </button>
                </form>
                </div>}
            </div>
        )
    }

}

export default Chatroom
