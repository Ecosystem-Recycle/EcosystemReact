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
    // const [dadosAnuncio, setDadosAnuncio] = useState<any[]>([]);
    let dadosAnuncio:any = []
    

    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
    };

    useEffect( () => {
        document.title = "Minhas Publicações - Ecosystem e Recycle"

        //UseState pega Objeto Usuario Logado
        // setUserId(userObj)
        //declaração Vazia do Dados do anuncio afim de dar tempo para setar
        //se State usuario obtiver o ID do usuario
        buscarPublicacoes()

        // if(dadosAnuncio.length  ){
        //     alert(dadosAnuncio[0].id)
        // }   

        console.log('UserID: [useState] -> ' + dadosAnuncio.length)
    }, [ ] )
    //Ou UseEffect para atualziar os dados do anuncio
    // useEffect(() => { console.log(dadosAnuncio) }, [dadosAnuncio])

    const stringToUuid = (str:any) => {
        str = str.replace('-', '');
        return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c, p) {
          return str[p % str.length];
        });
      }
      


    function buscarPublicacoes(){
            
                 //GET todos Anuncios
        api.get("/anuncio").then((responseAnuncios: any)=>{
            

            if(dadosAnuncio.length==0){
                //pra cada anuncio total obtido
                let indexArray:number = 0
                responseAnuncios.data.forEach((anuncio:any) => {
                    //Verifica se ID do Anuncio = Id do usuarioLogado
                    
                    if(anuncio.usuario_doador.id == userId.id){
                        let anuncioObj:any = anuncio;
                            //caso positivo adiciona o Anuncio no State de Filtro
                            // dadosAnuncio=[...dadosAnuncio, anuncioObj];
                            dadosAnuncio.push(anuncioObj);
                            
                            
                            api.get("/produto/anuncio/"+dadosAnuncio[indexArray].id).then((resListaProduto: any)=>{
                                console.log(dadosAnuncio[indexArray].id)
                                let produto:any = resListaProduto.data
                                
                                dadosAnuncio[indexArray].produto = produto;
                                indexArray++;
                            })

                            // let produto = [{
                            //     "categoria": "bolo",
                            //     "nome": "banana", 
                            //     "quantidade": 2
                            //   },
                            //   {
                            //     "categoria": "bolo",
                            //     "nome": "banana", 
                            //     "quantidade": 2
                            //   },
                            //   {
                            //     "categoria": "bolo",
                            //     "nome": "banana", 
                            //     "quantidade": 2
                            //   }
                            // ];

                            
                              
                    }
                });
            
                console.log(dadosAnuncio)
            }
        }) 
        
        

        
        // api.get("/produto/anuncio/" + anuncioObj.id).then((responseProdutos: any)=>{
        //     if(responseProdutos){
        //     alert(responseProdutos.id);
        //     alert(responseProdutos.nome);
        //     alert(responseProdutos.quantidade);
        //     }
        // });
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
                                    <div className="cards">
                                        <CardDoador 
                                            title={"Celulares diversos"}
                                            imagem={imgCard002}
                                            dataPubliq={"25/03/2023"}
                                            totalItens={4}
                                            corStatus={"circle_Orange"}
                                            status={"Publicação agendada! 15/05/23 - 10:00hrs"}
                                        />
                                    </div>
                                    <div className="cards">
                                        <CardDoador 
                                            title={"Celulares diversos"}
                                            imagem={imgCard002}
                                            dataPubliq={"25/03/2023"}
                                            totalItens={4}
                                            corStatus={"circle_Orange"}
                                            status={"Publicação agendada! 15/05/23 - 10:00hrs"}
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