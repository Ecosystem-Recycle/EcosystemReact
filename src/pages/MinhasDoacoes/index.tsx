import AsideDoador from '../../components/AsideDoador'
import CardDoador from '../../components/CardDoador'
import { Link } from 'react-router-dom'

import './style.css'

import imgCard001 from '../../assets/img/img_card_001.png'
import imgCard002 from '../../assets/img/img_card_002.png'



function MinhasDoacoes() {

    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
    };

    return (
        <main>
            <h1>página minhas doações ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <AsideDoador idSeletor={2}/>
                    <div className="menu_Direito">
                        <div className="title">
                            <h2>minhas doações!</h2>
                            <p>Visualize todas as suas publicações aqui.</p>
                        </div>
                        <div>
                            <div className="links_pags">
                                {/* <a href="../Tela_Minhas_Doacoes/index.html">doações ativas</a> */}
                                    <Link to="/minhasdoacoes">doações ativas</Link>
                                    <span>|</span>
                                    {/* <a href="../Tela_Doacoes_Finalizadas/index.html">
                                        doações finalizadas
                                    </a> */}
                                    <Link to="/doacoesfinalizadas">doações finalizadas</Link>
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
                                <div className="btnVoltar">
                                    <a href="#" onClick={ history.back }>
                                        voltar
                                    </a>
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