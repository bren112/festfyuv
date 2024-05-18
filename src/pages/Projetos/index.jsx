import './adm.css'
import { Link } from "react-router-dom";

function Projetos() {
return(
<div>
   
  <form>
  <h1>
        LOGIN ADM
    </h1>
  <input type="text" placeholder='User' />
  <input type="password" placeholder='Senha' />

    <div id='btn'>
          <Link to="/adm" id='link'>
           Logar como ADM
          </Link>
        </div>
  </form>
</div>
);
}
export default Projetos;
