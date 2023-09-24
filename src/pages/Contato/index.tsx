import './style.css'
import iconeEmail from "../../assets/img/icone_email_footer.png"
import iconeWhatsApp from "../../assets/img/icone_whats_footer.png"

function Contato() {

    // const [nome, setNome] = useState<string>("")
    // const [email, setEmail] = useState<string>("")
    // const [telefone, setTelefone] = useState<string>("")
    // const [assunto, setAssunto] = useState<string>("")

    return (
        <>
            <main id='mainContato'>
                <h1>página Contato ecosystem &amp; recycle</h1>
                <section>
                    <div className=" telaContato wrapper">
                        <h2>contato</h2>
                        <div className="cardContato flex">
                            <form id='idContatoFormulario' className='contatoFormulario'>
                                <textarea placeholder="Nome Completo" defaultValue={""} />
                                <textarea placeholder="E-mail" defaultValue={""} />
                                <textarea placeholder="Telefone" defaultValue={""} />
                                <textarea placeholder="Assunto" defaultValue={""} />
                            </form>
                            <div className="mensagemContato">
                                <p>
                                    Preencha o formulário ao lado para entrar em contato com a ECO
                                    SYSTEM &amp; RECYCLE!
                                </p>
                                <div className="contatos">
                                    <div className="email flex">
                                        <img src={iconeEmail} alt="" />
                                        <p>contato@ecosystemrecycle.com.br</p>
                                    </div>
                                    <div className="whats flex">
                                        <img src= {iconeWhatsApp} alt="" />
                                        <p>(11) 99999-9999</p>
                                    </div>
                                    <div className="adress">
                                        <p>R. Niterói, 180 - Centro</p>
                                        <p>São Caetano do Sul - SP, 09510-200</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#">Enviar</a>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Contato;