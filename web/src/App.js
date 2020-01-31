import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
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
     <Route path={'/chat'}>
       <Chat/>
     </Route>
      
   
    </>
  );
}

export default App;
