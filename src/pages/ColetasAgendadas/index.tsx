import './style.css';

import Aside from '../../components/Aside';
import Card from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import ColetasFinalizadas from '../../components/ColetasFinalizadas';
import ColetasAgendadas from '../../components/ColetasAgendadas'



function AgendarColeta() {

    const navigate = useNavigate()
    function troca() {
        navigate(ColetasFinalizadas)
    }

    function teste() {
        return (
            alert('teste ok')
        )
    }

    return (
        <>
            <main>
                <h1>página coletas agendadas/finalizadas ecosystem & recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        {/* Abaixo está sendo chamado o  componente aside */}
                        <Aside />


                        <div className="menu_Direito">

                            {/* TITULO BASE */}
                            <div className="title">
                                <h2>coletas agendadas</h2>
                                <p>Visualize o histórico e agendamentos ativos aqui</p>
                            </div>
                            <div>

                                {/* LINKS COLETAS ATIVAS E FINALIZADAS */}
                                <div className="links_pags">
                                    <a href="../Tela_Coletas_Agendadas/index.html">coletas ativas</a>
                                    <span>|</span>
                                    <a href="../Tela_Coletas_Finalizadas/index.html">
                                        coletas finalizadas
                                    </a>
                                    <a href="#" onClick={teste}>
                                        teste
                                    </a>
                                </div>

                                {/* CONTAINER DOS CARDS */}
                                <div id='teste2' className="historic_cards">
                                    < ColetasAgendadas />
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