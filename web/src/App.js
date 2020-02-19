import React, { useEffect } from 'react';
import {
  Route,
} from "react-router-dom";

import Form from './components/FormItem/Form';
import Chat from './components/ChatItem/Chat';

import './App.css';

function App() {
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
