import './style.css'
import cartucho from "../../assets/img/cartuchos.png"
import Aside from "../../components/Aside"
import CardFinalizada from '../../components/CardFinalizados'
import CardColetaSeletor from '../../components/CardColetasSeletor';

function ColetasFinalizadas() {


    return (
        <>
            <main id='mainColetasFinalizadas'>
                <h1>página coletas finalizadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <Aside idSeletor={2}/>
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Coletas Agendadas</h2>
                                <p>Visualize todas as suas coletas agendadas</p>
                            </div>
                            <CardColetaSeletor idSeletor={2}/>
                            <div>
                                <div className="margem_Conteudo">
                                    <div className="Conteudo">

                                    <CardFinalizada
                                    imgBackground={cartucho}   
                                    />
                                     <CardFinalizada
                                    imgBackground={cartucho}   
                                    />
                                     <CardFinalizada
                                    imgBackground={cartucho}   
                                    />
                                     <CardFinalizada
                                    imgBackground={cartucho}   
                                    />
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

export default ColetasFinalizadas;