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
    
      componentDidMount() {
        this.client.onopen = () => {
          console.log('WebSocket Client Connected!')
        }
      }

    render() {
        return (
            <div className="container">
                {this.state.isLoggedIn ? <div>a</div> : <div>b</div>}
            </div>
        )
    }

}

export default Chatroom
