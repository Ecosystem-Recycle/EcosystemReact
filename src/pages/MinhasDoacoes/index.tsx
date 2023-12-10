import AsideDoador from '../../components/AsideDoador'
import CardDoador from '../../components/CardDoador'
import { Link } from 'react-router-dom'

import './style.css'

import { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import api from '../../utils/api'
//Ate sumir


function MinhasDoacoes() {

    const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    const [produtolista, setProdutoLista] = useState<any[]>([]);
    const [anunciolista, setAnuncioLista] = useState<any[]>([]);


    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
    };

    useEffect( () => {
        document.title = "Minhas Publicações - Ecosystem e Recycle"
        if(produtolista.length===0){
            carregarProdutos()
        }
        if(anunciolista.length===0){
            buscarPublicacoes()
        }
    }, [] )
    
    useEffect(() => {
        // console.log(produtolista);
        // console.log(anunciolista);
      }, []); 
    


    function carregarProdutos(){
        api.get("/produto").then((resListaProduto: any)=>{
            let listaProdutos:any = []
            listaProdutos = resListaProduto.data
            setProdutoLista(listaProdutos);
        })
    }

    function buscarPublicacoes(){
        let dadosAnuncio:any = []
        //GET todos Anuncios
        api.get("/anuncio").then((responseAnuncios: any)=>{          
                //pra cada anuncio total obtido
                responseAnuncios.data.forEach((anuncio:any) => {
                    //Verifica se ID do Anuncio = Id do usuarioLogado
                    
                    if( (anuncio.usuario_doador.id == userId.id) && (anuncio.tipo_status_anuncio.nome != "Coleta Finalizada") ){
                            
                            dadosAnuncio.push(anuncio);
                    }
                    
                });
                setAnuncioLista(dadosAnuncio)
            })
            
    }
    function renderColor(str:string){
        if(str=="Aguardando Agendamento"){
            return "circle_Yellow"
         }if(str =="Coleta Agendada"){
            return "circle_Green"
         }else{
            return "circle_Orange"
         }
    }

    function filtrarProdutos(anuncio:any){
            let produto:any = []

            produtolista.forEach((item:any):any => {   
                if(item.anuncio.id === anuncio.id){

                    if (typeof item ==="object" && item.length != 0){
                      
                        if(item != undefined && item !=null){
                            if(typeof item != 'undefined'){
                                // console.log(typeof item)
                                produto.push(item)
                                 
                            }
                        }
                    }
                }
                
                console.log(produto)

            });
            return produto
    }

    function somarProdutos(anuncio:any):number{
        var sum = 0; 

            for(var i =0;i<anuncio.length;i++){ 
                sum+=anuncio[i].quantidade; 
            } 

            console.log(sum);

          return sum;
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
                                    {
                                        
                                        anunciolista.map((anuncio: any, index: number) => {
                                            return <div className="cards" key={index}>
                                                <CardDoador 
                                                    title={ anuncio.titulo }
                                                    imagem={ anuncio.url_imagem }
                                                    dataPubliq={ anuncio.data_cadastro }
                                                    totalItens={ somarProdutos(filtrarProdutos(anuncio)) }
                                                    descricoes={ filtrarProdutos(anuncio) }
                                                    corStatus={ renderColor(anuncio.tipo_status_anuncio.nome) }
                                                    status={ anuncio.tipo_status_anuncio.nome }
                                                />
                                            </div>
                                        })
                                    }  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default MinhasDoacoes;