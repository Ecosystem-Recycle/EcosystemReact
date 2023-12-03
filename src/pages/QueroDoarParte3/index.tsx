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
import { useEffect, useState } from 'react'

function QueroDoarParte3() {
  // const [ categoria, setCategoria ] = useState<string>("");
  // const [ nome, setNome ] = useState<string>("");
  // const [ quantidade, setQuantidade ] = useState<string>("");

  const [ titulo, setTitulo ] = useState<string>("");
  const [ disponibilidade, setDisponibilidade ] = useState<string>("");
  const [ periodo, setPeriodo ] = useState<number>(0);
  const [ foto, setFoto ] = useState<any>();

  const [formValues, setFormValues] = useState({
    categoria: "",
    nome: "",
    quantidade: ""
  });

  useEffect( () => {
    document.title = "Quero Doar - Ecosystem e Recycle"

    carregarProduto();
}, [] )
  

  // function verificarCampoUpload( event: any ) {
  //   setFoto(event.target.files[0]);
  // }

  function cadastrarProduto(event: any) {
        event.preventDefault();
        // setCategoria(formValues.categoria);
        // setNome(formValues.nome);
        // setQuantidade(formValues.quantidade);     
        let produtoLista = [];
        //Caso tenha alugm produto essa array revebe os valores da lista
        if(localStorage.getItem("listaProdutosCadastrados") != null){
          produtoLista = JSON.parse(localStorage.getItem("listaProdutosCadastrados") || "");
        }
        
        //Array que recebes os novos valores dos campos
        let novoItemLista = [{
          "categoria": formValues.categoria,
          "nome": formValues.nome, 
          "quantidade": parseInt(formValues.quantidade)
        }];

        //Atualiza a Lista com o novo produto
        produtoLista.push(novoItemLista);

        //Salva a nova lista de produto no LocalStorage
        localStorage.setItem('listaProdutosCadastrados', JSON.stringify(produtoLista));

        //Limpa os Campos apos atualizar
        setFormValues({
          categoria: "",
          nome: "",
          quantidade: ''
        });

        carregarProduto();
        // const formData = new FormData();

        // formData.append("nomeProduto", nome);
        // formData.append("selectCategoria", categoria);
        // formData.append("quantidadeProduto", quantidade);


        // useEffect(() => {
        //   localStorage.setItem('dataKey', JSON.stringify(data));
        // }, [data]);



        // let listaProdutos = [];
        // if(localStorage.getItem("listaProdutosCadastrados") != null){
        //   listaProdutos = JSON.parse(localStorage.getItem("listaProdutosCadastrados"));
        // }
        
        // console.log(formData);
        // api.post("users", formData).then( (response) => {
        //     console.log(response)
        //     alert("Usuário criado com sucesso! 😊🤗")
        //     // Navegação para login
        // }).catch( (error) => {
        //     console.log(error)
        // })

    }
    function carregarProduto(){
      let listaCarregada = [];
      if(localStorage.getItem("listaProdutosCadastrados") != null){
          //Guarda as informações na Array e converte string para Objeto
          listaCarregada = JSON.parse(localStorage.getItem("listaProdutosCadastrados") || "");
      }
  
      if(listaCarregada.length == 0){
          //se a lista estiver vazia mostre uma msg
          let tabela = document.getElementById("corpo-tabela")  as HTMLTableElement;
  
          tabela.innerHTML = `<tr class="linha-mensagem">
              <td colspan="3">Nenhum Produto Cadastrado 😢</td>
          </tr>`
      } else{
        let tabela = document.getElementById("corpo-tabela")  as HTMLTableElement;
        let template = "";
          //Mostrar conteúdo da tabela
        listaCarregada.forEach((item:any) => {
          template += `<tr>
            <td data-cell="nome">${item.nome}</td>
            <td data-cell="quantidade">${item.quantidade}</td>
            <td data-cell="del_Ico"><img src={ icoDeletar } alt="Ícone de deletar uma linha de doação" /></td>
          </tr>`
        });
        tabela.innerHTML = template;
      }
  }




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
                  <h3>Adicionar Itens a sua lista de doação:</h3>
                  <form onSubmit={ cadastrarProduto } className="cad_formulario" method="post">
                    <div className="camposDuplo">
                      <div className="campo-form">
                        <label htmlFor="selectCategoria">Selecione uma categoria:</label>
                            <select 
                              className="selectCategoria"  
                              name="selectCategoria" 
                              id="selectCategoria" 
                              placeholder="Selecione"
                              required
                              value={formValues.categoria}
                              onChange={ (event) =>  setFormValues({...formValues, categoria: event.target.value}) }  
                            >   <option selected disabled value="">Selecione</option>
                                <option value="Informatica">Informatica</option>
                                <option value="Telefonia">Telefonia</option>
                                <option value="Peças e Acessorios">Peças e Acessorios</option>
                            </select>
                      </div>
                      <div className="campo-form">
                        <label htmlFor="nomeProduto">Descrição do produto:</label>
                        <input 
                          value={formValues.nome}
                          type="text" 
                          name='nomeProduto'
                          id='nomeProduto'
                          placeholder='Digite o nome & marca do produto'
                          required
                          onChange={ (e) =>  setFormValues({...formValues, nome: e.target.value}) }  
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="quantidadeProduto">Informe a quantidade:</label>
                        <input 
                          value={formValues.quantidade}
                          type="text" 
                          name='quantidadeProduto'
                          id='quantidadeProduto'
                          placeholder='Digite a quantidade'
                          required
                          onChange={ (event) =>  setFormValues({...formValues, quantidade: event.target.value}) }  
                        />
                      </div>
                    </div>
                    <div className="btn_form cad_botao">
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
                              <th colSpan={2}>Quantidade</th>                   
                          </tr>
                      </thead>
                      <tbody id="corpo-tabela">
                        {/* <tr>
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
                        </tr>  */}
                      </tbody>
                    </table>
                    <div className="totalItens">
                      <span>total de itens:</span>
                      <div>
                        <span>20</span>
                      </div>
                    </div>
                  </section>
                  <section className="gerarAnuncio">
                    <h3>Informações gerais para doação:</h3>
                    <form>
                      <div className="campo-form">
                        <label htmlFor="titleDoacao">Título da doação:</label>
                        <input type="text" name='titleDoacao' placeholder='Digite aqui o título do lote de doações que irá disponibilizar' />
                      </div>
                      <div className="camposDuplo">
                        <div className="campo-form">
                          <label htmlFor="horarioDisponivel">Disponibilidade de data para retirada:</label>
                          <input type="text" name='horarioDisponivel' placeholder='Ex: Seg-Sex // Ter e Qua' />
                        </div>
                        <div className="campo-form">
                          <label htmlFor="selectPeriodo">Selecione o periodo:</label>
                          <select className="selectPeriodo"  name="selectPeriodo" id="selectPeriodo" placeholder="Selecione">
                              <option value="Celular">Manhã</option>
                              <option value="Celular">Tarde</option>
                              <option value="Iphone">Noite</option>
                              <option value="Iphone">Integral</option>
                          </select>
                        </div>
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
                  </section>
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