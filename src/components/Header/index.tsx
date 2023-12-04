import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './style.css';
import DoadorLogado from '../../components/DoadorLogado';
import ColetorLogado from '../ColetorLogado';
import imgLogo from "../../assets/img/logo_vertical.png";



function Header() {
    let menu= document.getElementById(("menu_links") || "") as HTMLCanvasElement;
    // let tamanhoTela: boolean = false;
    const [tamanhoTela, setTamanhoTela] = useState<any>();
    //Função para mostrar/esconder menu hamburguer
    function mostrarMenu(){
        let menu_barras= document.getElementById(("menu_barras")|| "") as HTMLCanvasElement;

        if (window.getComputedStyle(menu).display == 'none'){
            //Mostre o menu
            menu.style.display = "flex";
            menu_barras.setAttribute("aria-expanded", "true");
            menu_barras.setAttribute("aria-label", "Fechar o Menu");

        }else{
            //Esconde o menu
            menu.style.display = "none";
            
            menu_barras.setAttribute("aria-expanded", "false");
            menu_barras.setAttribute("aria-label", "Abrir o Menu");
            
        }
    };

    //Função para mostrar/esconder menu hamburguer quando redimensionar a tela
    addEventListener("resize", () => {
        if (window.innerWidth > 1072){
            setTamanhoTela(false);
            menu.style.display = "flex";
            
        } else{
            setTamanhoTela(true);
            menu.style.display = "none";
        }
    });
    //UseEffect para Setar a variavel tamanho da tela como falso se for maior que 1072px
    useEffect(() => {
        if (window.innerWidth > 1072){
            setTamanhoTela(false);
            
        } else{
            setTamanhoTela(true);
        }
    }, [])

    return (
        <header>
            <div className="div_headerPosition wrapper">
                <img src={imgLogo} alt="logotipo Ecosystem e Recycle do Header" />
                
                { 
                    // se o tamanho da tela dor pequeno renderiza o menu de usuario logado dentro de uma div
                    tamanhoTela  ?
                        <div className='div_Logado_E_Menu'>
                            <DoadorLogado />
                            {/* <ColetorLogado /> */}
                            {/* <Link to="/login" className="btn_entrar">entrar</Link> */}
                            <a
                                onClick={ mostrarMenu }
                                className="menu_barras"
                                id="menu_barras"
                                href="#"
                                aria-label="Abrir o menu do Header"
                                aria-expanded="false"
                                aria-controls="menu_links"
                                aria-haspopup="true"
                            >
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </a>
                        </div> 
                    : 
                        <a
                        onClick={ mostrarMenu }
                        className="menu_barras"
                        id="menu_barras"
                        href="#"
                        aria-label="Abrir o menu do Header"
                        aria-expanded="false"
                        aria-controls="menu_links"
                        aria-haspopup="true"
                    >
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                        >
                            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </a>
                }
                
                <nav id="menu_links">
                    {/* <a href="../Tela_Home/index.html" className="underline">página inicial</a> */}
                    <Link to="/" className="underline">página inicial</Link>
                    {/* <a href="../Tela_Nossa_Historia/index.html" className="underline">nossa história</a> */}
                    <Link to="/nossahistoria" className="underline">nossa história</Link>
                    {/* <a href="../TelaInformativo/index.html" className="underline">informativo</a> */}
                    <Link to="/informativo" className="underline">informativo</Link>
                    {/* <a href="../TelaServicos/index.html" className="underline">serviços</a> */}
                    <Link to="/servicos" className="underline">serviços</Link>
                    {/* <a href="../Tela_Duvidas/index.html" className="underline">dúvidas</a> */}
                    <Link to="/duvidas" className="underline">dúvidas</Link>
                    {/* <a href="../Tela_Contato/index.html" className="underline">contato</a> */}
                    <Link to="/contato" className="underline">contatos</Link>

                    {/* Se o tamanho da tela for grande => renderiza o Doador logado no navMenu */}
                    { 
                    !tamanhoTela  ? 
                        // <DoadorLogado />
                        // <ColetorLogado />
                        // <a href="../Tela_Login_Doador/index.html" className="btn_entrar">entrar</a>
                        <Link to="/login" className="btn_entrar">entrar</Link>
                    : 
                        "" 
                    }
                    
                    
                </nav>
            </div>
        </header>

    )
}

export default Header;