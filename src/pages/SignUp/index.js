import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import logo from '../../assets/Sniper-logo-rev.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(nome !=='' && email !=='' && password !==''){
      signUp(email, password, nome)
    }  

  }

    return (
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logo} alt="Sniper logo" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Cadastrar uma conta</h1>
            <input className="nome" type="text" placeholder="Seu Nome" autoFocus={true} value={ nome } onChange={ (e) => setNome(e.target.value) }/>
            <input className="email" type="text" placeholder="email@email.com" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
            <input className="senha"type="password" placeholder="senha" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
            <button className="botao"type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
          </form>

          <Link to="/">Já possui uma conta? Entre</Link>
        </div>
      </div>
    );
}
  
  export default SignUp;
  