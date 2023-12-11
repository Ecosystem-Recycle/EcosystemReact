import './style.css'
import Aside from '../../components/Aside'
import { Link, useParams } from "react-router-dom";
import CardBuscarPublicacoes from '../../components/CardBuscarPublicacoes'
import secureLocalStorage from 'react-secure-storage'
import { useState, useEffect } from 'react'
import api from '../../utils/api'

function BuscarPublicacoes() {

    const [anuncios, setAnuncios] = useState<any[]>([])
    const [produtos, setProdutos] = useState<any[]>([])
    const [userId, setUserId] = useState<any>({})
    const dadosCombinados = [...anuncios, ...produtos]
    const dadosFiltrados: any = []

    // const [listarAnunciosDisponiveis, setListarAnunciosDisponiveis] = useState<any[]>(anuncios)


    useEffect(() => {
        document.title = "Buscar por Publicações - Ecosystem e Recycle"

        const userObj: string | number | boolean | object | null = secureLocalStorage.getItem("userId");
        setUserId(userObj)

        listarAnuncios()
        listarProdutos()
    }, [setUserId])

    function listarAnuncios() {
        api.get("anuncio")
            .then((responseAnuncio: any) => {
                console.log(responseAnuncio.data)
                setAnuncios(responseAnuncio.data)
            })
    }
    function listarProdutos() {
        let filtroProdutos: any = []
        api.get("produto")
            .then((responseProduto: any) => {
                responseProduto.data.forEach((produto: any) => {
                    if (produto.anuncio_id === teste.anuncio.id) {
                        filtroProdutos.push(produto)
                        console.log(filtroProdutos)
                    }
                })
                // console.log(filtroProdutos)

                // console.log(responseProduto.data)
                // setProdutos(responseProduto.data)
            })
        // function organizarDados() {
        //     if(produtos.anuncio_id == )
        // }
    }



    // const {idUsuario} = useParams()

    // const [nome, setNome] = useState<string>("" )

    // let teste = secureLocalStorage.getItem("user")
    // console.log(teste)

    // let testeNovo
    // testeNovo=(JSON.parse(teste))





    //Abaixo um teste realizado para validar a busca de dados com base do id do cliente logado. Processo realizado sem sucesso.

    // useEffect(() => {
    //     document.title = "perfil de " + nome 

    //     buscarUsuarioPorID()   


    // }, [])

    // function buscarUsuarioPorID(){
    //     api.get("users/" + idUsuario).then((response:any) => {
    //         // setNome(response.data.nome)
    //         // console.log(nome)
    //         return

    //     } ).catch((error) => {
    //         console.log(error)
    //     }) 
    // }

    return (
        <>
            <main id='mainBuscarPublicacoes'>
                <h1>página buscar por publicações ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <Aside idSeletor={1} />
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Buscar por Publicações</h2>
                                <p>Veja todas as publicações ativas mais próximas de você!</p>
                            </div>
                            {dadosCombinados.map((dadosCombinados: any, index: number) => {
                                return <div key={index}>
                                    <CardBuscarPublicacoes
                                        titulo={dadosCombinados.titulo}
                                        data={dadosCombinados.data_cadastro}
                                        quantidade={dadosCombinados.nome}
                                        descricao={dadosCombinados.nome}
                                        cidade={dadosCombinados.nome}
                                        src={dadosCombinados.url_imagem}
                                    />
                                </div>
                            })}
                            {/* <CardBuscarPublicacoes
                                src={image12}
                                alt={""}
                                titulo={"teste"}
                            />
                            <CardBuscarPublicacoes
                                src={image9}
                                alt={""}
                            />
                            <CardBuscarPublicacoes
                                src={image8}
                                alt={""}
                            />
                            <CardBuscarPublicacoes
                                src={image15}
                                alt={""}
                            /> */}
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default BuscarPublicacoes;