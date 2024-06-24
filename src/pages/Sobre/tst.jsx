import React, { useState } from 'react';
import { supabase } from '../../Supabase/createClient';
import './style.css';

const Teste = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [valorPago, setValorPago] = useState('35');
  const chavePix = '48843176889'; // Chave Pix

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.from('user_solicitacao').insert([{ nome, telefone, pagamento: valorPago }]);
      if (error) {
        throw error;
      }
      setNome('');
      setTelefone('');
      setValorPago('35'); 
      alert('Dados inseridos com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir os dados:', error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(chavePix);
    alert('Chave Pix copiada!');
  };

  return (
    <div className='centro'>
      <h1 id='title'>Adquira aqui seu Ingresso!</h1>
      
      <form onSubmit={handleSubmit}>
        <br></br>
        <h3>Ingresso do Arraial Da Diretoria 🤠</h3>
        <div>
          <input placeholder='Nome' type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          <p>Nome Completo</p>
        </div>
        <div>
          <input placeholder='Telefone' type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
        <div>
          <p><span id='span'>Coloque seu número correto para podermos entrar em contato!</span></p>
          <select id="valorPago" value={valorPago} onChange={(e) => setValorPago(e.target.value)} required>
            <option value="35">Valor da casa (35)</option>
            <option value="35">Valor de fora (35)</option>
          </select>
          <p id='span'>QUARTO LOTE ⚠️</p>
        </div>
        <div>
          <div className='pix'> 
            <input placeholder={chavePix} type="text" disabled />
            <button id='pix' type="button" onClick={copyToClipboard}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
            </button>
          </div>
          <p>Chave Pix</p>
        </div>
        <br></br>
        <button id='enviar' type="submit">Enviar</button>
        <br></br>
      </form>
    </div>
  );
}

export default Teste;
