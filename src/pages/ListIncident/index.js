import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/Logo.png';
import iconVoltar from '../../assets/iconBtnVoltar.png';
import iconCoracao from '../../assets/iconCoracao.png';
import imgCard from '../../assets/imgCard.png'
import './style.css';

export default function ListIncident() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongNome');

    useEffect(() => {
        api.get('incidents').then(response => {
            setIncidents(response.data);
        })
    }, []);

    async function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="incidents-container">

            <header>
                <img src={logo} alt="Dog Help!" />

                <button onClick={handleLogout} type="button">
                    <img src={iconVoltar} alt="Seta para voltar" id="imgIconVoltar" />
                </button>
            </header>
            <div id="titulo">
                <h1>Todos os Casos</h1>
                <img src={iconCoracao} alt="icone Coração" />
            </div>

            <ul className="list-casos">
                <li>
                    <div className="list-grupo">
                        <img src={imgCard} alt="Cachorro do caso" id="imgCard"/>
                    </div>
                    <div className="list-grupo-detalhes">
                        <p>Cachorro Precisa de Ajuda</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição</p>

                        <strong>VALOR:</strong>
                        <p>R$100,00</p>

                        <Link>
                            <button>Detalhes</button>
                        </Link>
                    </div>
                </li>
            </ul>
            <ul className="list-incidents">
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <Link to={`/incidents/show/${incident.id}`}>
                            <button className="btnDetalhes">Detalhes</button>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}