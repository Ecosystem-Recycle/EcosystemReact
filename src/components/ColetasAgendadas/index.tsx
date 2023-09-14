import Card from "../Card"
import img_card_002 from '../../assets/img/img_card_002.png'
import ico_edit from '../../assets/img/ico_edit.svg';
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ColetasAgendadas() {

    // const navigate = useNavigate()

    // function clique() {
    //     navigate('ColetasFinalizadas')
    // }

    // function msgDeletarColeta() {
    //     alert('A doação foi cancelada! O doador irá ser notificado');
    // };


    // usestate => array do tipo any e começa vazio
    const [itensRenderizados, setItensRenderizados] = useState<any[]>([])

    const listaAtivos: any[] = [
        {
            tituloCard: "Celulares antigos",
            conteudoCardData: '30/03/2023',
            conteudoCardQuantidade: '3'
        },
        {
            tituloCard: "Celulares novos",
            conteudoCardData: '30/03/2022',
            conteudoCardQuantidade: '5'
        }
    ]

    // abaixo será necessário replicar a mesma ideia
    const listaFinalizados: any[] = []

  

    // 0   ao clicar no botao ativo irá setar com valor da lista ativos

    function mostrarAtivos() {
        setItensRenderizados(listaAtivos)
        // console.log("funcao ok")
    }
    // onclick seguido 

    // 3 listas sendo uma lista de itens ativos, uma itens finalizadas e a terceira itens renderizados

    // ao clicar ano botao ativos, setar itens renderizados com o valor de itens ativos
    // ao clicar no botao finalizados, setar itens renderizados com o valor de itens finalizados
    // map ites renderizados

    // listas de itens


    return (
        <>
            <button onClick={mostrarAtivos}>teste</button>
            <div className="Conteudo_Cards">

                {
                    itensRenderizados.map((item: any, index: number) => {
                        return <Card key={index}
                            tituloCard={item.tituloCard}
                            conteudoCardData={item.conteudoCardData}
                            conteudoCardQuantidade={item.conteudoCardQuantidade}
                        />
                    })
                }

                {/* Importação do Card */}
                {/* <Card
                    tituloCard='Celulares antigos'
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
                    conteudoCardData='30/03/2023'
                    conteudoCardQuantidade='3'
                    conteudoCardOwner='Luís'
                    quantidadeProduto1='5'
                    descricao1='Celular Samsung A5'
                    quantidadeProduto2='2'
                    descricao2='Iphone 2'
                    localizacao='SBC-SP'
                />
                <Card /> */}

                {/* <div className="cards">
                    <h4>Celulares diversos</h4>
                    <img
                        src={img_card_002}
                        alt="Imagem com sucata de aparelhos celulares gsm"
                    />
                    <div className="WrapperCard">
                        <p>Data de publicação: 25/03/2023</p>
                        <p>Quantidade de iten(s): 4</p>
                        <p>Responsável: Geraldo</p>
                        <div className="Descriocaocards">
                            <p>Descrição: </p>
                            <div>
                                <p>1x Celular Samsung modelo J5 prime</p>
                                <p>1x Iphone 4 Plus... ...</p>
                            </div>
                        </div>
                        <p>
                            Localização: <strong>Diadema-SP</strong>
                        </p>
                        <div className="card_Status">
                            <div className="circle_Status circle_Orange"></div>
                            <p>
                                <span>Status:</span> Publicação agendada! 15/05/23 -
                                10:00hrs
                            </p>
                        </div>
                        <div className="iconesCards">
                            <a href="../Tela_Agendar_Coleta/index.html">
                                <img src={ico_edit} alt="Icone de Editar" />
                            </a>
                            <a href="../Tela_Agendar_Coleta/index.html"
                                onClick={msgDeletarColeta}>  <img
                                    src={ico_eye}
                                    alt="Icone de visualizar"
                                />
                            </a>
                            <a href="#" onClick={clique}>
                                <img
                                    src={ico_delete}
                                    alt="Icone de Deletar"
                                />
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )

}