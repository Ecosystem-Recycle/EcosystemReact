import './style.css'

import Aside from '../../components/Aside'
import { useState, useEffect } from 'react';
import api from '../../utils/api';
import secureLocalStorage from 'react-secure-storage'
import { redirectDocument, useParams } from 'react-router-dom';



function EditarPefilColetor() {

    


    const [senha, setSenha] = useState<string>("")
    const [nomeEmpresa, setNomeEmpresa] = useState<string>("")
    // const [razaoSocial, setRazaoSocial] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    // const [telefone, setTelefone] = useState<string>("")
    // const [cnpj, setCnpj] = useState<string>("")
    // const [endereco, setEndereco] = useState<string>("")
    // const [cidade, setCidade] = useState<string>("")
    // const [uf, setUf] = useState<string>("")
    // const [cep, setCep] = useState<string>("")


    // const { idUsuario } = useParams()
    // const [nome, setNome] = useState<string>("")

    // useEffect(() => {
    //     document.title = "perfil de " + nome

    //     buscarUsuarioPorID()


    // }, [])


    // function buscarUsuarioPorID() {
    //     api.get("users/" + idUsuario).then((response: any) => {
    //         setNome(response.data.nome)

    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }




    function msgSalvarPerfil() {
        alert('Dados Cadastrado com Sucesso');
    }

    function cadastroDadosColetor(event: any) {
        event.preventDefault()

        

        const formData = new FormData()

        // api.get("users").then((response) => {
        //     console.log(response)

        //     secureLocalStorage.setItem("user", response.data)

        //     console.log(response.data.map(user => user.id))

        // }
        // )
        // return


        formData.append("password", senha)
        formData.append("nome_empresa", nomeEmpresa)
        // formData.append("razao_social", razaoSocial)
        formData.append("email", email)
        // formData.append("telefone", telefone)
        // formData.append("cnpj", cnpj)
        // formData.append("endereco", endereco)
        // formData.append("cidade", cidade)
        // formData.append("uf", uf)
        // formData.append("cep", cep)

        api.post("users", formData)
        .then((response) => {
            console.log(response)
            alert("cadastro ok")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <main id='mainEditarPerfilColetor'>
                <h1>página editar perfil do coletor ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <Aside idSeletor={3} />
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Editar Perfil</h2>
                                <p>Atualize ou edite dados do seu perfil.</p>
                            </div>
                            <div>
                                <div className="Conteudo">
                                    <div className="nada_consta">

                                        <div className="nomeMarca">
                                            <form onSubmit={cadastroDadosColetor} method='POST'>
                                                <label htmlFor="name">Nome da Empresa:</label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="nameEmpresa"
                                                    name="name"
                                                    onChange={(event) => setNomeEmpresa(event.target.value)}
                                                />
                                                <br />
                                                <br />
                                                <label htmlFor="name">Razão Social:</label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="nameRazao"
                                                    name="nameRazao"
                                                    // onChange={(event) => setRazaoSocial(event.target.value)}
                                                    onChange={(event) => setSenha(event.target.value)}
                                                />
                                                <br />
                                                <br />
                                                <label htmlFor="email">E-mail:</label>
                                                <input
                                                    className="input"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    onChange={(event) => setEmail(event.target.value)}
                                                />
                                                <br />
                                                <br />
                                                <label htmlFor="telefone">Telefone:</label>{" "}
                                                <br />
                                                <input
                                                    className="input"
                                                    type="tel"
                                                    id="telefone"
                                                    name="telefone"
                                                    placeholder="(11) 1234-5678"
                                                    // pattern="([0-9]){2} [0-9]{4}-[0-9]{4}"
                                                    // onChange={(event) => setTelefone(event.target.value)}
                                                />
                                                <br />
                                                <br />
                                                <label htmlFor="cnpj">CNPJ:</label>
                                                <br />
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="cnpj"
                                                    name="cnpj"
                                                    // onChange={(event) => setCnpj(event.target.value)}
                                                />
                                                <br />
                                                <br />
                                                <label htmlFor="endereco">Endereço:</label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="endereco"
                                                    name="endereco"
                                                    // onChange={(event) => setEndereco(event.target.value)}
                                                />
                                                <br />
                                                <br />
                                                <div className="regiao">
                                                    <div>
                                                        <label htmlFor="endereco">Cidade:</label>
                                                        <input
                                                            className="cidade"
                                                            type="text"
                                                            id="cidade"
                                                            name="cidade"
                                                            // onChange={(event) => setCidade(event.target.value)}
                                                        />
                                                    </div>
                                                    {/* <div>
                                                        <label htmlFor="selecao uf">UF:</label>
                                                        <select 
                                                        className="selecao" 
                                                        name="uf" 
                                                        id="uf"
                                                        value={ uf }
                                                        onChange={(event) => setUf(event.target.value)}
                                                        >
                                                            <option value="">Selecione</option>
                                                            <option value="acre">AC</option>
                                                            <option value="alagoas">AL</option>
                                                            <option value="amapa">AP</option>
                                                            <option value="amazonas">AM</option>
                                                            <option value="bahia">BA</option>
                                                            <option value="ceara">CE</option>
                                                            <option value="distritoFederal">DF</option>
                                                            <option value="espiritoSanto">ES</option>
                                                            <option value="goias">GO</option>
                                                            <option value="maranhao">MA</option>
                                                            <option value="matoGrosso">MT</option>
                                                            <option value="matoGrossoDoSul">MS</option>
                                                            <option value="minasGerais">MG</option>
                                                            <option value="para">PA</option>
                                                            <option value="paraiba">PB</option>
                                                            <option value="parana">PR</option>
                                                            <option value="pernambuco">PE</option>
                                                            <option value="piaui">PI</option>
                                                            <option value="rioDeJaneiro">RJ</option>
                                                            <option value="rioGrandeDoSul">RS</option>
                                                            <option value="rondonia">RO</option>
                                                            <option value="roraima">RR</option>
                                                            <option value="santaCatarina">SC</option>
                                                            <option value="saoPaulo">SP</option>
                                                            <option value="sergipe">SE</option>
                                                            <option value="tocantins">TO</option>
                                                        </select>
                                                    </div> */}
                                                    <br />
                                                    <br />
                                                </div>
                                                <label>CEP:</label>
                                                {/* <label>Ex: 12345-678</label> */}
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="cep"
                                                    placeholder='12345-000'
                                                    // onChange={(event) => setCep(event.target.value)}
                                                // required pattern="" 
                                                />
                                                <div className="btnVoltar">
                                                    <button type="submit">Salvar</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default EditarPefilColetor;