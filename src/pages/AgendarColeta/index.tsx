import { useState } from 'react';
import './style.css';

import Aside from '../../components/Aside';
// import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import CardAgendarColeta from '../../components/CardAgendarColeta';





function AgendarColeta() {

    function cadastroAgendamento(event: any) {
        event.preventDefault()
        console.log(`${data}, ${horario}, ${comentario} testes ok`)
    }

    const [data, setData] = useState<string>("")
    const [horario, setHorario] = useState<string>("")
    const [comentario, setComentario] = useState<string>("")

    return (
        <main id='mainAgendarColeta'>
            <h1>página agendar coleta ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <Aside idSeletor={2}/>
                    <div className="conteudoPublicacoes">
                        <div className="headerPublicacoes">
                            <h2>Agendar Coleta</h2>
                            <p>Agende aqui a sua retirada do material</p>
                        </div>
                        <div className="containerCard">

                            < CardAgendarColeta />
                            <form onSubmit={cadastroAgendamento} className="cardBottom">
                                <div className="cardBottomPt1">
                                    <div>
                                        <label htmlFor='data'>Data:</label>
                                        <textarea
                                            defaultValue={""}
                                            // type="text"
                                            name='data'
                                            onChange={(event) => {setData(event.target.value) } }
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Horário</label>
                                        <textarea
                                            defaultValue={""}
                                            onChange={(event) => {setHorario(event.target.value) } }
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="cardBottomPt2">
                                    <label>Observação</label>
                                    <textarea
                                        defaultValue={""}
                                        onChange={(event) => {setComentario(event.target.value) } }
                                        required
                                    />
                                </div>
                                <div>
                                    <input type="submit" value="cadastrar" />
                                </div>
                            </form>
                            {/* <a href="../Tela_Coletas_Agendadas/index.html">Agendar</a> */}

                            <Link to="/coletasagendadas">Agendar</Link>

                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AgendarColeta;