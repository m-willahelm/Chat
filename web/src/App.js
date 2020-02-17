import React, { useEffect } from 'react';
import {
  Route,
} from "react-router-dom";

import Form from './components/FormItem/Form';
import Chat from './components/ChatItem/Chat';

import './App.css';
import socketio from 'socket.io-client';
function App() {
  useEffect( ()=>{
    function setupWebSocket(){
      const socket = socketio('http://localhost:3333');
      socket.connect()
    }
    setupWebSocket();
  })
  return (
    <>
     <Route exact path={'/'}>
      <Form/>
     </Route>
     <Route path={'/chat/:nome?/:email?'} component={Chat}/>
    
      
   
    </>
  );
}

export default App;
