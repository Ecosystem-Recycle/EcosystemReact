import './style.css'
import { Link } from "react-router-dom"
import imagem from '../../assets/img/no-imagem.png'
import no_imagem from '../../assets/img/img_Baterias.png'

// Necessário validar condicional para o elemento P baseado na quantidade de produtos
// const teste = 

export default function CardBuscarPublicacoes(props: any) {

    return (

        <div id="cardBuscarPublicacoes" className="cardAgendar">
            <div>
                <img
                    src={props.src ? props.src : {imagem}}
                    alt={props.alt} />
            </div>
            <div className="conteudoCard">
                <div className="cardInformacao">
                    <h2>{props.titulo ? props.titulo : "insira um titulo"}</h2>
                    <p>Data de publicação {props.data ? props.data : "dd/mm/aa"}</p>
                    <p>Quandidade de iten(s): {props.quantidade ? props.quantidade : "4"}</p>
                    <div>
                        <p>Descrição: </p>
                        <div>
                            <p>{props.descricao ? props.descricao : "1x Celular Samsung Modelo J5 Prime"}</p>
                            <p>1x Iphone 4 Plus...</p>
                        </div>
                    </div>
                    <p>{props.cidade} - {props.estado}</p>
                </div>
                <Link to="/agendarcoleta">Agendar</Link>
            </div>
        </div>
    )

}