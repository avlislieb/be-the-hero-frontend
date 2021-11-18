import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi'
import './style.css';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

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
                <img src={logo} alt="Be The Hero"/>

                <div className="div-help">
                    <p>Doe ou adote, e faça um pet feliz.</p>
                    
                    <Link to="/incidents"> 
                        <button className="button">Ajudar</button>
                    </Link>
                </div>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Login</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Cadastre-se
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}