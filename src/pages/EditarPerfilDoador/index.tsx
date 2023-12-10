import "./style.css";

import AsideDoador from "../../components/AsideDoador";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/api";

function EditarPerfilDoador() {

    const [ nome, setNome ] = useState<string>("")
    const [ cpf_cnpj, setCpf_cnpj ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ senha, setSenha ] = useState<string>("")
    const [ telefone, setTelefone ] = useState<string>("")
    const [ genero, setGenero ] = useState<string>("")
    const [ logradouro, setLogradouro ] = useState<string>("")
    const [ cidade, setCidade ] = useState<string>("")
    const [ uf, setUf ] = useState<string>("")
    const [ cep, setCep ] = useState<string>("")
    const [ bairro, setBairro ] = useState<string>("")
    const [ numero, setNumero ] = useState<string>("")



  const [formValues, setFormValues] = useState<any>({
    cep: "",
    bairro: "",
    numero: ""
  });

  function buscarCep() {

    if(cep == ""){
        alert("Campo de CEP não pode ser Vazio")
        return
    }
    api.get("https://viacep.com.br/ws/" + cep + "/json/")
      .then((response: any) => {
        setLogradouro(response.data.logradouro)
        setCidade(response.data.localidade)
        setUf(response.data.uf)
        setBairro(response.data.bairro)



        // setFormValues({
        //     ...formValues, logradouro: response.data.logradouro,
        //     ...formValues, cidade: response.data.localidade,
        //     ...formValues, uf: response.data.uf,
        //     ...formValues, bairro: response.data.bairro
        // })
      });
  }

  function msgSalvarPerfil() {
    alert("Dados Cadastrado com Sucesso");
  }

  return (
    <>
      <main id="mainEditarPerfilDoador">
        <h1>Editar Perfil Doador ecosystem & recycle</h1>
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
                  <section className="formulario">
                    <form className="formDoador">
                      <h2>Dados Gerais:</h2>
                      <div className="campo-form">
                        <label htmlFor="nomeUsuario">Nome Completo:</label>
                        <input
                          value={nome}
                          type="text"
                          name="nomeUsuario"
                          id="nomeUsuario"
                          placeholder="Digite o nome completo para cadastro..."
                          required
                          onChange={(event) => setNome(event.target.value)}
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="cpf_cnpj">CPF ou CNPJ:</label>
                        <small>Ex: 123.456.789-10</small>
                        <input
                          value={cpf_cnpj}
                          type="text"
                          name="cpf_cnpj"
                          id="cpf_cnpj"
                          placeholder="Digite o seu CPF ou CNPJ..."
                          required
                          onChange={(event) => setCpf_cnpj(event.target.value)}
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="email">E-mail:</label>
                        <input
                          value={email}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Digite o seu email para cadastro..."
                          required
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="senha">Senha:</label>
                        <input
                          value={senha}
                          type="passworf"
                          name="senha"
                          id="senha"
                          placeholder="Digite sua senha..."
                          required
                          onChange={(event) => setSenha(event.target.value)}
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                          value={telefone}
                          type="tel"
                          name="telefone"
                          id="telefone"
                          placeholder="Digite o seu telefone Ex. (DDD) 91234-5678..."
                          pattern="([0-9]){2} [0-9]{4}-[0-9]{4}"
                          required
                          onChange={(event) => setTelefone(event.target.value)}
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="selectGenero">Genero:</label>
                        <select
                          className="selectGenero"
                          name="selectGenero"
                          id="selectGenero"
                          required
                          value={genero}
                          onChange={(event) => setGenero(event.target.value)}
                        >
                          {" "}
                          <option disabled value="">
                            Selecione
                          </option>
                          <option value="masculino">Masculino</option>
                          <option value="feminino">Feminino</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                      <h2>Endereço:</h2>
                      <div className="camposDuplo-cep">
                        <div className="campo-form-cep buscarCep">
                          <label htmlFor="cep">CEP:</label>
                          <input
                            value={cep}
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="Digite seu CEP..."
                            required
                            onChange={(event) => setCep(event.target.value)}
                          />
                        </div>
                        <div className="but_cep">
                          <input
                            type="button"
                            value="Buscar"
                            onClick={ buscarCep }
                          />
                        </div>
                      </div>
                      <div className="camposDuplo">
                        <div className="campo-form">
                            <label htmlFor="logradouro">Logradouro:</label>
                            <input
                            value={logradouro}
                            type="text"
                            name="logradouro"
                            id="logradouro"
                            placeholder="Digite o seu endereço..."
                            required
                            onChange={(event) => setLogradouro(event.target.value)}

                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="numero">Numero:</label>
                            <input
                            value={numero}
                            type="text"
                            name="numero"
                            id="numero"
                            placeholder="Digite o seu Número..."
                            required
                            onChange={(event) => setNumero(event.target.value)}
                            
                            />
                        </div>
                      </div>
                      <div className="campo-form">
                            <label htmlFor="bairro">Bairro:</label>
                            <input
                            value={bairro}
                            type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Digite o seu Bairro..."
                            required
                            onChange={(event) => setBairro(event.target.value)}
                            />
                        </div>
                      <div className="camposDuplo">
                        <div className="campo-form">
                          <label htmlFor="cidade">Cidade:</label>
                          <input
                            value={cidade}
                            type="text"
                            id="cidade"
                            name="cidade"
                            placeholder="Digite sua cidade..."
                            required
                            onChange={(event) => setCidade(event.target.value)}
                            
                          />
                        </div>
                        <div className="campo-form">
                          <label htmlFor="selecao_uf">UF:</label>
                          <select
                            className="selecao_uf"
                            name="selecao_uf"
                            id="selecao_uf"
                            required
                            value={uf}
                            onChange={(event) => setUf(event.target.value)}
                          >
                            <option disabled value="">
                              Selecione:
                            </option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                          </select>
                        </div>
                      </div>
                    </form>

                    <div className="btnVoltar">
                      {/* <a href="#" onClick={msgSalvarPerfil}>Salvar</a> */}
                      <Link to="/#" onClick={msgSalvarPerfil}>
                        Salvar
                      </Link>

                      {/* <a href="#" onClick={historyBack}>Cancelar</a> */}
                      {/* <Link to="/#" onClick={historyBack}>Cancelar</Link> */}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditarPerfilDoador;
