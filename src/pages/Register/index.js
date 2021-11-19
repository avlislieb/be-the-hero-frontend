import React, { useState } from 'react';

import './style.css';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
<<<<<<< HEAD
import logo from '../../assets/Logo.png';
import iconeCachorro from '../../assets/iconeCachorroCadastroOng.png';
=======
import logo from '../../assets/logo.png';
>>>>>>> b925c5c2d87205d5a33f14710868fe223ea37d00

import { Event } from '../../components/Tracking'
import api from '../../services/api';

export default function Register() {
    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = { name, email, whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
            console.log(err);
        }
    }

    return (
        <div className="register-container">
            <img src={logo} alt="Dog Help!" />
            <h1 id="titulo">Cadastro</h1>
            <div className="content">
                <section>
                    {/* <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link> */}
                </section>

                <form onSubmit={handleRegister}>
                    <p> Nome da ONG </p>
                    <input
                        value={name}
                        onChange={e => setNome(e.target.value)}
                    />

                    <div className="input-group">
                        <div className="grupo-uf">
                            <p> UF </p>
                            <input
                                style={{ width: 110, }}
                                value={uf}
                                onChange={e => setUf(e.target.value)}
                            />
                        </div>
                        <div className="grupo-cidade">
                            <p> Cidade </p>
                            <input
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="telefone-grupo">
                        <div className="telefone-ddd">
                            <p> Tel </p>
                            <input type="DDD"
                            />
                        </div>
                        <div className="telefone-numero">
                            <input type="tel"
                            />
                        </div>
                    </div>

                    <div className="email-grupo">
                        <p> E-mail </p>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="senha-grupo">
                        <p> Senha </p>
                        <input
                            type="password"
                        />
                    </div>

                    <button id="btnCadastrar"
                        type="submit"
                        className="button"
                        onClick={() => {
                            Event("Cadastro-ong", "Cadasto de uma ong", "Ong_cadastrada")
                        }}
                    >Finalizar</button>

                    {/* <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Ja tenho um cadastro
                    </Link> */}
                </form>
            </div>
            <img src={iconeCachorro} alt="Cachorro com olhar de caridade" id="imgCachorro" />
        </div>
    );
}