import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isAdmPath = location.pathname.startsWith("/adm");
  const isAdmDashboard = location.pathname.startsWith("/dashboard");
  const isAdmAprovar = location.pathname.startsWith("/aprovar");

  return (
    <header className={style.header}>
      <Link to="/">
        <span>Festfy!</span>
      </Link>
      <nav
        onClick={toggleMenu}
        className={`${style.links} ${showMenu ? style.show : ""}`}
      >
        {isAdmPath ||  isAdmDashboard || isAdmAprovar ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/adm">Home Adm</Link>
            <Link to="/aprovar">Aprovar</Link>
            <Link to="/dashboard">Dashboard</Link>
            
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/sobre">Login</Link>
            <Link to="/projetos">
              Área ADM 
              <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205l-.014-.058-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5s-1.411-.136-2.025-.267c-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a30 30 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5q.001-.264.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085q.084.236.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5"/>
              </svg>
            </Link>
            <Link to="/contatos">Contatos</Link>
          </>
        )}
      </nav>
      <div onClick={toggleMenu} className={style.menuButton}>
        <span className={style.menuItem}></span>
        <span className={style.menuItem}></span>
        <span className={style.menuItem}></span>
      </div>
    </header>
  );
}

export default Header;
