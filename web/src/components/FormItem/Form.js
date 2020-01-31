import React, {useState} from 'react';


import './Form.css'
import '../../services/api';

import api from '../../services/api';

import Chat from '../ChatItem/Chat';
function Form(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(){
        const payload = {
            "nome":nome,
            "email":email
        }
        const data = await api.post('/papeador', payload);
    }
    return(
        <>
         
            <form 
                className='login-form'
                action={'/chat'}
                onSubmit={handleSubmit} 
                autoComplete="off"
            >
            <h1>WELCOME TO PAPEADOR</h1>
            <hr/>
            <div className="input-group">
            <div className="input-box">
                <label htmlFor="nome">Nome:</label>
                <input 
                    value={nome}
                    type="text" 
                    name="nome" 
                    id="nome"
                    onChange={e=>setNome(e.target.value)}
                />
            </div>
            <div className="input-box">
                <label htmlFor="email">Email</label>
                <input 
                    value={email}
                    type="text" 
                    name="email" 
                    id="email"
                    onChange={e=>setEmail(e.target.value)}
                />
            </div>
            
            </div>
            <input type="submit" value="SALVAR"/>
        </form>
        </>
    );
}
export default Form;