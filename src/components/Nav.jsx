import {useState} from 'react'
import {Link} from 'react-router-dom'


function Nav() {
  
    //Hook -useState
    const[userLogado]=
    useState(JSON.parse(sessionStorage.getItem('usuarioLogado')))


    const handleLogout =()=>{
        sessionStorage.removeItem("usuarioLogado");
        window.location.reload();
    }

  return (
    <>

    <div style={userLogado == null ? {display:"none"}:{display:"block"}}>
    <p className='usuario m-3 d-flex justify-content-end'>
    {userLogado !=null ? `Usuario Logado:${userLogado.usuario}`:""}</p>

    <button onClick={handleLogout} className='logout m-3'>Logout</button>
    </div>
    
    <Link to="/" className='btn-link m-3 text-decoration-none'>Home</Link><br></br> 
    <Link to="/login" className='btn-link m-3 text-decoration-none'>Login</Link>
    </>
  )
}

export default Nav