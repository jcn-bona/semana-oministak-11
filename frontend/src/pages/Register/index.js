import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsApp, setwhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    function handleRegister(e) {
        e.preventDefault();
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="route-link" to="/">
                       <FiArrowLeft size={16} color="#E02041"/> 
                       Nao tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                       placeholder="Nome da ONG"
                       
                      
                    />
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button> 


                </form>
            </div>
        </div>
    );    
}

