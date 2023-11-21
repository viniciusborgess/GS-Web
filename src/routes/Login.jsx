import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';


function Login() {

    //Hook- useState

    const [usuario, setUsuario] = useState({
        usuario: "",
        senha: "",
    })
    //função para pegar os dados passando em name e value 

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let user;

        try {
            const response = await fetch("http://localhost:5000/usuarios");
            if (response.ok) {
                const users = await response.json();
                //varrendo todos os usuarios
                for (let i = 0; i < users.length; i++) {
                    const use = users[i];
                    user = use;
                    //validando o usuario e senha
                    if (use.usuario == usuario.usuario && use.senha == usuario.senha) {
                        user = use;
                        break;
                    }
                }
                if (user) {
                    sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

                    setTimeout(() => {
                        window.location = '/home';
                    }, 3000)
                } else {
                    //se o usuario e senha for invalidos
                    alert("usuario e senha invalidos")
                    //limpa os campos
                    setUsuario({
                        usuario: "",
                        senha: "",
                    });
                    //volta para a tela de login
                    window.location = "/login";
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <div className="container">
                <div className="text-end">
                    <small className="text">Global Solution 2023 - Engenharia de Software</small>
                </div>
            </div>

            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="card p-5 box" style={{ minHeight: "300px", minWidth: "800px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="idUsuario" className='userpassword mb-2'>Usuário:</label>
                            <input
                                type="text"
                                name="usuario"
                                value={usuario.usuario}
                                className="form-control mb-3"
                                placeholder="Digite seu usuário"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="idSenha" className='userpassword mb-2'>Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                value={usuario.senha}
                                className="form-control"
                                placeholder="Digite sua senha"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: "white", borderColor: "black", color: "black" }}>Login&gt;&gt;</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login