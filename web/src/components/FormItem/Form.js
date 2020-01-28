import React, {useState} from 'react';

import './Form.css'
import '../../services/api';
function Form(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    return(
        <>
            <form action="" autoComplete="off">
            <h1>WELCOME TO PAPEADOR</h1>
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