import React, { useEffect, useState } from 'react'
import { w3cwebsocket } from 'websocket'

function Lobby() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const [username, setUsername] = useState('')
    const [roomCode, setRoomCode] = useState('test')
    const [userList, setUserList] = useState([])

    const client = new w3cwebsocket(`ws://127.0.0.1:8000/ws/lobbies/${roomCode}/`);

    useEffect(() => {
        client.onopen = () => {
            console.log('Websocket client connected')
        }

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply!', dataFromServer)
            if (dataFromServer) {
                setMessages((messages) => messages.concat({
                    msg: dataFromServer.message,
                    username: dataFromServer.username,
                }))
                console.log(dataFromServer['userList'])
                if (dataFromServer['userList']) {
                    setUserList(dataFromServer['userList'])
                }
            }

        }
    }, [])

    const joinRoom = (e) => {
        let newList = userList
        newList.push(username)
        setUserList(newList)
        client.send(JSON.stringify({
            type: 'known_users',
            userList: newList
        }))
        e.preventDefault()
    }

    return (
        <div>
            <div>
                What chat room would you like to enter?<br></br>
                <input id="username" type="text" size="20" onChange={e =>
                    setUsername(e.target.value)
                }></input><br></br>
                <input id="room-name-input" type="text" size="20" onChange={e =>
                    setRoomCode(e.target.value)
                }></input><br></br>
                <input id="room-name-submit" type="button" value="Enter" onClick={(e) => {
                    setIsLoggedIn(true)
                    joinRoom(e)
                }}></input>
            </div>
        </div>
    )
}

export default Lobby
