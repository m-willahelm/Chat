import React from 'react';

import './Chat.css';

function Chat(){
    return(
        <>
            <header>
                <h1>Guilherme Machado</h1>
            </header>
            <aside>
                <ul>
                    <li>
                        <h3>Guilherme Machado</h3>
                    </li>
                    <li>
                        <h3>Guilherme Machado</h3>
                    </li>
                    <li>
                        <h3>Guilherme Machado</h3>
                    </li>
                    <li>
                        <h3>Guilherme Machado</h3>
                    </li>
                </ul>
            </aside>
            <div className="message-box">
               <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>ENVIAR</button>
            </div>
        </>
    );
}
export default Chat;