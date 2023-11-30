import './style.css'

import imgBaterias from '../../assets/img/img_Baterias.png'
import imgCelular from '../../assets/img/img_celular (1).png'
import imgCelular2 from '../../assets/img/img_celular (2).png'
import pilhaCelular from '../../assets/img/img_celular.png'
import imgVazia from '../../assets/img/Vector.png'
import AsideDoador from '../../components/AsideDoador'
import CardUploadImagem from '../../components/CardUploadImagem'
import { Link } from 'react-router-dom'

function QueroDoarParte2() {

  //Mensagens dos botões
  function msgSalvarDoacao() {
    alert('Doação cadastrada com sucesso! Em breve um parceiro irá entrar em contato');
  };


  return (
    <>
      <main id='mainQueroDoarParte2'>
        <h1>página quero doar parte 2 ecosystem &amp; recycle</h1>
        <section>
          <div className="conteudo_doacoes wrapper">
            <AsideDoador idSeletor={1}/>
            <div className="menu_Direito">
              <div className="title">
                <h2>Quero Doar!</h2>
                <p>
                  Aqui você pode selecionar a<br />
                  categoria do produto que gostaria de cadastrar
                </p>
              </div>
              <div>
                <div className="Conteudo">
                  <div className="nada_consta">
                    <div className="nomeMarca">
                      <form>
                        <label htmlFor="fname">
                          Informe quais produtos pretende doar:
                        </label>
                        <input
                          className="input"
                          type="text"
                          id="fname"
                          name="fname"
                        />{" "}
                        <br />
                        <br />
                        <label htmlFor="lname">
                          Informe qual a marca destes produtos:
                        </label>
                        <input
                          className="input"
                          type="text"
                          id="lname"
                          name="lname"
                        />
                      </form>
                    </div>
                    <div className="descricao">
                      <form>
                        <label htmlFor="descricao">Descrição:</label> <br />
                        {/* <input type="text" id="descricao" name="descricao"> <br> */}
                        <textarea
                          id="descricao"
                          name="descricao"
                          rows={10}
                          cols={40}
                          defaultValue={""}
                        />
                        <br />
                      </form>
                    </div>
                    <div className="data">
                      <form>
                        <label htmlFor="data">Data para Coleta do Lixo:</label>
                        <input
                          className="input"
                          type="date"
                          name="calendario"
                          id="calendario"
                        />
                      </form>
                    </div>
                    <div className="agendamento">
                      <form>
                        <label className="horario" htmlFor="horario">
                          Disponibilidade de horário para retirada:
                        </label>
                        <br />
                        <br />
                        <input
                          className="teste"
                          type="radio"
                          id="manha"
                          name="fav_language"
                          defaultValue="Manhã"
                        />
                        <label className="manha" htmlFor="manha">
                          Manhã: de 09:00h às 12:00h
                        </label>{" "}
                        <br />
                        <input
                          type="radio"
                          id="tarde"
                          name="fav_language"
                          defaultValue="Tarde"
                        />
                        <label className="tarde" htmlFor="tarde">
                          Tarde: de 13:00h às 18:00h
                        </label>{" "}
                        <br />
                        <input
                          type="radio"
                          id="noite"
                          name="fav_language"
                          defaultValue="Noite"
                        />
                        <label className="noite" htmlFor="noite">
                          Noite: de 18:00h às 22:00h
                        </label>
                      </form>
                    </div>
                    <div className="tipoEletronico">
                      <form>
                        <label className="tipo" htmlFor="tipoEletronico">
                          Tipo de Eletrônico:
                        </label>
                        <br />
                        <br />
                        <input
                          type="checkbox"
                          id="tipo1"
                          name="tipo1"
                          defaultValue="Celular"
                        />
                        <label className="celular" htmlFor="tipo1">
                          {" "}
                          Celular
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="tipo2"
                          name="tipo2"
                          defaultValue="Computador"
                        />
                        <label className="computador" htmlFor="tipo2">
                          {" "}
                          Computador
                        </label>{" "}
                        <br />
                        <input
                          type="checkbox"
                          id="tipo3"
                          name="tipo3"
                          defaultValue="Monitor"
                        />
                        <label className="monitor" htmlFor="tipo3">
                          {" "}
                          Monitor
                        </label>{" "}
                        <br />
                        <input
                          type="checkbox"
                          id="tipo4"
                          name="tipo4"
                          defaultValue="Perifericos"
                        />
                        <label className="perifericos" htmlFor="tipo4">
                          {" "}
                          Perifericos
                        </label>{" "}
                        <br />
                        <input
                          type="checkbox"
                          id="tipo5"
                          name="tipo5"
                          defaultValue="Baterias"
                        />
                        <label className="baterias" htmlFor="tipo5">
                          {" "}
                          Baterias
                        </label>{" "}
                        <br />
                        <input
                          type="checkbox"
                          id="tipo6"
                          name="tipo6"
                          defaultValue="Outros"
                        />
                        <label className="outros" htmlFor="tipo6">
                          {" "}
                          Outros
                        </label>
                      </form>
                    </div>
                    <div className="condicoesMateriais">
                      <form>
                        <label className="condicoes" htmlFor="condicoes">
                          Condição dos Materiais:
                        </label>
                        <br />
                        <br />
                        <input
                          type="radio"
                          id="desmontagem"
                          name="fav_language"
                          defaultValue="Desmonstagem"
                        />
                        <label htmlFor="desmontagem">
                          Desmontagem/Retirada de Peças
                        </label>{" "}
                        <br />
                        <input
                          type="radio"
                          id="parcial"
                          name="fav_language"
                          defaultValue="parcial"
                        />
                        <label htmlFor="parcial">Funcionamento Parcial</label> <br />
                        <input
                          type="radio"
                          id="cuidados"
                          name="fav_language"
                          defaultValue="Cuidados"
                        />
                        <label htmlFor="cuidados">
                          Requer Cuidados Especiais no Manuseio
                        </label>{" "}
                        <br />
                        <input
                          type="radio"
                          id="descarte"
                          name="fav_language"
                          defaultValue="Descarte"
                        />
                        <label htmlFor="descarte">Descarte Total</label>
                      </form>
                    </div>
                    <div className="itens">
                      <form className="qtdItens">
                        <span>Informe a Quantidade de Itens: </span>
                        <input
                          className="input"
                          type="number"
                          name="quantidade"
                          min={1}
                          max={100}
                        />
                      </form>
                    </div>
                    <div className="arquivos">
                      <div className="adicionarFotos">
                        <img
                          src={imgBaterias}
                          alt="Upload de Imagem"
                        />
                        {/* <input type="file" accept="image/*"> */}
                        {/* <button type="file">+ Adicionar Fotos</button> */}
                        
                        
                        {/* <div className="box">
					<input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected"/>
					<label for="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>+ Adicionar Fotos</span></label>
				</div> */}


                        <input type="file" name="arquivo" id="add-single-img" accept="image" />
                        {/* <label type="file" for="imagens" ></label> */}
                        {/* <input type="file" id="add-single-img" name="arquivos" class="btn btn-success" multiple /> */}
                      </div>

                        
                      <div className="alinhamentoImg">
                      <CardUploadImagem
                        src={imgCelular}
                        alt={"Um Celular"}
                        />
                        {/* <div>
                              <img src="../Tela_Quero_Doar_Parte_2/img/ico_img1.png" alt="Icone de excluir">
                          </div> */}
                           <CardUploadImagem
                        src={imgCelular2}
                        alt={"Pilha de Celulares"}
                        />
                        {/* <div>
                              <img src="../Tela_Quero_Doar_Parte_2/img/ico_img1.png" alt="Icone de excluir">
                          </div> */}
                        <CardUploadImagem
                        src={pilhaCelular}
                        alt={"Pilha de Celulares"}
                        />
                        {/* <div>
                              <img src="../Tela_Quero_Doar_Parte_2/img/ico_img1.png" alt="Icone de excluir">
                          </div> */}
                       <CardUploadImagem
                        src={imgVazia}
                        alt={"Imagem Vazia 1"}
                        />
                        <CardUploadImagem
                        src={imgVazia}
                        alt={"Imagem Vazia 1"}
                        />
                      </div>
                    </div>
                    <div className="btnVoltar">
                      <a
                        href="../Tela_Minhas_Doacoes/index.html"
                        onClick={msgSalvarDoacao}
                      >
                        Salvar
                      </a>
                      {/* <a href="../Tela_Quero_Doar_Pt1/index.html">Cancelar</a> */}
                      <Link to="/querodoarpt1">Cancelar</Link>
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

export default QueroDoarParte2;