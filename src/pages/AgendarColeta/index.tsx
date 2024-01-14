import { useEffect, useState } from 'react';
import './style.css';

import Aside from '../../components/Aside';
import { useNavigate } from 'react-router-dom';
import CardAgendarColeta from '../../components/CardAgendarColeta';
import secureLocalStorage from 'react-secure-storage';
import api from '../../utils/api';


function AgendarColeta() {

    const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    const navigate = useNavigate()
    const [anuncioInfo] = useState<any>(secureLocalStorage.getItem("anuncioInfo"));

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
                                                id="data"
                                                onChange={(event) => {setData(event.target.value) } }
                                                required
                                            />
                                        </div>
                                        <div className="campo-form">
                                            <label htmlFor='periodo'>Período:</label>
                                            <input
                                                type="text"
                                                name='periodo'
                                                id='periodo'
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