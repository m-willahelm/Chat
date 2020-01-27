import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Chat from './components/ChatItem/Chat';

import './App.css';

function App() {
 
  return (
    <>
      <Chat/>
    </>
  );
}

export default App;
