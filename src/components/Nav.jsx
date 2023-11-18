import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  // Hook - useState
  const [userLogado] = useState(JSON.parse(sessionStorage.getItem('usuarioLogado')));

  const handleLogout = () => {
    sessionStorage.removeItem('usuarioLogado');
    // Atualizar a página para redirecionar para a tela inicial
    window.location.href = '/login';
  };

  return (
    <>
      <div style={userLogado == null ? { display: 'none' } : { display: 'block' }}>
        <p className='usuario'>{userLogado != null ? `Usuario Logado:${userLogado.usuario}` : ''}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>


      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Nav;
