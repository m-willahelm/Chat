import React, { useState, useEffect } from 'react';

import './Chat.css';
import api from '../../services/api';

function Chat(){
   // const [papeador, setPapeador] = useState('');
    //const [papeadores, setPapeadores] = useState([]);
   const [papo, setPapo] = useState([]);
   const [mensagem, setMensagem] = useState('');
   const origem = "Jorge";
    useEffect(()=>{
        async function loadPapo(){
            const response = await api.get('/chat');
           
            setPapo(response.data);
        }
        loadPapo();
    }, [])
    
    async function sendMessage(){
        const data = {
            "origem":origem,
            "mensagem":mensagem
        }
        if(data.mensagem){
            const response = await api.post('/chat', data);
            setMensagem('');
            console.log(response);
        }
    }
    return(
        <>
            <header>
                <h1>{origem}</h1>
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
            <form action="" className="message-box" onSubmit={sendMessage}>
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