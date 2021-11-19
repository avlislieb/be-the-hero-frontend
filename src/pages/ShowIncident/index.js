import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import { BsArrowLeft } from 'react-icons/bs';

import api from '../../services/api';

<<<<<<< HEAD
import logo from '../../assets/Logo.png';
=======
import logo from '../../assets/logo.png';
>>>>>>> b925c5c2d87205d5a33f14710868fe223ea37d00
import './style.css';

export default function ShowIncident(){
    const [incident, setIncident] = useState({});
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        api.get(`incidents/show/${id}`).then(response => {
            setIncident(response.data);
        })
    }, []);

    async function handleLogout(){
        history.push('/incidents');
    }

    return (
        <div className="incidents-show-container">

            <header>
                <img src={logo} alt="Be The Hero"/>

                <button onClick={handleLogout} type="button">
                    <BsArrowLeft size="18" color="#E02041" />
                </button>
            </header>
            
            <ul>
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button><FaWhatsapp size="24" color="#34af23" /></button>
                    
                </li>
            </ul>
            
        </div>
    );
}