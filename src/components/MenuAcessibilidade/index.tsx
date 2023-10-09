import './style.css'
import { FaHands } from 'react-icons/fa';
import { TbSunMoon } from 'react-icons/tb';
import { ImBrightnessContrast } from 'react-icons/im';
import { VscTextSize } from 'react-icons/vsc';
import { useState, useEffect } from 'react';

export default function MenuAcessibilidade() {
    //State para ativar/desativar Menu de Acessibilidade na tela
    const [active, setActive] = useState<any>(false);
    //State para ativar/desativar Span "Menu de acessibilidade na tela"
    const [ativarSpan, setAtivarSpan] = useState<any>(false);

    let elementMain: any = document.querySelector('main');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    let fontSize: any = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    let increaseDecrease: any = 10;

    //Função para alterar o State do menu de Acessibilidade na tela
    const handleToggle = () => {
        setActive(!active);
        ocultarSpan();
    };
    //Função para alterar o State do SPAN "menu de Acessibilidade na tela"
    const ocultarSpan = () => {
        setAtivarSpan(!ativarSpan);
    };

    //Ao carregar a página oculta o Span após 3s
    useEffect(() => {
        setTimeout(ocultarSpan, 3000);
    }, []);

    //Função DarkMode a ser definida
    function darkMode(e: any) {
        // let isDark= document.getElementsByTagName("html") as HTMLCanvasElement;
        // color-scheme: dark;
        e.preventDefault();
        console.log(document.documentElement);
    }

    // Evento de click para diminuir a fonte
    function diminuirFonte(e: any){
        e.preventDefault();
        if(fontSize > 60){
            fontSize = fontSize - increaseDecrease;
            elementMain.style.fontSize = fontSize + '%';
        }
    }

    // Evento de click para diminuir a fonte
    function aumentarFonte(e: any){
        e.preventDefault();
        // Se o tamanho for menor que 140%
         if(fontSize < 140){
            fontSize = fontSize + increaseDecrease;
            elementMain.style.fontSize = fontSize + '%';
        }
    }
    


    return (

        <div id="MenuAcessibilidade" className={active ? "active" : ""}>
            <div className="BotaoAcessibilidade" onClick={ handleToggle }>
                <FaHands />
                <span className={ativarSpan ? "spanOculto" : ""}>Menu de Acessibilidade</span>
            </div>
            <div className="darkMode svg">
                <a href="#">
                    <TbSunMoon />
                    Modo Escuro
                </a>
            </div>
            <div className="contrastMode svg">
                <a href="#">
                    <ImBrightnessContrast />
                    Alto Contraste
                </a>
            </div>
            <div className="plusFontMode svg" onClick={aumentarFonte}>
                <a href="#">
                    <VscTextSize />
                    Aumentar Fonte
                </a>
            </div>
            <div className="decreaseFontMode svg" onClick={diminuirFonte}>
                <a href="#">
                    <VscTextSize />
                    Diminuir Fonte
                </a>
            </div>
        </div>
    )
}

