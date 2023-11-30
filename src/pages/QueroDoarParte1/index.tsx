import './style.css'
import '../../index.css'
import imgEletronicos from '../../assets/img/img_eletronicos.png'
import imgInformatica from '../../assets/img/img_informatica.png'
import imgLinhaBranca from '../../assets/img/img_linha_branca.png'
import imgBaterias from '../../assets/img/img_baterias_diversas.png'
import AsideDoador from '../../components/AsideDoador'
import CardCategoria from '../../components/CardCategoria'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

function QueroDoarParte1() {

    return (
        <>
            <main id='mainQueroDoarParte1'>
                <h1>página quero doar parte 1 ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <AsideDoador idSeletor={1}/>
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Quero Doar!</h2>
                                <p className="txt_mensagem">
                                    Aqui você pode selecionar a <br /> categoria do produto que gostaria
                                    de cadastrar.
                                </p>
                            </div>
                            <div>
                                <div className="margem_Conteudo">
                                    <div className="Conteudo">
                                        <div>
                                            <div className="parte_de_cima">
                                                <CardCategoria
                                                titulo={"Eletroeletrônicos"}
                                                src={imgEletronicos}
                                                alt={"imagem eletrônicos"}
                                                />

                                                <CardCategoria
                                                titulo={"Informática"}
                                                src={imgInformatica}
                                                alt={"imagem infrmatica"}
                                                />
                                            </div>
                                            <div className="parte_de_baixo">
                                                <CardCategoria
                                                titulo={"Linha Branca"}
                                                src={imgLinhaBranca}
                                                alt={"imagem linha branca"}
                                                />

                                                <CardCategoria
                                                titulo={"Baterias Diversas"}
                                                src={imgBaterias}
                                                alt={"imagem baterias diversas"}
                                                />
                                            </div>
                                        </div>
                                        <div className="btnVoltar">
                                            {/* <a
                                                href="../Tela_Quero_Doar_Parte_2/index.html"
                                                className="btn_avancar"
                                            >
                                                Avançar
                                            </a> */}
                                            <Link to="/querodoarpt2">Avançar</Link>
                                            <a
                                                href="../Tela_Quero_Doar_Pt1/index.html"
                                                className="btn_cancelar"
                                                onClick={history.back}
                                            >
                                                Cancelar
                                            </a>
                                        </div>
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

export default QueroDoarParte1;