import { useEffect, useState } from 'react';
import './style.css';

import Aside from '../../components/Aside';
import { Link, useNavigate } from 'react-router-dom';
import CardAgendarColeta from '../../components/CardAgendarColeta';
import secureLocalStorage from 'react-secure-storage';
import api from '../../utils/api';


function AgendarColeta() {

    const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    const navigate = useNavigate()
    // const [anuncioInfo] = useState<any>(secureLocalStorage.getItem("anuncioId"));
    const [anuncioInfo] = useState<any>(
        {
            "id": "724dbf16-0041-497b-981b-477714d5b4e7",
            "titulo": "Informatica Diversos",
            "data_cadastro": "2023-12-11",
            "disponibilidade": "Segunda a Quarta",
            "periodo": "Manha",
            "url_imagem": "11122023201737.png",
            "usuario_doador": {
              "id": "f82c7c48-781e-4567-8a83-1b130897a367",
              "nome": "Cleberton Fonseca dos Santos",
              "email": "cleber.cfsantos@gmail.com",
              "senha": "$2a$10$jB7twI4oO/kXQAQRFM.TU.3QZzXm8Yr2SYeyj.sEJAKLgY7r0TC6e",
              "telefone": "11 40721307",
              "genero": "masculino",
              "cpf_Cnpj": "300585356652",
              "tipousuario": {
                "id": "c167930e-b1b5-497a-b9b5-ef3ae22792d3",
                "nome": "doador"
              },
              "endereco": {
                "id": "4f6f8fee-2a1e-47d6-bc95-a2f7ea777a8f",
                "logradouro": "Travessa dos Pássaros",
                "numero": "1500 A",
                "bairro": "Piraporinha",
                "cidade": "Diadema",
                "estado": "SP",
                "cep": "09950-695"
              },
              "enabled": true,
              "password": "$2a$10$jB7twI4oO/kXQAQRFM.TU.3QZzXm8Yr2SYeyj.sEJAKLgY7r0TC6e",
              "authorities": [
                {
                  "authority": "ROLE_DOADOR"
                }
              ],
              "username": "cleber.cfsantos@gmail.com",
              "accountNonLocked": true,
              "accountNonExpired": true,
              "credentialsNonExpired": true
            },
            "tipo_status_anuncio": {
              "id": "a4146ded-183e-48b2-ac30-bf2fda8b1f5c",
              "nome": "Aguardando Agendamento"
            }
          }
    );

    const [produtosAnuncio, setProdutosAnuncio] = useState<any[]>([]);

    const [data, setData] = useState<string>("")
    const [horario, setHorario] = useState<string>("")

    useEffect( () => {
        document.title = "Agendar Coleta - Ecosystem e Recycle"
        if(produtosAnuncio.length==0){
            carregarProdutos()
        }

    }, [] )

    useEffect(() => {
      }, [produtosAnuncio]); 

    function cadastroAgendamento(event: any) {
        event.preventDefault()

        const formData = new FormData();

        formData.append("disponibilidade", data)
        formData.append("tipo_status", "Coleta Agendada")
        formData.append("anuncio_id", anuncioInfo.id)
        formData.append("usuario_id", userId.id)

        api.post("coleta/media", formData).then( (responseAnuncio:any) => {
                alert("Anuncio Cadastrado com Sucesso")
                secureLocalStorage.removeItem("anuncioId")
                navigate("/coletasagendadas")
                navigate(0)

           }).catch( (error:any) => {
               console.log(error)
           })
    }




    function carregarProdutos(){
        api.get("/produto").then((resListaProduto: any)=>{
            let listaProdutos:any = []
            
            resListaProduto.data.forEach((item:any):any => {   
                if(item.anuncio.id === anuncioInfo.id){
                // if(item.anuncio.id == "724dbf16-0041-497b-981b-477714d5b4e7"){
                    if(typeof item != 'undefined'){
                        listaProdutos.push(item)      
                    }
                }

            });
            setProdutosAnuncio(listaProdutos);
        })
    }

    function somarProdutos(anuncio:any):number{
        let soma = 0; 

            for(var i =0;i<anuncio.length;i++){ 
                soma+=anuncio[i].quantidade; 
            } 
          return soma;
    }
    

    return (
        <main id='agendarColeta'>
            <h1>página agendar coleta ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <Aside idSeletor={2}/>
                    <div id='idConteudoPublicacoes' className="conteudoPublicacoes">
                        <div className="headerPublicacoes">
                            <h2>Agendar Coleta</h2>
                            <p>Agende aqui a sua retirada do material</p>
                        </div>
                        <div  id="containerCard"   className="containerCard">

                            < CardAgendarColeta
                                titulo={anuncioInfo.titulo}
                                imagem={ anuncioInfo.url_imagem }
                                dataPublicacao={ anuncioInfo.data_cadastro }
                                quantidadeItem={somarProdutos(produtosAnuncio)}
                                descricoes={ produtosAnuncio }
                                logradouro={anuncioInfo.usuario_doador.endereco.logradouro}
                                numero={anuncioInfo.usuario_doador.endereco.numero}
                                cidade={anuncioInfo.usuario_doador.endereco.cidade}
                                estado={anuncioInfo.usuario_doador.endereco.estado}
                                cep={anuncioInfo.usuario_doador.endereco.cep}
                                disponibilidade={ anuncioInfo.disponibilidade }
                                periodo={anuncioInfo.periodo}
                            />
                            <div className="form_text">
                                <h3>Agendar Retirada</h3>
                            </div>
                                <form onSubmit={cadastroAgendamento} className="cardBottom">
                                    <div className="cardBottomPt1">
                                        <div className="campo-form">
                                            <label htmlFor='data'>Data:</label>
                                            <input
                                                defaultValue={""}
                                                type="text"
                                                name='data'
                                                onChange={(event) => {setData(event.target.value) } }
                                                required
                                            />
                                        </div>
                                        <div className="campo-form">
                                            <label>Período:</label>
                                            <input
                                                type="text"
                                                value={ anuncioInfo.periodo }
                                                onChange={(event) => {setHorario(event.target.value) } }
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className='btnAgendar'>
                                        <button  type="submit">
                                            Agendar
                                        </button>
                                    </div>
                                </form>
                                <div className='nextStep'>
                                {/* <Link to="/buscarpublicacoes">Voltar</Link>
                                <Link to="/coletasagendadas">Agendar</Link> */}
                                </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AgendarColeta;