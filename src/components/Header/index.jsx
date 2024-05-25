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
            <Link to="/"></Link>
        
            
          </>
        ) : (
          <>
            <Link to="/"></Link>
      
            
          
          
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
