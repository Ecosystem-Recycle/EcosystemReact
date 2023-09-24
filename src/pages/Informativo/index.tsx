import './style.css'
import img_lixo1 from '../../assets/img/lixo1.png'
import img_simbolo_reciclagem2 from '../../assets/img/simbolo reciclagem2.png'
import img_ciclo_logistico from '../../assets/img/ciclo_logistico.png'

function Informativo() {
    return (
        <>
            <main id='mainInformativo'>
                <h1>página Informativo ecosystem &amp; recycle</h1>
                <section className="banner_fundo">
                    <div>
                        <div className="lixo1 wrapper">
                            <img className="lixo1" src={img_lixo1} alt="lixo1" />
                            {/* <div class="lixo1_filho"> */}
                            <h2>ESG</h2>
                            <p>
                                Por que a sigla se tornou prioridade para empresas? De empresas a
                                startups, o ESG fez a responsabilidade ambiental, social e de
                                governança se tornar prioridade. Por que o ESG teve tanto poder para
                                gerar mudança?
                            </p>
                            <p>
                                Unir e criar uma sigla não foram os únicos motivos que impactaram a
                                adoção dos princípios em empresas de diversos tamanhos e segmentos. O
                                impulso para a preocupação com o ESG aconteceu de dois lados: os
                                consumidores passaram a consumir mais das empresas que se preocupam
                                com as práticas e os investidores passaram a priorizar – e pagar mais
                                – por ações de empresas que praticam o ESG.
                            </p>
                            {/* </div> */}
                        </div>
                    </div>
                </section>
                <section className="banner_fundo">
                    <div className="wrapper lixo2">
                        <img
                            className="simbolo2"
                            src={img_simbolo_reciclagem2}
                            alt="simbolo2"
                        />
                        <p>
                            Econômia Circular: Economia circular é um conceito que associa
                            desenvolvimento econômico a um melhor uso de recursos naturais, por meio
                            de novos modelos de negócios e da otimização nos processos de fabricação
                            com menor dependência de matéria-prima virgem, priorizando insumos mais
                            duráveis, recicláveis e renováveis.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="tutorial">
                        <h2>TUTORIAL</h2>
                        <iframe
                            className="video_logistiaca"
                            src="https://www.youtube.com/embed/T_GpFHzNpIU"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        />
                    </div>
                </section>
                <section>
                    <div className="ciclo_logistico wrapper">
                        <h2>CICLO DA LOGÍSTICA REVERSA</h2>
                        <div className="logistica">
                            <img src={img_ciclo_logistico} alt="foto" />
                            <p>
                                A Logística Reversa é um instrumento de desenvolvimento econômico e
                                social caracterizado por um conjunto de ações, procedimentos e meios
                                destinados a viabilizar a coleta e a restituição dos resíduos sólidos
                                ao setor empresarial, para reaproveitamento, em seu ciclo ou em outros
                                ciclos produtivos, ou outra destinação.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="descartar">
                        {/* <div> */}
                        <h2>PORQUE DESCARTAR CORRETAMENTE?</h2>
                        {/* </div> */}
                        <iframe
                            className="video_logistiaca"
                            src="https://www.youtube.com/embed/vLd9yAYNdz0?start=6"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        />
                    </div>
                </section>
                <section>
                    <div className="impacto wrapper">
                        <h2>IMPACTO AMBIENTAL</h2>
                        <p>
                            Realizamos programas de recuperação de materiais essenciais em nossos
                            centros de distribuição e escritórios, com a missão de reinserir os
                            recursos utilizados no ciclo produtivo.<br />Desde 2015, promovemos um
                            programa regional de reciclagem com esquemas de separação e coleta
                            seletiva dos resíduos no local. Em todos os nossos centros de
                            distribuição, mais de 85% dos materiais são recuperados com parceiros
                            locais. <br />No caso do papelão, em particular na Argentina e no México, o
                            material é recuperado e enviado para reciclagem e produção de novas
                            caixas ou papelão. Implementamos também o programa de logística reversa,
                            oferecido a vendedores com um potencial de reutilização de produtos de
                            cerca de 40% do volume total de itens trocados ou devolvidos. Desde seu
                            lançamento no Brasil.


                        </p>
                        <h2>ELEMENTOS QUÍMICOS QUE PODEM CAUSAR MAL AO MEIO AMBIENTE</h2>
                    </div>
                </section>
                <section className="tabela_periodica">
                    <img className="tabela" src="../../img/tabela.png" alt="" />
                    <p>
                        Chumbo – provavelmente, o elemento químico mais perigoso; acumula-se nos
                        ossos, cabelos, unhas, cérebro, fígado e rins; causa dores de cabeça e
                        anemia, mesmo em baixas concentrações; age no sistema nervoso, renal e
                        hepático. Cobre – causa intoxicações; afeta o fígado. Mercúrio – altamente
                        tóxico, concentrações entre 3 g e 30 g podem ser fatais ao homem; é de
                        fácil absorção por via cutânea e pulmonar; tem efeito cumulativo; provoca
                        lesões no cérebro; tem ação teratogênica – malformação de fetos durante a
                        gravidez. Cádmio – acumula-se nos rins, fígado, pulmões, pâncreas,
                        testículos e coração; causa intoxicação crônica; provoca descalcificação
                        óssea, lesões nos rins e afeta os pulmões; tem efeito teratogênicos e
                        cancerígenos. Bário – tem efeito vasoconstritor, eleva a pressão arterial
                        e age no sistema nervoso central; causa problemas cardíacos. Alumínio –
                        favorece a ocorrência do mal de Alzheimer e tem efeito tóxico sobre as
                        plantas. Arsênio – acumula-se nos rins, fígado, sistema gastrintestinal,
                        baço, pulmões, ossos e unhas; pode provocar câncer da pele e dos pulmões,
                        anormalidades cromossômicas; tem efeito teratogênicos. Cromo – acumula-se
                        nos pulmões, pele, músculo e tecido adiposo; pode causar anemia, afeta o
                        fígado e os rins; favorece a ocorrência de câncer pulmonar. Níquel – tem
                        efeito cancerígeno. Zinco – entra na cadeira alimentar afetando
                        principalmente os peixes e as algas. Prata – tem efeito cumulativo; 10 g
                        de nitrato de prata é letal ao homem.

                        {/* <span id="tresPontos">...</span><span id="mostrarMais"> */}


                    </p>


                    {/* <button onClick="leiaMais()" id="btnLeiaMais" class="btnLeiaMais">Leia Mais</button> */}


                    {/* linha de separacao HR <hr /> */}

                    <h3 className='git '> ESTATISTICAS SOBRE O DESCARTE DO LIXO ELETRÔNICO.  </h3>

                    <p>Publicado em 07/10/2021 - 17:12 Por Mariana Tokarnia – Repórter da Agência Brasil- Rio de Janeiro
                        Fones de ouvido, pilhas, celulares, eletrodomésticos. Todos esses utensílios, quando deixam de funcionar e não são mais aproveitados, viram lixo eletrônico. O Brasil é o quinto maior gerador desse lixo no mundo. Mesmo assim, muita gente ainda não sabe o que é esse tipo de resíduo e como ele deve ser descartado para evitar danos ao meio ambiente e à saúde humana.
                        As informações são da pesquisa Resíduos eletrônicos no Brasil - 2021, divulgada hoje (7) pela Green Eletron, gestora sem fins lucrativos de logística reversa de eletroeletrônicos e pilhas. O estudo foi conduzido pela Radar Pesquisas.
                        A maior parte dos brasileiros (87%) já ouviu falar em lixo eletrônico, mas um terço (33%) acredita que esse lixo está relacionado ao meio digital, como spam, e-mails, fotos ou arquivos. Para outros 42% dos brasileiros lixo eletrônico são aparelhos eletrônicos e eletrodomésticos quebrados e 3% acreditam que são todos os aparelhos que já viraram lixo, ou seja, apenas os que foram descartados, inclusive aqueles que acabam incorretamente em aterros ou na natureza.
                        A pesquisa também especificou alguns produtos para saber se as pessoas os reconheciam como lixo eletrônico. Mais de 90% acreditam que celulares, smartphones, tablets, notebooks, pilhas e baterias são lixo eletrônico e estão corretos.
                        Houve, no entanto, muitas respostas erradas: 51% não acham que lâmpadas comuns, incandescentes e fluorescentes são lixo eletrônico; 34% acreditam que lanternas não são lixo eletrônico; e 37% acreditam que balanças não são lixo eletrônico. Na verdade, todos esses objetos são lixo eletrônico.
                        O conceito de Resíduo de Equipamentos Elétricos e Eletrônicos (REEE) é todo produto elétrico ou eletrônico que descartado por não ter mais utilidade. Inclui grandes equipamentos como geladeiras, freezers, máquinas de lavar; pequenos equipamentos como torradeiras, batedeiras, aspiradores de pó, ventiladores; equipamentos de informática como computadores e celulares; e pilhas e baterias.
                        Descarte
                        O descarte incorreto de lixo eletrônico é considerado um problema, pois os componentes químicos podem ser prejudiciais ao meio ambiente e à saúde humana.
                        Anualmente, mais de 53 milhões de toneladas de equipamentos eletroeletrônicos e pilhas são descartadas em todo o mundo, segundo o The Global E-waste Monitor 2020. Na outra ponta, o número de dispositivos, no mundo, cresce cerca de 4% por ano. Apenas o Brasil descartou, em 2019, mais de 2 milhões de toneladas de resíduos eletrônicos, sendo que menos de 3% foram reciclados, de acordo com o relatório desenvolvido pela Universidade das Nações Unidas.
                        A pesquisa mostrou que, no Brasil, 16% descartam com certa frequência algum eletroeletrônico no lixo comum. Esse tipo de descarte não permite a reciclagem das matérias-primas presentes nos aparelhos. Um terço dos entrevistados (33%) nunca ouviu falar em pontos ou locais de descarte correto para lixo eletrônico.
                        A maioria (87%) disse guardar algum tipo de eletroeletrônico sem utilidade em casa. Mais de 30% fica com eles por mais de um ano.
                        Ao todo, foram entrevistadas para o estudo 2.075 pessoas de 18 a 65 anos, entre os dias 14 e 24 de maio de 2021. A pesquisa foi feita no Distrito Federal e em 13 estados: São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santo, Bahia, Ceará, Pernambuco, Rio Grande do Sul, Paraná, Santa Catarina, Pará, Goiás e Mato Grosso do Sul.
                        O que diz a lei
                        No Brasil, a destinação correta do lixo eletrônico está prevista na Política Nacional de Resíduos Sólidos (Lei 12.305/2010) e é regulamentada pelo Decreto Federal 10.240/2020. Este dispositivo define metas para os fabricantes, importadores, distribuidores e comerciantes sobre a quantidade de pontos de Entrega Voluntária (PEV) que devem ser instalados, o número de cidades atendidas e o percentual de aparelhos eletroeletrônicos a serem coletados e destinados corretamente.
                        Pelo decreto, as empresas devem, gradualmente, até 2025, instalar PEVs nas 400 maiores cidades do Brasil e coletar e destinar o equivalente em peso a 17% dos produtos colocados no mercado em 2018, ano definido como base.
                        Edição: Denise Griesinger
                    </p>


                    <h3 className='Texto_Novo'> 97% do lixo eletrônico da América Latina não é descartado de forma sustentável </h3>

                    <p id='texto_final'>Agência da ONU acredita que total inclui matérias-primas como ouro e metais raros, com valor equivalente a US$ 1,7 bilhão; pesquisa da Unido avaliou situação em 13 países da região, incluindo Argentina, Chile e Peru.
                        Uma pesquisa da Organização das Nações Unidas para o Desenvolvimento Industrial, Unido, revela que apenas 3% do lixo eletrônico da América Latina é descartado da forma correta e tratado de uma maneira que respeita o meio ambiente.
                        Segundo a entidade, não há monitoramento dos demais 97%, sendo que muitos materiais contêm ouro e outros metais preciosos e poderiam ser recuperados, com valor equivalente a US$ 1,7 bilhão por ano.
                        Aumento de quase 50%

                        Computadores e celulares não podem ser jogados no lixo comum.
                        O “Monitor Regional de E-Waste para América Latina” é o primeiro do tipo feito pelas Nações Unidas, avaliando 13 países da região, incluindo Argentina, Chile, Peru e Venezuela.
                        O documento nota que resíduos e materiais eletrônicos estão entre os tipos de lixo que crescem de forma mais rápida no mundo, ameaçando o desenvolvimento sustentável.
                        De acordo com o relatório, o lixo eletrônico nos 13 países avaliados cresceu 49% entre 2010 e 2019, mas apenas 3% desse material foi coletado e descartado de forma segura.
                        A Unido explica que as pessoas que reciclam lixo de modo informal muitas vezes acabam fazendo uma seleção e pegando alguns elementos valiosos destes eletrônicos, mas a maior parte, 97%, é descartada de forma inapropriada.
                        Lixo eletrônico não pode ser descartado com lixo comum e é preciso um manejo especial.
                        Em 2019, o lixo eletrônico gerado por 206 milhões de pessoas nos países analisados atingiu a marca de 1,3 megatoneladas, sendo que 30% eram plástico. Este volume tem peso similar a uma linha reta de 670 km de extensão formada por caminhões 40 toneladas totalmente carregados.
                        O lixo eletrônico é formado por várias substâncias perigosas e segundo a Unido, nos países analisados, esses materiais têm 2,2 kg de mercúrio, 600 kg de cádmio, 4,4m kg de chumbo e 5,6 megatoneladas de gases de efeito estufa.
                        Por isso, quando essas substâncias são descartadas sem nenhum cuidado, os riscos para a saúde ambiental são muito altos.
                        Mas por outro lado, tratar o lixo eletrônico de forma adequada para trazer oportunidades econômicas. Segundo a Unido, o e-waste gerado na América Latina em 2019 continha 7 mil kg de ouro, 310 kg de metais raros, 591m kg de ferro, 54m kg de cobre e 91m kg de alumínio, valendo US$ 1,7 bilhão em matéria-prima secundária.
                        Entre os países analisados, apenas Costa Rica, Equador e Peru tem legislação específica sobre o descarte de materiais eletrônicos. A Unido faz um apelo às nações latino-americanas para introduzirem leis obrigando o manejo sustentável do lixo eletrônico.


                        {/* <span id="tresPontos">...</span><span id="mostrarMais"> */}


                    </p>

                    {/* <button onClick="leiaMais()" id="btnLeiaMais" class="btnLeiaMais">Leia Mais</button> */}


                </section>
            </main>
        </>


    )
}

export default Informativo;