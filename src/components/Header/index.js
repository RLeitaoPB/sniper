
import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png';

import { Link } from 'react-router-dom';
import { FiBarChart2, FiFileText, FiAirplay, FiSettings } from "react-icons/fi";

export default function Header(){
  const { user } = useContext(AuthContext);

  return(
    <div className="sidebar">
      <div>
        <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto avatar" />
      </div>

      <Link to="/dashboard">
        <FiBarChart2 color="#FFF" size={24} />
        Dashboard
      </Link>
      <Link to="/news">
        <FiFileText color="#FFF" size={24} />
        Notícias
      </Link>
      <Link to="/tutorial">
        <FiAirplay color="#FFF" size={24} />
        Tutorial
      </Link>
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>           
    </div>
  )
}