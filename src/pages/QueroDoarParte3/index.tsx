import './style.css'

import api from "../../utils/api"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import AsideDoador from '../../components/AsideDoador'
import LinhaProduto from '../../components/LinhaProduto'

import icoAdd from '../../assets/img/add.svg'
import imgCelular from '../../assets/img/img_celular (1).png'
import imgCelular2 from '../../assets/img/img_celular (2).png'
import pilhaCelular from '../../assets/img/img_celular.png'
import imgVazia from '../../assets/img/Vector.png'
import imgBaterias from '../../assets/img/Vector.png'




function QueroDoarParte3() {
  // const [ categoria, setCategoria ] = useState<string>("");
  // const [ nome, setNome ] = useState<string>("");
  // const [ quantidade, setQuantidade ] = useState<string>("");

  // const [ titulo, setTitulo ] = useState<string>("");
  // const [ disponibilidade, setDisponibilidade ] = useState<string>("");
  // const [ periodo, setPeriodo ] = useState<number>(0);


  const [listarProdutos, setListarProdutos] = useState<any[]>([]);
  const [ totalItens, setTotalItens ] = useState<number>(0);
  
  const [ foto, setFoto ] = useState<any>();

  const [formValues, setFormValues] = useState<any>({
    categoria: "",
    nome: "",
    quantidade: ""
  });

  const [valoresInput2, setValoresInput2] = useState<any>({
    titulo: "",
    disponibilidade: "",
    periodo: ""
  });


  useEffect( () => {
    document.title = "Quero Doar - Ecosystem e Recycle"

    carregarProduto();
}, [] )
  
  //Verificar o tipo de arquivo da Imagem
  function verificarCampoUpload( event: any ) {
    setFoto(event.target.files[0]);
  }

  function cadastrarProduto(event: any) {
        event.preventDefault();
        // setCategoria(formValues.categoria);
        // setNome(formValues.nome);
        // setQuantidade(formValues.quantidade); 
        //Array vazia que recebe os objetos    
        let produtoLista = [];
        
        //Caso tenha alugm produto essa array revebe os valores dos respectivos Objetos
        if(localStorage.getItem("listaProdutosCadastrados") != null){
          produtoLista = JSON.parse(localStorage.getItem("listaProdutosCadastrados") || "");
        }
        
        //Varialvel que recebe os valores do novo produto(Objeto)
        let novoItemLista = {
          "categoria": formValues.categoria,
          "nome": formValues.nome, 
          "quantidade": parseInt(formValues.quantidade)
        };

        //Atualiza a Lista{Array de Objetos} com o novo produto
        produtoLista.push(novoItemLista);

        localStorage.setItem('listaProdutosCadastrados', JSON.stringify(produtoLista));


        //Limpa os Campos apos atualizar
        setFormValues({
          categoria: "",
          nome: "",
          quantidade: ''
        });

        carregarProduto();
        
        // let listaProdutos = [];
        // if(localStorage.getItem("listaProdutosCadastrados") != null){
        //   listaProdutos = JSON.parse(localStorage.getItem("listaProdutosCadastrados"));
        // }
        
        // api.post("users", formData).then( (response) => {
        //     console.log(response)
        //     alert("Usuário criado com sucesso! 😊🤗")
        //     // Navegação para login
        // }).catch( (error) => {
        //     console.log(error)
        // })

    }
    function formatDate(date:Date, format:string) {
      const map: any = {
          mm: date.getMonth() + 1,
          dd: date.getDate(),
          aa: date.getFullYear().toString().slice(-2),
          aaaa: date.getFullYear()
      }
      return format.replace(/map.mm|dd|aa|aaaa/gi, matched => map[matched])
    }


    function cadastrarAnuncio(event: any) {
      event.preventDefault();
      const formData = new FormData();

      formData.append("titulo", valoresInput2.titulo)
      formData.append("disponibilidade", valoresInput2.disponibilidade)
      formData.append("periodo", valoresInput2.periodo)
      formData.append("usuario_id", "05e3d70c-3233-421d-a8bd-3017bbff0abf");
      formData.append("tipo_status", "Aguardando Coleta");
      formData.append("imagem", foto);
      //formData.append("hardSkills", JSON.stringify(skillsSelecionadas)) Caso tenha um array
      api.post("anuncio", formData).then( (response) => {
        console.log(response)
        alert("Anuncio criado com sucesso! >.< ")
        // Navegação para login
      }).catch( (error) => {
          console.log(error)
      })
      //Varialvel que recebe os valores do novo Anuncio(Objeto)
      // let novoAnuncio = {
      //   "titulo": valoresInput2.titulo,
      //   "disponibilidade": valoresInput2.disponibilidade, 
      //   "periodo": valoresInput2.periodo,
      //   "data_cadastro": formatDate(hoje,"aaaa-mm-dd"),
      //   "tipo_status": "Aguardando Coleta",
      //   "imagem": foto
      // };

      //                OU

      //Limpa os Campos do Anuncio
      setValoresInput2({
        titulo: "",
        disponibilidade: "",
        periodo: ''
      });
    }
  

function carregarProduto(){
  let listaCarregada:any = [];
  setListarProdutos(listaCarregada);
  if(localStorage.getItem("listaProdutosCadastrados") != null){
      //Guarda as informações na Array e converte string para Objeto
      listaCarregada = JSON.parse(localStorage.getItem("listaProdutosCadastrados") || "");
  }
    //Cadastra a nova listaAtualizada
    setListarProdutos(listaCarregada);
    let total = 0;

    listaCarregada.forEach((item:any) => {
               //Atualiza a Lista com o novo produto
               total+=(item.quantidade)
             });
    setTotalItens(total);
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
                      {listarProdutos.map((produto:any, index: number) => (          
                          <tr  key={index}>
                              <LinhaProduto
                                descricaoNome={produto.nome}
                                descricaoQuantidade={produto.quantidade}
                              />
                          </tr>
                      )
                        )}
                      </tbody>
                    </table>
                    <div className="totalItens">
                      <span>total de itens:</span>
                      <div>
                        <span>{totalItens}</span>
                      </div>
                    </div>
                  </section>
                  <section className="gerarAnuncio">
                    <h3>Informações gerais para doação:</h3>
                    <form onSubmit={ cadastrarAnuncio } className="cad_formulario" method="post">
                      <div className="campo-form">
                        <label htmlFor="titleDoacao">Título da doação:</label>
                        <input 
                          type="text" 
                          id='titleDoacao' 
                          name='titleDoacao' 
                          placeholder='Digite aqui o título do lote de doações que irá disponibilizar'
                          required
                          onChange={ (event) =>  setValoresInput2({...valoresInput2, titulo: event.target.value}) }
                        />
                      </div>
                      <div className="camposDuplo">
                        <div className="campo-form">
                          <label htmlFor="horarioDisponivel">Disponibilidade de data para retirada:</label>
                          <input 
                            type="text" 
                            id='horarioDisponivel' 
                            name='horarioDisponivel' 
                            placeholder='Ex: Seg-Sex // Ter e Qua'
                            required
                            onChange={ (event) =>  setValoresInput2({...valoresInput2, disponibilidade: event.target.value}) }
                           />
                        </div>
                        <div className="campo-form">
                          <label htmlFor="selectPeriodo">Selecione o periodo:</label>
                          <select 
                            className="selectPeriodo"  
                            name="selectPeriodo" 
                            id="selectPeriodo" 
                            placeholder="Selecione"
                            required
                            
                            value={valoresInput2.periodo}
                            onChange={ (event) =>  setValoresInput2({...valoresInput2, periodo: event.target.value}) }
                            >
                              <option selected disabled value="">Selecione</option>
                              <option value="Manha">Manhã</option>
                              <option value="Tarde">Tarde</option>
                              <option value="Noite">Noite</option>
                              <option value="Integral">Integral</option>
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
                          <input 
                            type="file" 
                            name="add-single-img" 
                            id="add-single-img" 
                            accept="image" 
                            onChange={ verificarCampoUpload }
                          />
                          
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
                        <button type="submit">
                          Publicar
                        </button>
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