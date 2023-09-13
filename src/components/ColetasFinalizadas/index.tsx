import './style.css'
import cartucho from "../../assets/img/cartuchos.png"
import Aside from "../../components/Aside"

export default function ColetasFinalizadas() {

    return (
        <>
            <main>
                <h1>página coletas finalizadas ecosystem & recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <Aside />
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Coletas Agendadas</h2>
                                <p>Visualize todas as suas coletas agendadas</p>
                            </div>
                            <div className="link_menu_direito">
                                <a href="../Tela_Coletas_Agendadas/index.html">Coletas Ativas</a>
                                <a href="../Tela_Coletas_Finalizadas/index.html">
                                    Coletas Finalizadas
                                </a>
                            </div>
                            <div>
                                <div className="margem_Conteudo">
                                    <div className="Conteudo">
                                        <div className="nada_consta">
                                            <p>cartuchos usados</p>
                                            <img src={cartucho} alt="" />

                                            <p> Data de publicação: 01/04/2023 </p>
                                            <p>Quantidade de iten(s): 20</p>
                                            <p> Responsável: André Martins </p>
                                            <p> Descrição: 10x Cartuchos HP vazio</p>
                                            <p> 10x Cartuchos Epson vazio </p>
                                            <p> Localização: Santo André - SP </p>
                                            <form action="">
                                                <input
                                                    type="radio"
                                                    id="status_produto"
                                                    name="fav_language"
                                                    defaultValue="status"
                                                />
                                                <label htmlFor="status">
                                                    Status Produto retirado com Sucesso!
                                                </label>
                                            </form>
                                            <div className="imagem_botao">
                                                <img src="../../img/olho.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="btnVoltar">
                                                <a href="#" onClick={history.back}>
                                                    voltar
                                                </a>
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

