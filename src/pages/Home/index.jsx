import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import img from './login.png'

function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>Compre seu <br></br><span>Ingresso</span> <br></br> Aqui na <span id="2">Festfy!</span></p>
        
          
          <img 
          src={img}
          id={styles.mobileimg}
          
          ></img>
  


      <div className={styles.divbtn}>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
           Compre aqui
          </Link>
        </div>
          </div>
        <figure>
          <img
            className={styles.img}
            src={img}
            alt="imagem de home"
          />
        
        </figure>
        
      </section>
    </>
  );
}
export default Home;
