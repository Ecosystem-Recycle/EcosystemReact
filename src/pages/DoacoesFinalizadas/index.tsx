import AsideDoador from '../../components/AsideDoador'
import { Link } from 'react-router-dom'
import './style.css'
import '../../index.css'
import imgCadeado from '../../assets/img/cadeado.png'


function DoacoesFinalizadas() {


    return (
        <>
            <main id='mainDoacoesFinalizadas'>
                <h1>página minhas doações finalizadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <AsideDoador idSeletor={2} />

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
                                        <span>Você não possui doações finalizadas no sistema</span>
                                    </div>
                                    <div className="imgCadeado">
                                        <img src={imgCadeado} alt="Imagem de cadeado" />
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

export default DoacoesFinalizadas;