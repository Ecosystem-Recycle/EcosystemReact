import './style.css';

import img_card_001 from '../../assets/img/img_card_001.png'
import img_card_002 from '../../assets/img/img_card_002.png'
// import ico_edit from '../../assets/img/ico_edit.svg';
// import ico_eye from '../../assets/img/ico_eye.svg'
// import ico_delete from '../../assets/img/ico_delete.svg'
import Aside from '../../components/Aside';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';



function AgendarColeta() {

    // let navigate = useNavigate()

    // function click() {
    //     navigate('/home')
    // }

    // function msgDeletarColeta() {
    //     alert('A doação foi cancelada! O doador irá ser notificado');
    // };

    return (
        <>
            <main id='mainColetasAgendadas'>
                <h1>página coletas agendadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        {/* Abaixo está sendo chamado o  componente aside */}
                        <Aside idSeletor={1} />

                        <div className="menu_Direito">
                            <div className="title">
                                <h2>coletas agendadas</h2>
                                <p>Visualize o histórico e agendamentos ativos aqui</p>
                            </div>
                            <div>
                                <div className="links_pags">
                                    {/* <a href="../Tela_Coletas_Agendadas/index.html">coletas ativas</a> */}
                                    <Link to="/coletasagendadas">coletas ativas</Link>

                                    <span>|</span>

                                    {/* <a href="../Tela_Coletas_Finalizadas/index.html">
                                        coletas finalizadas
                                    </a> */}
                                    <Link to="/coletasfinalizadas">coletas finalizadas</Link>


                                </div>
                                <div className="historic_cards">
                                    <div className="Conteudo_Cards">

                                        {/* Importação do Card */}
                                        <Card
                                            tituloCard='Celulares antigos'
                                            imgBackground={ img_card_001 }
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
                                            imgBackground={ img_card_002 }
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
                                            imgBackground={ img_card_002 }
                                        />

                                        
                                    </div>
                                    {/* <div className="btnVoltar">
                                        <Link to ={ click() }>voltar</Link>
                                    </div> */}
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