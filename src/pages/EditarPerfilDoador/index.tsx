import './style.css'

import AsideDoador from '../../components/AsideDoador'
import { Link } from "react-router-dom";

function EditarPerfilDoador() {

    function msgSalvarPerfil() {
        alert('Dados Cadastrado com Sucesso');
    }

    function historyBack() {
        alert('')
    }

    return (
        <>
            <main id='mainEditarPerfilDoador'>
                <h1>Editar Perfil Doador ecosystem & recycle</h1>
                <section>
                    <section>
                        <div className="conteudo_doacoes wrapper">
                            <AsideDoador idSeletor={3} />
                            <div className="menu_Direito">
                                <div className="title">
                                    <h2>Editar Perfil</h2>
                                    <p>Atualize ou edite dados do seu perfil.</p>
                                </div>
                                <div>


                                    <div className="Conteudo">
                                        <div className="nada_consta">
                                            <div className="nomeMarca">
                                                <form className='formDoador'>
                                                    <label htmlFor="name">Nome Completo:</label>
                                                    <input className="input" type="text" id="name" name="name" /> <br /><br />

                                                    <label htmlFor="cpf">CPF:</label> <small>Ex: 123.456.789-10</small> <br />
                                                    <input className="input" type="text" id="cpf" name="cpf" /> <br /><br />

                                                    <label htmlFor="email">E-mail:</label>
                                                    <input className="input" type="email" id="email" name="email" /> <br /><br />

                                                    <label htmlFor="telefone">Telefone:</label> <small>Ex: (DDD)
                                                        1234-5678</small> <br />
                                                    <input className="input" type="tel" id="telefone" name="telefone"
                                                        placeholder="(11) 1234-5678" pattern="([0-9]){2} [0-9]{4}-[0-9]{4}"
                                                        required /> <br /><br />

                                                    <label htmlFor="genero">Gênero:</label>
                                                    <select className="selecao" name="genero" id="genero">
                                                        <option value="Selecionar">Selecione</option>
                                                        <option value="masculino">Masculino</option>
                                                        <option value="feminino">Feminino</option>
                                                        <option value="feminino">Outros</option>
                                                    </select> <br /><br />

                                                    <label htmlFor="endereco">Endereço:</label>
                                                    <input className="input" type="text" id="endereco" name="endereco" /> <br /><br />

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
                                                                <option value="rioDeJaneiro">RJ</option>class
                                                                <option value="rioGrandeDoSul">RS</option>
                                                                <option value="rondonia">RO</option>
                                                                <option value="roraima">RR</option>
                                                                <option value="santaCatarina">SC</option>
                                                                <option value="saoPaulo">SP</option>
                                                                <option value="sergipe">SE</option>
                                                                <option value="tocantins">TO</option>
                                                            </select>
                                                        </div> <br /><br />
                                                    </div>

                                                    <label htmlFor="cep">CEP:</label><small>Ex: 12345-678</small>
                                                    <input className="input" type="text" id="cep" required pattern="" />
                                                </form>
                                            </div>

                                            <div className="btnVoltar">
                                                {/* <a href="#" onClick={msgSalvarPerfil}>Salvar</a> */}
                                                <Link to="/#" onClick={msgSalvarPerfil}>Salvar</Link>


                                                {/* <a href="#" onClick={historyBack}>Cancelar</a> */}
                                                {/* <Link to="/#" onClick={historyBack}>Cancelar</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            </main>
        </>

    )
}

export default EditarPerfilDoador;