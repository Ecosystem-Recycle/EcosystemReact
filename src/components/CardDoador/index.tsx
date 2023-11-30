import './style.css'
import imgIconeEditar from '../../assets/img/ico_edit.svg'
import imgIconeVisualizar from '../../assets/img/ico_eye.svg'
import imgIconeDeletar from '../../assets/img/ico_delete.svg'
import { Link } from 'react-router-dom';

function CardDoador(props:any) {
    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
    };

    return (
        <>
            <div id='cardDoador'>
            <h4>{props.title}</h4>
            <img
                src={ props.imagem }
                alt="Imagem 01 da Galeria de fotos"
            />
            <div className="WrapperCard">
                <p>Data de publicação: {props.dataPubliq}</p>
                <p>Quantidade de iten(s): {props.totalItens}</p>
                <div className="Descriocaocards">
                    <p>Descrição: </p>
                    <div>
                        <p>5x Celular Samsung A5</p>
                        <p>2x Iphone 2 ...</p>
                    </div>
                </div>
                <div className="card_Status">
                    <div className={"circle_Status " + props.corStatus}></div>
                    <p>
                        <span>Status:</span> {props.status}
                    </p>
                </div>
                <div className="iconesCards">
                    {/* <a href="../Tela_Quero_Doar_Parte_2/index.html">
                        <img src={ imgIconeEditar } alt="Icone de Editar" />
                    </a> */}
                    <Link to="/querodoarpt2"><img src={ imgIconeEditar } alt="Icone de Editar" /></Link>
                    {/* <a href="../Tela_Quero_Doar_Parte_2/index.html">
                        <img
                            src={ imgIconeVisualizar }
                            alt="Icone de visualizar"
                        />
                    </a> */}
                    <Link to="/querodoarpt2"><img src={ imgIconeVisualizar } alt="Icone de visualizar"/></Link>
                    {/* <a
                        href="../Tela_Quero_Doar_Pt1/index.html"
                        onClick={ msgExcluirDoacao }
                    >
                        <img
                            src={ imgIconeDeletar }
                            alt="Icone de Deletar"
                        />
                    </a> */}
                    <Link to="/querodoarpt1" onClick={ msgExcluirDoacao }><img src={ imgIconeDeletar } alt="Icone de Deletar"/></Link>

                </div>
            </div>
        </div>
        </>
    )
}

export default CardDoador;