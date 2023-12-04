import './style.css'
import imgGoogle from "../../assets/img/login_Btn_Google.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../utils/api';

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    function fazerLogin(event: any) {
        event.preventDefault()

        const usuario: object = {
            email: email,
            password: senha
        }

        // api.post("login", usuario).then((response) => {
        //     console.log(response);

        //     secureLocalStorage.setItem("user", response.data)
        //     navigate("/perfil/" + response.data.user.id)
        //     navigate(0)
        // })
    }

    return (
        <>
            <main id="login">
                <h1>página Login ecosystem &amp; recycle</h1>
                <section className="sessao_formulario_login">
                    <form className="formulario_login">
                        
                        <div className="campo-form">
                            <h2>Conecte-se com sua conta</h2>
                        </div>

                        <div className="campo-form">
                            <label htmlFor="login_email">E-mail:</label>
                            <input 
                            type="email" 
                            name='login_email'
                            id='login_email'
                            placeholder='Digite o nome & marca do produto'
                            required
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="login_senha">Senha:</label>
                            <input 
                            type="password" 
                            name='login_senha'
                            id='login_senha'
                            placeholder="Digite sua senha"
                            required
                            />
                        </div>

                            <button
                                className="formulario_botao"
                                type="submit"
                            // onClick={logar} return false
                            >
                                Enviar
                            </button>
                      
                        <div className="linkA">
                            <a
                                className="btn_goole"
                                href="https://accounts.google.com/v3/signin/identifier?dsh=S1963277586%3A1688274570474968&continue=https%3A%2F%2Fwww.google.com.br%2F&ec=GAZAmgQ&hl=pt-BR&ifkv=AeDOFXgCJz1IrXfYbieSY_TrrLvErNRPYDzYGxbHFZ3dchrH_CIWuuEUxtzryf5u7TnsXGlIUhTq4g&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                            >
                                Login Google
                                <img src={imgGoogle} alt="logo do google" />
                            </a>
                        </div>
                        
                        
                        
                    </form>
                    <form className="formulario_cadastro">
                        <div className="campo-form">
                            <h2>Crie a sua conta. É grátis!</h2>
                        </div>
                        <div className="campo-form">
                            <label htmlFor="cadastro_name">Nome Completo:</label>
                            <input 
                            type="text"
                            name="cadastro_name"
                            id="cadastro_name"
                            placeholder="Digite seu nome completo"
                            required
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="cadastro_email">E-mail:</label>
                            <input 
                            type="email"
                            name="cadastro_email"
                            id="cadastro_email"
                            placeholder="Digite seu e-mail"
                            required
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="login_senha">Senha:</label>
                            <input 
                                type="password"
                                name="login_senha"
                                id="login_senha"
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="confirmacao_senha">Confirmar Senha:</label>
                            <input 
                                type="password"
                                name="confirmacao_senha"
                                id="confirmacao_senha"
                                placeholder="Confirme sua senha"
                                required
                            />
                        </div>
                        <div className="opcao">
                            <div className="opcao_doador">
                                <input type="radio" name="tipo_usuario" id="doador" />
                                <label htmlFor="doador">Sou Doador</label>
                            </div>
                            <div className="opcao_coletor">
                                <input type="radio" name="tipo_usuario" id="coletor" />
                                <label htmlFor="coletor">Sou Coletor</label>
                            </div>
                        </div>
                        <button type="submit" className="formulario_botao">
                            Cadastrar
                        </button>
                    </form>
                </section>
            </main>

        </>
    )
}

export default Login;