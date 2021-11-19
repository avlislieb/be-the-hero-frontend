import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi'
import './style.css';

import imgLogon from '../../assets/image-Logon.png';
import logo from '../../assets/Logo.png';
import iconBtn from '../../assets/iconBtn.png';
import iconCoracao from '../../assets/iconCoracao.png'

import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Dog Help!"/>

                <div className="div-help">
                    <p>Doe ou adote, e faça um pet feliz.</p>
                    
                    <Link to="/incidents"> 
                        <button className="button" id="btnAjudar">Ajudar</button>
                    </Link>
                </div>

                <form onSubmit={handleLogin}>
                    <h1>Cadastre sua ONG</h1>

                    {/* <input 
                        placeholder="sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    /> */}
                    <div className="botoes">
                        <button className="button" type="submit" id="btnLogin">Login <img src={iconBtn} alt="icone seta"/></button>

                        <Link className="back-link" to="/register">
                            Cadastre-se
                        </Link>
                    </div>
                </form>
            </section>
            <img src={imgLogon} alt="Heroes" id="imgLateral"/>
            <div className="doacoes" id="doacoesFeitas">
                <span>Dogs Ajudados 10</span>
                <img src={iconCoracao} alt="icone Coração" />
            </div>
        </div>
    );
}