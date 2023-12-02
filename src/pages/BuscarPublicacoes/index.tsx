import './style.css'
import image12 from "../../assets/img/image 12.png"
import image8 from "../../assets/img/image 8.png"
import image9 from "../../assets/img/image 9.png"
import image15 from "../../assets/img/image 15.png"
import Aside from '../../components/Aside'
import { Link } from "react-router-dom";
import CardBuscarPublicacoes from '../../components/CardBuscarPublicacoes'


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
                            <CardBuscarPublicacoes
                                    src={image12}
                                    alt={""}
                                    />
                                     <CardBuscarPublicacoes
                                    src={image9}
                                    alt={""}
                                    />
                                       <CardBuscarPublicacoes
                                    src={image8}
                                    alt={""}
                                    />
                                        <CardBuscarPublicacoes
                                    src={image15}
                                    alt={""}
                                    />
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default BuscarPublicacoes;