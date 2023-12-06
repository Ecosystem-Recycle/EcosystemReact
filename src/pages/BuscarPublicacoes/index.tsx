import './style.css'
import image12 from "../../assets/img/image 12.png"
import image8 from "../../assets/img/image 8.png"
import image9 from "../../assets/img/image 9.png"
import image15 from "../../assets/img/image 15.png"
import Aside from '../../components/Aside'
import { Link, useParams } from "react-router-dom";
import CardBuscarPublicacoes from '../../components/CardBuscarPublicacoes'
import secureLocalStorage from 'react-secure-storage'
import { useState, useEffect } from 'react'
import api from '../../utils/api'

function BuscarPublicacoes() {

    // useEffect
    // let teste = (secureLocalStorage.getItem("user"))
    // const [teste2, setTeste2 ] = useState<any[]>([])
     //const [teste2, setTeste2] = useState<string>("")
    
    // useEffect( () => {
        // document.title = "Quero Doar - Ecosystem e Recycle"
        // setTeste2(JSON.parse(secureLocalStorage.getItem("user")))

    // }, [] )`

    const [anuncios, setAnuncios] = useState<any[]>([])

    useEffect(() => {
        document.title = "Buscar por Publicações"

        listarAnuncios()
    })

    function listarAnuncios(){
        api.get("users")
        .then((response:any) => {
            console.log(response.data)
            setAnuncios(response.data)
        })
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
                            {/* <div> */}
                            <CardBuscarPublicacoes
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
                                    />
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default BuscarPublicacoes;