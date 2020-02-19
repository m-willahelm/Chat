import React, { useState, useEffect } from 'react';

import './Chat.css';
import api from '../../services/api';

import socketio from 'socket.io-client';
function Chat(props){
    const queryString = require('query-string');
    const [users, setUsers] = useState([]);
    const [papo, setPapo] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [usuario, setUsuario] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const socket = socketio('http://localhost:3333');

    useEffect(()=>{
        const params = props.location.search;
        const  {nome, email} = queryString.parse(params);
        setUsuario(nome);
        setUserEmail(email);

        async function loadUsers(){
            const response = await api.get('/papeador');
            setUsers(response.data);
            console.log(users);
        }

        async function loadPapo(){
            const response = await api.get('/chat');
            setPapo(response.data);
        }
     
        //loadPapo();
        loadUsers();
        socket.connect();
    }, [])

    socket.on('broadcast', message=>{
        console.log(message);
        const {origem, mensagem} = message
        const data = {origem, mensagem};
        setPapo([...papo, data]);
    });

     async function sendMessage(e){
        e.preventDefault();
        const data = {
            "origem":usuario,
            "mensagem":mensagem,
        }
        if(data.mensagem){
            //const response = await api.post('/chat', data);
            setMensagem('');
            socket.emit('sendMessage', data)
        }
    }
    return(
        <>
            <header>
                <h1>{usuario}</h1>
            </header>
            <aside>
                <h2>Papeadores</h2>
                <ul>
                {users.map(users=>(
                       <li key={users._id}>
                            <h3>{users.nome}</h3>
                            <p>{users.email}</p>
                       </li>
                   ))}
                </ul>
            </aside>
            <main> 
                {papo.map(papo=>(
                       <div className="message-list" key={papo._id}>
                            <h3>{papo.origem}</h3>
                            <p>{papo.mensagem}</p>
                       </div>
                   ))}
            </main>
            <form className="message-box" onSubmit={sendMessage}>
               <textarea 
                onChange={e=>setMensagem(e.target.value)}
                value={mensagem}
                name="mensagem" 
                id="mensagem" 
                cols="30" 
                rows="10"/>
                <button type="submit">ENVIAR</button>
            </form>
        </>
    );
}
export default Chat;