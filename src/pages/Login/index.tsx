import './style.css'

import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import secureLocalStorage from 'react-secure-storage';

function Login() {

        const navigate = useNavigate()

        const [nome, setNome] = useState<string>("")
        const [email, setEmail] = useState<string>("") 
        const [senha, setSenha] = useState<string>("")
        const [validacao, setValidacao] = useState<string>("")
        const [opcao, setOpcao] = useState<string>("")
    
        function fazerLogin(event:any) {
            event.preventDefault()

            const usuario: object = {
                email: email,
                password: senha
            }

            api.post("login", usuario).then( (response) => {
                console.log(response)

                secureLocalStorage.setItem("user", response.data)

                // if(response.data.user.tipo_usuario == "coletor"){
                //     console.log("ok")
                // }

                // return 

                if(response.data.user.tipo_usuario == "doador") {
                    navigate("/querodoarpt1/")
                } else {
                    navigate("/buscarpublicacoes/")
                } 
                // else {
                //     alert("dados invalidos")
                // }

                // navigate("/querodoarpt1/" + response.data.user.id)
                // navigate("/querodoarpt1/")

                navigate(0)

            } )

        }

        function cadastrarUsuario(event:any) {
            event.preventDefault()

            if (senha != validacao){
                alert("A senha não confere")
                return
            }

            if(!opcao){
                alert("Selecione uma opção")
                return
            }

            
            const formData = new FormData()

            formData.append("nome", nome)
            formData.append("email", email)
            formData.append("password", senha)
            formData.append("tipo_usuario", opcao)

            api.post("users", formData).then( (response) => {
                // console.log(response)
                alert("Cadastro realizado com sucesso")
            } ).catch( (error) => {
                console.log(error)
            } )

        }

    return (
        <>
            <main id="login">
                <h1>página Login ecosystem &amp; recycle</h1>
                <section className="sessao_formulario_login">
                    <form onSubmit={fazerLogin} className="formulario_login" method='POST'>
                        <h2>Conecte-se com sua conta</h2>
                        <label htmlFor="email">E-mail:</label>
                        <br />
                        <input
                            type="email"
                            name="login_email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="senha">Senha:</label>
                        <br />
                        <input
                            type="password"
                            name="login_senha"
                            id="senha"
                            placeholder="Digite sua senha"
                            onChange={(event) => setSenha(event.target.value)}
                            required
                        />
                        <br />
                        <button
                            className="formulario_botao"
                            type="submit"
                        // onClick={logar} return false
                        >
                            Entrar
                        </button>
                    </form>
                    <form onSubmit={cadastrarUsuario} className="formulario_cadastro" method='POST'>
                        <h2>Crie a sua conta. É grátis!</h2>
                        <label htmlFor="cadastro_name">Nome Completo:</label>
                        <br />
                        <input
                            type="text"
                            name="cadastro_name"
                            id="cadastro_name"
                            placeholder="Digite seu nome completo"
                            onChange={(event) => setNome(event.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="cadastro_email">E-mail:</label>
                        <br />
                        <input
                            type="email"
                            name="cadastro_email"
                            id="cadastro_email"
                            placeholder="Digite seu e-mail"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="login_senha">Senha:</label>
                        <br />
                        <input
                            type="password"
                            name="login_senha"
                            id="login_senha"
                            placeholder="Digite sua senha"
                            onChange={(event) => setSenha(event.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="confirmacao_senha">Confirmar Senha:</label>
                        <br />
                        <input
                            type="password"
                            name="confirmacao_senha"
                            id="confirmacao_senha"
                            placeholder="Confirme sua senha"
                            onChange={(event) => setValidacao(event.target.value)}
                            required
                        />
                        <br />
                        <div className="opcao">
                            <div className="opcao_doador">
                                <input 
                                type="radio" 
                                name="tipo_usuario" 
                                id="doador" 
                                value="doador"
                                checked={opcao === 'doador'}
                                onChange={(event) => setOpcao(event.target.value)}
                                />
                                <label htmlFor="doador">Sou doador</label>
                            </div>
                            <div className="opcao_coletor">
                                <input 
                                type="radio" 
                                name="tipo_usuario" 
                                id="coletor"
                                value="coletor"
                                checked={opcao === 'coletor'}
                                onChange={(event) => setOpcao(event.target.value)}
                                />
                                <label htmlFor="coletor">Sou coletor</label>
                            </div>
                        </div>
                        <button  type="submit" className="formulario_botao">
                            Cadastrar
                        </button>
                    </form>
                </section>
            </main>

        </>
    )
}

export default Login;