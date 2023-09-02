import './style.css'
import imgCelAntigos from '../../assets/img/img_001png.png'
"../../img/img_001png.png"

function ConfirmarColeta (){
    function msgConfirmarColeta(){
        alert('A sua doação foi agendada! Separe o material e aguarde o coletor vir retira-lo.');
      };

    return (
        <main>
        <h1>página confirmar coleta ecosystem &amp; recycle</h1>
        <section>
          <div className="conteudo_doacoes wrapper">
            <aside>
              <ul>
                <li>
                  <a href="../Tela_Quero_Doar_Pt1/index.html">quero doar</a>
                </li>
                <li>
                  <a href="../Tela_Minhas_Doacoes/index.html">
                    visualizar minhas doações
                  </a>
                </li>
                <li>
                  <a href="../Tela_Editar_Perfil_Doador/index.html">editar perfil</a>
                </li>
              </ul>
            </aside>
            <div className="menu_Direito">
              <div className="title">
                <h2>Minhas Doações - Confirmar Agendamento</h2>
                <p>Confirme a data e horário do nosso parceiro</p>
              </div>
              <div>
                <div className="margem_Doacao">
                  <div className="Conteudo_Doacao">
                    <div className="dados_doacao1">
                      <div className="Title_Img_Donation">
                        <h5>Celulares antigos de diversas marcas e modelos</h5>
                        <img
                          src={ imgCelAntigos}
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
                        <p>
                          Localização: AV do Brasil, N° 1000 - apt 25/Bloco D - SBC -
                          SP CEP: 12345-678
                        </p>
                        <p>
                          Disponibilidade de horário para agendamento: Seg - Sex /
                          09:00 às 14:00
                        </p>
                      </div>
                    </div>
                    <div className="dados_parceiro">
                      <h4>Dados do Parceiro</h4>
                      <p>Empresa: Recicla Tudo</p>
                      <p>
                        Endereço: Rua da reciclagem - Diadema SP / CEP 01234 - 567
                      </p>
                    </div>
                    <div className="dados_horario">
                      <h4>Horário do coletor para retirada</h4>
                      <div>
                        <p>
                          <span>Data: </span>20/05/23
                        </p>
                        <p>
                          <span>Horário: </span>18:30hrs
                        </p>
                      </div>
                    </div>
                    <div className="form_obs">
                      <form>
                        <label htmlFor="msgObs">Observação:</label>
                        <textarea
                          id="msgObs"
                          name="msgObs"
                          rows={10}
                          cols={160}
                          placeholder="Complete com algum comentário, dúvida ou sugestão caso necessário.."
                          defaultValue={""}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="btnVoltar">
                    <a
                      href="../Tela_Minhas_Doacoes/index.html"
                      onClick={ msgConfirmarColeta }
                    >
                      confirmar
                    </a>
                    <a href="#" onClick={ history.back }>
                      cancelar
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

export default ConfirmarColeta;