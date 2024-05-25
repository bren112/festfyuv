import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import img from './images/arrai.jpg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondAccordionOpen, setIsSecondAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleSecondAccordion = () => {
    setIsSecondAccordionOpen(!isSecondAccordionOpen);
  };

  return (
    <>
      <h1 id='title'>Compre seu ingresso!</h1>
      <div className="accordion">
        <img src={img} alt="Flyer" id="flyer" />
        <div className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
          <div className="accordion-item-header">Está com dúvidas se vai em nosso Arráia? Confira nossas atrações:👇🏽🤠</div>
          <div className="accordion-item-content">
            <ul>
              <li>🌾 Climinha junino, fogueira, decoração e muito mais</li>
              <li>🌾 Contaremos com bar de apoio</li>
              <li>🌾 Diversidade de comida</li> 
              <li>🌾 Estrutura e som diferenciado</li>
              <li>🌾 Dessa vez, em um novo local</li>
              <li>🌾 Atração inédita!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className={`accordion-item ${isSecondAccordionOpen ? 'open' : ''}`} onClick={toggleSecondAccordion}>
          <div className="accordion-item-header">Arráia da Diretoria 🤠🌽</div>
          <div className="accordion-item-content">
            <ul>
              <li>👕 Ir trajado com tema junino camisa xadrez, etc, da forma que preferirem, desde que se enquadre no tema!</li>
              <li>🗓️ 28/06</li>
              <li>🍻 Bar (+18)</li>
              <li>⏰ 21:00h - ????</li>
              <li>📍Santa Rita do Passa Quatro-(localização exata no dia)</li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/teste"><button id='enviar'>Compre Aqui</button></Link>
<div>
  <br></br>
  <br></br>
  <br></br>
</div>
    </>
  );
};

export default App;
