import "./style.css"

export default function CardBuscarPublicacoes(props:any){
    
    return(
        <div id="um" className="cardAgendar">
        <div>
            <img 
            src={props.src} 
            alt={props.alt} />
        </div>
        <div className="conteudoCard">
            <div className="cardInformacao">
                <h2>celulares diversos</h2>
                <p>Data de publicação 30/03/2023</p>
                <p>quandidade de iten(s): 4</p>
                <div>
                    <p>Descrição: </p>
                    <div>
                        <p>1x Celular Samsung Modelo J5 Prime</p>
                        <p>1x Iphone 4 Plus...</p>
                    </div>
                </div>
                <p>sbc - sp</p>
            </div>
            <Link to="/agendarcoleta">Agendar</Link>
        </div>
    </div>
    )

}