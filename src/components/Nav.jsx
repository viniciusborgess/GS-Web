import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/login.css';
import '../css/home.css';


function Nav() {
  
    //Hook -useState
    const[userLogado]=
    useState(JSON.parse(sessionStorage.getItem('usuarioLogado')))


    const handleLogout =()=>{
        sessionStorage.removeItem("usuarioLogado");
        window.location = '/login';
    };

    return (
      <nav className="navbar">
          {userLogado && (
              <div className="user-info">
                  <p>Usuario Logado: {userLogado.usuario}</p>
                  <button onClick={handleLogout} className='logout'>Logout</button>
              </div>
          )}
          <img src="src/img/derm.png" alt="Descrição da Imagem" className="logo" />
          <div className="nav-links">
              <Link to="/" className='btn-link'>Home</Link>
              <Link to="/login" className='btn-link'>Login</Link>
          </div>
      </nav>
  )
}

export default Nav