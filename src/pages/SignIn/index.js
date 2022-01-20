import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import logo from '../../assets/Sniper-logo-rev.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert("Clicou")
  }

    return (
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logo} alt="Sniper logo" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input className="email" type="text" placeholder="email@email.com" autofocus="true" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
            <input className="senha"type="password" placeholder="senha" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
            <button className="botao"type="submit">Acessar</button>
          </form>

          <Link to="/register">Criar uma conta</Link>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  