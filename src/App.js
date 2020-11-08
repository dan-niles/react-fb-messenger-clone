import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FlipMove from 'react-flip-move';

import Message from './Message';
import './App.css';

import firebase from 'firebase'
import db from './firebase';

function App() {
  const [input, setInput] = useState("") 
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {  
    setUsername(prompt('Please enter your name'))
  }, [])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')  
  }

  return (
    <div className="App">
      <img className="app__logo" src="https://i.pinimg.com/originals/98/4d/b3/984db3f9cabcf67479806c19882adc7e.png"/>
      <h1>FB Messenger Clone</h1>
      <h4 style={{display: username ? 'block': 'none'}}>Hey { username }!</h4>
      <form className="app__form" onSubmit={sendMessage}>
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            type="text"
            name="input"
            value={input}
            onChange={event => setInput(event.target.value)}
            autoComplete="off"
            placeholder="Type a message..."
          />
          <IconButton
            className="app__iconButton"
            type="submit"
            variant="contained"
            color="primary"
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
