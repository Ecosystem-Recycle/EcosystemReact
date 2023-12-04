import './style.css'

import Aside from '../../components/Aside'
import { Link } from "react-router-dom";

function EditarPefilColetor() {

    function msgSalvarPerfil() {
        alert('Dados Cadastrado com Sucesso');
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
                                            <form>
                                                <label htmlFor="name">Nome da Empresa:</label>
                                                <input className="input" type="text" id="nameEmpresa" name="name" />{" "}
                                                <br />
                                                <br />
                                                <label htmlFor="name">Razão Social:</label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="nameRazao"
                                                    name="nameRazao"
                                                />{" "}
                                                <br />
                                                <br />
                                                <label htmlFor="email">E-mail:</label>
                                                <input className="input" type="email" id="email" name="email" /> <br />
                                                <br />
                                                <label htmlFor="telefone">Telefone:</label>{" "}
                                                <small>Ex: (DD) 1234-5678</small> <br />
                                                <input
                                                    className="input"
                                                    type="tel"
                                                    id="telefone"
                                                    name="telefone"
                                                    placeholder="(11) 1234-5678"
                                                    pattern="([0-9]){2} [0-9]{4}-[0-9]{4}"
                                                />{" "}
                                                <br />
                                                <br />
                                                <label htmlFor="cnpj">CNPJ:</label> <small>Ex: 12.345.678/0001-00</small>{" "}
                                                <br />
                                                <input className="input" type="text" id="cnpj" name="cnpj" /> <br />
                                                <br />
                                                <label htmlFor="endereco">Endereço:</label>
                                                <input className="input" type="text" id="endereco" name="endereco" />{" "}
                                                <br />
                                                <br />
                                                <div className="regiao">
                                                    <div>
                                                        <label htmlFor="endereco">Cidade:</label>
                                                        <input className="cidade" type="text" id="cidade" name="cidade" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="selecao uf">UF:</label>
                                                        <select className="selecao" name="uf" id="uf">
                                                            <option value="selecionar">Selecione</option>
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
                                                    </div>{" "}
                                                    <br />
                                                    <br />
                                                </div>
                                                <label>CEP:</label>
                                                <label>Ex: 12345-678</label>
                                                <input className="input" type="text" id="cep" required pattern="" />

                                            </form>
                                        </div>
                                        <div className="btnVoltar">

                                            <Link to="/#" onClick={msgSalvarPerfil}>Salvar</Link>

                                            {/* <Link to="/#" onClick={history.back}>Cancelar</Link> */}


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