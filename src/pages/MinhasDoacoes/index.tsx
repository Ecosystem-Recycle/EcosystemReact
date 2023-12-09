import AsideDoador from '../../components/AsideDoador'
import CardDoador from '../../components/CardDoador'
import { Link } from 'react-router-dom'

import './style.css'

import imgCard001 from '../../assets/img/img_card_001.png'
import imgCard002 from '../../assets/img/img_card_002.png'
import { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import api from '../../utils/api'
//Ate sumir


function MinhasDoacoes() {

    const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    const [produtolista, setProdutoLista] = useState<any[]>([]);
    let dadosAnuncio:any = []


    
    

    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
    };

    useEffect( () => {
        document.title = "Minhas Publicações - Ecosystem e Recycle"
        if(produtolista.length==0){
            carregarProdutos()
        }
        if(dadosAnuncio.length>0){
            buscarPublicacoes()
        }
    }, [] )
    
    useEffect(() => {
        console.log(produtolista);
        console.log(userId);
      }, [produtolista]); 
    


    function carregarProdutos(){
        api.get("/produto").then((resListaProduto: any)=>{
            let listaProdutos:any = []
            listaProdutos = resListaProduto.data
            setProdutoLista(listaProdutos);
        })
    }

    function buscarPublicacoes(){
        //GET todos Anuncios
        api.get("/anuncio").then((responseAnuncios: any)=>{
            


                //pra cada anuncio total obtido

                let indexArray:number = 0
                responseAnuncios.data.forEach((anuncio:any) => {
                    //Verifica se ID do Anuncio = Id do usuarioLogado
                    
                    if(anuncio.usuario_doador.id == userId.id){
                            // let anuncioObj:any = anuncio;
                            //caso positivo adiciona o Anuncio no State de Filtro
                            dadosAnuncio.push(anuncio);

                                // dadosAnuncio[indexArray].produto = produto
                    }
                });

                // let teste:any = []
                // dadosAnuncio.forEach((itemAnuncio:any) => {

                //     api.get("/produto/anuncio/"+itemAnuncio.id).then((resListaProduto: any)=>{

                //                 let produto:Array<any> = resListaProduto.data
                //                 teste.push(itemAnuncio);
                //                 teste[indexArray].produto = produto
                //                 // setAnuncioLista(teste);
                //                 indexArray++; 
                //     })
                        
                // });

                // console.log(dadosAnuncio)
                // console.log(produtolista[0].anuncio.titulo)               
            })

    }

    return (
        <main id='mainMinhasDoacoes'>
            <h1>página minhas publicações ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <AsideDoador idSeletor={2}/>
                    <div className="menu_Direito">
                        <div className="title">
                            <h2>minhas publicações!</h2>
                            <p>Visualize todas as suas publicações aqui.</p>
                        </div>
                        <div>
                            <div className="links_pags">
                                {/* <a href="../Tela_Minhas_Doacoes/index.html">doações ativas</a> */}
                                    <Link to="/minhasdoacoes">publicações ativas</Link>
                                    <span>|</span>
                                    {/* <a href="../Tela_Doacoes_Finalizadas/index.html">
                                        doações finalizadas
                                    </a> */}
                                    <Link to="/doacoesfinalizadas">publicações finalizadas</Link>
                            </div>
                            <div className="historic_cards">
                                <div className="Conteudo_Cards">
                                    {/* <div className="cards">
                                        <CardDoador 
                                            title={"Celulares antigos"}
                                            imagem={imgCard001}
                                            dataPubliq={"30/03/2023"}
                                            totalItens={39}
                                            corStatus={"circle_Yellow"}
                                            status={"Aguardando agendamento com coletor"}
                                        />
                                    </div> */}


                                    <div className="cards">
                                        <CardDoador 
                                            title={"Celulares antigos"}
                                            imagem={imgCard001}
                                            dataPubliq={"30/03/2023"}
                                            totalItens={39}
                                            corStatus={"circle_Yellow"}
                                            status={"Aguardando agendamento com coletor"}
                                        />
                                    </div>
                                   
                                </div>
                                {/* <div className="btnVoltar">
                                    <a href="#" onClick={ history.back }>
                                        voltar
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default MinhasDoacoes;