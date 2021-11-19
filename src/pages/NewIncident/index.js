import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

import { FiArrowLeft } from 'react-icons/fi';
<<<<<<< HEAD
import logo from '../../assets/Logo.png';
=======
import logo from '../../assets/logo.png';
>>>>>>> b925c5c2d87205d5a33f14710868fe223ea37d00

import api from '../../services/api';

export default function NewIncident(){
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title, 
            description,
            value
        };
        
        try{
            const response = await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }, 
            });
            
            alert('Cadastro efetuado com sucesso');
            history.push('/profile');
        }catch(err){
            console.log(err, 'err');
            alert('Erro ao cradastrar caso, tente novamente.')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    {/* <button type="reset" className="button">Cancelar</button> */}
                    <button type="submit" className="button">Cadastrar</button>

                </form> 
            </div>
            
        </div>
    );
}