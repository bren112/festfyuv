import './adm.css'
import img from'./user.png';
import adm_img from'./adm_img.png';

function Adm() {
return(
   <> 
<div className='header'>
   <div>
   <h1>Olá Adm</h1>
   <p>ADM $NOME</p>
   </div>
 <img 
          src={img}
          id='user'
          
          ></img>
 

</div>
<h1 id='title'>GERENCIE E CONTROLE<br></br> SUA <span className='span'>FESTA!</span></h1>
<p>navegue e explore a área do<span className='span'> ADM</span>!</p>
<img 
          src={adm_img}
          id='front'
          
          ></img>
<br></br>




</> 
);
}
export default Adm;
