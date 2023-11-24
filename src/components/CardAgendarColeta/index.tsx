// import { useState } from 'react'
import './style.css'
import image from "../../assets/img/image 12.png"

export default function CardAgendarColeta(props:any) {

    return (
        <div className="card" id='cardAgendarColeta'>
            <div className="cardEsquerda">
                {/* <h2>Celulares antigos de diversas marcas e modelos</h2> */}
                <h2>{props.titulo ? props.titulo : "Título"}</h2>
                <img src={ image } alt="" />
                <p>Agendar Retirada</p>
            </div>
            <div className="cardDireita">
                <div className="cardDireitaConteudo">
                    <h2>Dados da Retirada</h2>
                    <p>Data de publicação: {props.dataPublicacao ? props.dataPublicacao : "dd/mm/aaaa"}</p>
                    <p>quantidade de iten(s): { props.quantidadeItem ? props.quantidadeItem : "N" }</p>
                    <div>
                        <p>Descrição: </p>
                        <div>
                            <p>5x Celular Samsung A5</p>
                            <p>2x Iphone 2</p>
                            <p>7x Celular LG 320</p>
                            <p>3x Tablet Samsung Galaxy Tab 2</p>
                            <p>...</p>
                        </div>
                    </div>
                    <p>Condição: Para desmontagem/Retirada de peças</p>
                    <p>
                        Localização: Av. do Brasil, N° 1000 - apt25/Bloco D - SBC - SP
                        CEP: 12345-678
                    </p>
                    <p>
                        Disponibilidade de horário para agendamento: Seg - Sex / 09:00
                        às 14:00
                    </p>
                </div>
            </div>
        </div>
    )
} 