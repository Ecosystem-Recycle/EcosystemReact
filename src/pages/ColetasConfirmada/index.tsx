import './style.css'
import imgSucataCelulares from '../../assets/img/img_001png.png'


function ColetasConfirmada() {
    function msgRetirarMaterial() {
        alert('Confira todo o material e Confirme a retirada');
    }

    return (
        <main>
            <h1>página coletas confirmadas ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <aside>
                        <ul>
                            <li>
                                <a href="../Tela_Coletas_Agendadas/index.html">coletas agendadas</a>
                            </li>
                            <li>
                                <a href="../Tela_Buscar_Publicacoes/index.html">
                                    Buscar por publicações
                                </a>
                            </li>
                            <li>
                                <a href="../Tela_Editar_Perfil_Coletor/index.html">editar perfil</a>
                            </li>
                        </ul>
                    </aside>
                    <div className="menu_Direito">
                        <div className="title">
                            <h2>Coletas Agendadas - Agendamento Confirmado</h2>
                            <p>Confira o horário do agendamento corretamente.</p>
                        </div>
                        <div>
                            <div className="margem_Doacao">
                                <div className="Conteudo_Doacao">
                                    <div className="dados_doacao1">
                                        <div className="Title_Img_Donation">
                                            <h5>Celulares antigos de diversas marcas e modelos</h5>
                                            <img
                                                src={imgSucataCelulares}
                                                alt="Imagem com sucata de celulares"
                                            />
                                        </div>
                                        <div>
                                            <h4>Dados da Retirada</h4>
                                            <p>Data de publicação: 30/03/2023</p>
                                            <p>Quantidade de iten(s): 39</p>
                                            <p>Responsável: Luís</p>
                                            <p>Descrição:</p>
                                            <p>
                                                <span>5x Celular Samsung A5</span>
                                            </p>
                                            <p>
                                                <span>2x Iphone 2</span>
                                            </p>
                                            <p>
                                                <span>7x Celular LG 320</span>
                                            </p>
                                            <p>
                                                <span>3x Tablet Samsung Galaxy Tab 2</span>
                                            </p>
                                            <p>
                                                <span>...</span>
                                            </p>
                                            <p>Condição: Para desmontagem/Retirada de peças</p>
                                        </div>
                                    </div>
                                    <div className="dados_horario">
                                        <h4>Horário da retirada</h4>
                                        <div>
                                            <p>
                                                <span>Data: </span>20/05/23
                                            </p>
                                            <p>
                                                <span>Horário: </span>18:30hrs
                                            </p>
                                        </div>
                                    </div>
                                    <div className="dados_local">
                                        <h4>Localização</h4>
                                        <p>
                                            AV do Brasil, N° 1000 - apt 25/Bloco D - SBC - SP CEP:
                                            12345-678
                                        </p>
                                    </div>
                                    <div className="dados_responsavel">
                                        <h4>Responsável:</h4>
                                        <p>Luís Monteiro</p>
                                    </div>
                                </div>
                                <div className="btnRetirar">
                                    <a href="#" onClick={msgRetirarMaterial}>
                                        Retirar Material
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

export default ColetasConfirmada;