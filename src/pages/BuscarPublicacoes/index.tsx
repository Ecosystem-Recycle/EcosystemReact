import './style.css'
import image12 from "../../assets/img/image 12.png"
import image8 from "../../assets/img/image 8.png"
import image9 from "../../assets/img/image 9.png"
import image15 from "../../assets/img/image 15.png"
import Aside from '../../components/Aside'
import { Link } from "react-router-dom";


function BuscarPublicacoes() {


    return (
        <>
            <main id='mainBuscarPublicacoes'>
                <h1>página buscar por publicações ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <Aside idSeletor={2} />
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Buscar por Publicações</h2>
                                <p>Veja todas as publicações ativas mais próximas de você!</p>
                            </div>
                            {/* <div> */}
                                <div id="um" className="cardAgendar">
                                    <div>
                                        <img src={image12} alt="" />
                                    </div>
                                    <div className="conteudoCard">
                                        <div className="cardInformacao">
                                            <h2>celulares diversos</h2>
                                            <p>Data de publicação 30/03/2023</p>
                                            <p>quandidade de iten(s): 4</p>
                                            <div>
                                                <p>Descrição: </p>
                                                <div>
                                                    <p>1x Celular Samsung Modelo J5 Prime</p>
                                                    <p>1x Iphone 4 Plus...</p>
                                                </div>
                                            </div>
                                            <p>sbc - sp</p>
                                        </div>
                                        {/* <a href="../Tela_Agendar_Coleta/index.html">Agendar</a> */}
                                        <Link to="/agendarcoleta">Agendar</Link>
                                    </div>
                                </div>
                                <div id="dois" className="cardAgendar">
                                    <div>
                                        <img src={image8} alt="" />
                                    </div>
                                    <div className="conteudoCard">
                                        <div className="cardInformacao">
                                            <h2>Celulares antigos de diversas marcas e modelos</h2>
                                            <p>Data de publicação 29/03/2023</p>
                                            <p>quandidade de iten(s): 39</p>
                                            <div>
                                                <p>Descrição: </p>
                                                <div>
                                                    <p>1x Celular Samsung Modelo J5 Prime</p>
                                                    <p>3x LG 320+...</p>
                                                </div>
                                            </div>
                                            <p>sbc - sp</p>
                                        </div>
                                        {/* <a href="../Tela_Agendar_Coleta/index.html">Agendar</a> */}
                                        <Link to="/agendarcoleta">Agendar</Link>
                                        
                                    </div>
                                </div>
                                <div id="tres" className="cardAgendar">
                                    <div>
                                        <img src={image9} alt="" />
                                    </div>
                                    <div className="conteudoCard">
                                        <div className="cardInformacao">
                                            <h2>placas e circuitos eletrônicos</h2>
                                            <p>Data de publicação 30/03/2023</p>
                                            <p>quandidade de iten(s): 25</p>
                                            <div>
                                                <p>Descrição: </p>
                                                <div>
                                                    <p>Diversos...</p>
                                                </div>
                                            </div>
                                            <p>diadema - sp</p>
                                        </div>
                                        {/* <a href="../Tela_Agendar_Coleta/index.html">Agendar</a> */}
                                        <Link to="/agendarcoleta">Agendar</Link>
                                    </div>
                                </div>
                                <div id="quatro" className="cardAgendar">
                                    <div>
                                        <img src={image15} alt="" />
                                    </div>
                                    <div className="conteudoCard">
                                        <div className="cardInformacao">
                                            <h2>CPU's e Placas mãe</h2>
                                            <p>Data de publicação 28/03/2023</p>
                                            <p>quandidade de iten(s): 15</p>
                                            <div>
                                                <p>Descrição: </p>
                                                <div>
                                                    <p>10x CPUs diversos modelos</p>
                                                    <p>5x Placas diversas...</p>
                                                </div>
                                            </div>
                                            <p>diadema - sp</p>
                                        </div>
                                        {/* <a href="../Tela_Agendar_Coleta/index.html">Agendar</a> */}
                                        <Link to="/agendarcoleta">Agendar</Link>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default BuscarPublicacoes;