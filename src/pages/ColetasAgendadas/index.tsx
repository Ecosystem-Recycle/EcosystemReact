import './style.css';

import img_card_001 from '../../assets/img/img_card_001.png'
import img_card_002 from '../../assets/img/img_card_002.png'
import Aside from '../../components/Aside';
import Card from '../../components/Card';
import CardColetaSeletor from '../../components/CardColetasSeletor';


function AgendarColeta() {

    function msgDeletarColeta() {
        alert('A doação foi cancelada! O doador irá ser notificado');
    };

    return (
        <>
            <main id='mainColetasAgendadas'>
                <h1>página coletas agendadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        {/* Abaixo está sendo chamado o  componente aside */}
                        <Aside idSeletor={2} />

                        <div className="menu_Direito">
                            <div className="title">
                                <h2>coletas agendadas</h2>
                                <p>Visualize o histórico e agendamentos ativos aqui</p>
                            </div>
                            <div>
                                <CardColetaSeletor idSeletor={1}/>
                                <div className="historic_cards">
                                    <div className="Conteudo_Cards">

                                        {/* Importação do Card */}
                                        <Card
                                            tituloCard='Celulares antigos'
                                            imgBackground={img_card_001}
                                            conteudoCardData='30/03/2023'
                                            conteudoCardQuantidade='3'
                                            conteudoCardOwner='Luís'
                                            quantidadeProduto1='5'
                                            descricao1='Celular Samsung A5'
                                            quantidadeProduto2='2'
                                            descricao2='Iphone 2'
                                            localizacao='SBC-SP'
                                        />
                                        <Card
                                            tituloCard='Celulares novos'
                                            imgBackground={img_card_002}
                                            conteudoCardData='30/03/2023'
                                            conteudoCardQuantidade='3'
                                            conteudoCardOwner='Luís'
                                            quantidadeProduto1='5'
                                            descricao1='Celular Samsung A5'
                                            quantidadeProduto2='2'
                                            descricao2='Iphone 2'
                                            localizacao='SBC-SP'
                                        />

                                        <Card
                                            imgBackground={img_card_002}
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

export default AgendarColeta;