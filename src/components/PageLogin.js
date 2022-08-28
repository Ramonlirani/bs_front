import styles from "./PageLogin.module.css";
import logo from "../logo.png";

const PageLogin = () => {
  return (
    <div>
      
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <h2>Barbearia Sabará</h2>
        
        <div className="conteudo"> 
            
            <input className="input-email" type="text" placeholder="Email"/>
            
            <input className="input-senha" type="password" placeholder="Senha"/>
        </div>
        <button className="btn-login">Entrar</button>
        <button className="btn-registrar">Registrar</button>
        <p className="forgot-password">Esqueceu a senha</p>
                
      </div>
      
        
    </div>
  )
}

export default PageLogin