import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './style.css';

export default function ListIncident(){
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongNome');

    useEffect(() => {
        api.get('incidents').then(response => {
            setIncidents(response.data);
        })
    }, []);

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="incidents-container">

            <header>
                <img src={logo} alt="Be The Hero"/>

                <button onClick={handleLogout} type="button">
                    <FiPower size="18" color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul className="list-incidents">
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <Link to={`/incidents/show/${incident.id}`}>
                            <button>Detalhes</button>
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}