import './style.css'

import icoAdd from '../../assets/img/add.svg'
import icoDeletar from '../../assets/img/del.svg'
import imgCelular from '../../assets/img/img_celular (1).png'
import imgCelular2 from '../../assets/img/img_celular (2).png'
import pilhaCelular from '../../assets/img/img_celular.png'
import imgVazia from '../../assets/img/Vector.png'
import imgBaterias from '../../assets/img/Vector.png'
import AsideDoador from '../../components/AsideDoador'
import { Link } from 'react-router-dom'

function QueroDoarParte3() {

  //Mensagens dos botões
  function msgSalvarDoacao() {
    alert('Doação cadastrada com sucesso! Em breve um parceiro irá entrar em contato');
  };


  return (
    <>
      <main id='mainQueroDoarParte3'>
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
                  <div className="conteudo_wrapper">
                  <form>
                    <div className="campo-form">
                      <label htmlFor="titleDoacao">Título da doação:</label>
                      <input type="text" name='titleDoacao' placeholder='Digite aqui o título do lote de doações que irá disponibilizar' />
                    </div>
                    <div className="camposDuplo">
                      <div className="campo-form">
                        <label htmlFor="selectProduto">Selecione um item na lista abaixo:</label>
                            <select className="selectProduto"  name="selectProduto" id="selectProduto" placeholder="Selecione">
                                <option value="Celular">Celular Samsung</option>
                                <option value="Celular">Celular LG</option>
                                <option value="Iphone">Iphone 2</option>
                                <option value="Iphone">Iphone 3</option>
                                <option value="Iphone">Iphone 5s</option>
                                <option value="Ipad">Ipad Mini gen 3</option>
                                <option value="Notebook">Notebook Asus</option>
                                <option value="Notebook">Notebook LG</option>
                                <option value="Notebook">Notebook Dell</option>
                                <option value="Notebook">Notebook HP</option>
                                <option value="Notebook">Notebook Sony Vaio</option>
                                <option value="Macbook">Macbook Pro</option>
                                <option value="Macbook">Macbook</option>
                                <option value="HD">HD</option>
                                <option value="SSD">SSD</option>
                                <option value="Monitor">Monitor Samsung LCD</option>
                                <option value="Monitor">Monitor Samsung DDD</option>
                            </select>
                        {/* <input type="text" name='selectProduto' placeholder='Selecione um item' /> */}
                      </div>
                      <div className="campo-form">
                        <label htmlFor="quantidadeProduto">Informe a quantidade:</label>
                        <input type="text" name='quantidadeProduto' placeholder='Digite a quantidade' />
                      </div>
                    </div>
                    <div className="btn_form">
                      <button type="submit">
                        <div className="btnInserir">
                          <span>Incluir</span>
                          <img src={ icoAdd } alt="" />
                        </div>
                      </button>
                    </div>
                  </form>
                  <section className="listaItens">
                    <table>
                      <caption>Lista de Itens:</caption>
                      <thead>
                          <tr>
                              <th>Item</th>
                              <th>Quantidade</th>
                              <th>Excluir</th>                       
                          </tr>
                      </thead>
                      <tbody id="corpo-tabela">
                        <tr>
                            <td data-cell="item">Celular Samsung A5</td>
                            <td data-cell="quantidade">7</td>
                            <td data-cell="del_Ico"><img src={ icoDeletar } alt="Ícone de deletar uma linha de doação" /></td>
                        </tr> 
                        <tr>
                            <td data-cell="item">Iphone 2</td>
                            <td data-cell="quantidade">1</td>
                            <td data-cell="del_Ico"><img src={ icoDeletar } alt="Ícone de deletar uma linha de doação" /></td>
                        </tr>
                        <tr>
                            <td data-cell="item">Notebook Dell</td>
                            <td data-cell="quantidade">2</td>
                            <td data-cell="del_Ico"><img src={ icoDeletar } alt="Ícone de deletar uma linha de doação" /></td>
                        </tr> 
                        <tr>
                            <td data-cell="item">Macbook Pro</td>
                            <td data-cell="quantidade">2</td>
                            <td data-cell="del_Ico"><img src={ icoDeletar } alt="Ícone de deletar uma linha de doação" /></td>
                        </tr> 
                      </tbody>
                    </table>
                    <div className="totalItens">
                      <span>total de itens:</span>
                      <div>
                        <span>20</span>
                      </div>
                    </div>
                  </section>
                  <form>
                    <div className="campo-form">
                      <label htmlFor="horarioDisponivel">Disponibilidade de horário para retirada:</label>
                      <input type="text" name='horarioDisponivel' placeholder='Ex: Seg-Sex / 09:00 ás 14:00' />
                    </div>
                    <div className="arquivos">
                      <div className="adicionarFotos">
                        <div>
                          <img
                            src={ imgBaterias }
                            alt="Upload de Imagem"
                          />
                        </div>
                        <label htmlFor="add-single-img">+ Adicionar Fotos</label>              
                        <input type="file" name="add-single-img" id="add-single-img" accept="image" />
                        
                      </div>

                        
                      <div className="alinhamentoImg">
                        <img src={imgCelular} alt="Um Celular" />
                        <img src={imgCelular2} alt="Pilha de Celulares" /> 
                        <img src={pilhaCelular} alt="Pilha de Celulares" />
                        <img src={imgVazia} alt="Imagem Vazia 1" />
                        <img src={imgVazia} alt="Imagem Vazia 2" />
                        <img src={imgVazia} alt="Imagem Vazia 3" />
                      </div>
                    </div>
                    <div className="btnPublicar">
                      <a
                        href="../Tela_Minhas_Doacoes/index.html"
                        onClick={msgSalvarDoacao}
                      >
                        Publicar
                      </a>
                      <Link to="/querodoarpt1">Cancelar</Link>
                    </div>

                  </form>
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

export default QueroDoarParte3;