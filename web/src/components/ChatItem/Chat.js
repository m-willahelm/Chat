import React, { useState, useEffect } from 'react';

import './Chat.css';
import api from '../../services/api';

function Chat(){
   // const [papeador, setPapeador] = useState('');
    //const [papeadores, setPapeadores] = useState([]);
   const [papo, setPapo] = useState([]);
    useEffect(()=>{
        async function loadPapo(){
            const response = await api.get('/chat');
           
            setPapo(response.data);
        }
        loadPapo();
    }, [])
    return(
        <>
            <header>
                <h1>Nome do Usuário</h1>
            </header>
            <aside>
                <h2>Papeadores</h2>
                <ul>
                  
                </ul>
            </aside>
            <div className="chat-box">
               
            <main>
                <h2>Botem o papo em dia aqui</h2>
                <ul className="chat">
                {papo.map(papo=>(
                       <li key={papo._id}>
                            <h3>{papo.origem}</h3>
                            <p>{papo.mensagem}</p>
                       </li>
                   ))}
                </ul>
            </main>
            </div>
            <div className="message-box">
               <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>ENVIAR</button>
            </div>
        </>
    );
}
export default Chat;