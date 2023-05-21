import styles from './FormLogin.module.css';
import logo from '../../../../public/logo.png'
export const FormLogin = () => {
  const login = () => {
    window.location.replace('/home');
  };
  return (
    
    <>
      <div className={styles.contenido}>


        <div className={styles.columGeneral}>
          <div className={`${styles.rowInput} row`}>
            <img src={logo} className={styles.Logo} />
            <label className={styles.labelFlotante}>Nombre de Usuario</label>
            <input className={`${styles.input} col form-control`} />
            <br />
            <br />
            <label className={styles.labelFlotante}>Contraseña</label>
            <input className={`${styles.input} col form-control`} />
            <button className={`${styles.btnLogin}`} onClick={login} >Iniciar Sesión</button>
            <br />
            <a href="#" className={`${styles.linkOlvido} justify-content-center`}>¿Olvidaste tu contraseña?</a>
            {/* <span className={styles.spanLogin}>¿Olvidaste tu contraseña?</span> */}

          </div>
          <div className={styles.columRight}>
            
          </div>
        </div>


      </div>

    </>

  )
}

