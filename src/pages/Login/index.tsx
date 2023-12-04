import './style.css'
import imgGoogle from "../../assets/img/login_Btn_Google.png"
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function Login() {

//     const navigate = useNavigate()

//     const [email, setEmail] = useState<string>("")
//     const [senha, setSenha] = useState<string>("")

//     function fazerLogin(event: any) {
//         event.preventDefault()

//         const usuario: object = {
//             email: email,
//             password: senha
//         }

//         api.post("login", usuario).then((response) => {
//             console.log(response);

//             secureLocalStorage.setItem("user", response.data)
//             navigate("/perfil/" + response.data.user.id)
//             navigate(0)
//         })
//     }

    return (
        <>
            <main id="login">
                <h1>página Login ecosystem &amp; recycle</h1>
                <section className="sessao_formulario_login">
                    <form className="formulario_login">
                        <h2>Conecte-se com sua conta</h2>
                        <label htmlFor="login_email">E-mail:</label>
                        <br />
                        <input
                            type="email"
                            name="login_email"
                            id="login_email"
                            placeholder="Digite seu e-mail"
                        />
                        <br />
                        <label htmlFor="login_senha">Senha:</label>
                        <br />
                        <input
                            type="password"
                            name="login_senha"
                            id="login_senha"
                            placeholder="Digite sua senha"
                        />
                        <br />
                        <button
                            className="formulario_botao"
                            type="submit"
                        // onClick={logar} return false
                        >
                            Enviar
                        </button>
                        <a
                            className="btn_goole"
                            href="https://accounts.google.com/v3/signin/identifier?dsh=S1963277586%3A1688274570474968&continue=https%3A%2F%2Fwww.google.com.br%2F&ec=GAZAmgQ&hl=pt-BR&ifkv=AeDOFXgCJz1IrXfYbieSY_TrrLvErNRPYDzYGxbHFZ3dchrH_CIWuuEUxtzryf5u7TnsXGlIUhTq4g&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                        >
                            Conecte-se com o google
                            <img src={imgGoogle} alt="logo do google" />
                        </a>
                    </form>
                    <form className="formulario_cadastro">
                        <h2>Crie a sua conta. É grátis!</h2>
                        <label htmlFor="cadastro_name">Nome Completo:</label>
                        <br />
                        <input
                            type="text"
                            name="cadastro_name"
                            id="cadastro_name"
                            placeholder="Digite seu nome completo"
                        />
                        <br />
                        <label htmlFor="cadastro_email">E-mail:</label>
                        <br />
                        <input
                            type="email"
                            name="cadastro_email"
                            id="cadastro_email"
                            placeholder="Digite seu e-mail"
                        />
                        <br />
                        <label htmlFor="login_senha">Senha:</label>
                        <br />
                        <input
                            type="password"
                            name="login_senha"
                            id="login_senha"
                            placeholder="Digite sua senha"
                        />
                        <br />
                        <label htmlFor="confirmacao_senha">Confirmar Senha:</label>
                        <br />
                        <input
                            type="password"
                            name="confirmacao_senha"
                            id="confirmacao_senha"
                            placeholder="Confirme sua senha"
                        />
                        <br />
                        <div className="opcao">
                            <div className="opcao_doador">
                                <input type="radio" name="tipo_usuario" id="doador" />
                                <label htmlFor="doador">Sou doador</label>
                            </div>
                            <div className="opcao_coletor">
                                <input type="radio" name="tipo_usuario" id="coletor" />
                                <label htmlFor="coletor">Sou coletor</label>
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