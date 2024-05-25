import React from 'react';
import firebase from "firebase/app";
import { auth } from "./firebase";
import './btn.css';
import './login.css';
import fundo from './images/fundo.png'
import { Link } from "react-router-dom"; 

export default function Sobre() {
  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      
      if (result.user) {
        const { displayName, photoURL } = result.user;
        if (!displayName || !photoURL) {
          throw new Error('O usuário não tem DisplayName ou photoUrl');
        }

        window.location.href = '/teste'; // Redireciona para o componente Teste após o login
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <>
    <div className='container-login'>

      <div>

    <img src={fundo}
    id='fundo'
    ></img>


      </div>
      <div>
          <div id='text'>
        <h1 id='titulo'>REALIZE SEU <br></br><span className='span'>LOGIN!</span></h1>

        <img src={fundo}
        id='fundo-mobile'
        ></img>

<br></br>
        <p>Através de sua Conta Google <br></br>
        e garanta seu <span className='span'>INGRESSO!</span>
        </p>
        <div className='div-btn'>
      <button onClick={handleLogin} className='login-with-google-btn'>Login Google</button>
      <div id='btn'>
          <Link to="/teste" id='link'>
           TESTE MOBIKE
          </Link>
        </div>
      </div>
        </div>

       
 
      </div>
      </div>
    </>
  );
}
