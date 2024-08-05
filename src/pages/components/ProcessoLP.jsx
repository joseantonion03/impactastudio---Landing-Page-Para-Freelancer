import { Link } from 'react-router-dom';

const ProcessoLP = () => {
    return (
        <section id="processolp" className="w-full h-auto py-20 relative">
            <div
                className="flex max-sm:flex-wrap justify-between max-sm:justify-center w-full max-w-[1200px] mx-auto px-10 py-20"
            >
                <img
                    src="/image/processolp/ellipse.png"
                    alt="ellipse"
                    className="hidden absolute right-0 top-0 translate-y-[-50%] z-[-1]"
                />

                <div className="w-[500px] max-lg:w-[calc(50%-20px)] max-screen900:w-[calc(100%-300px)] max-sm:w-full h-auto min-h-[850px] max-sm:min-h-[100px] max-sm:mb-10 sm:bg-img_bg_processolp sm:bg-no-repeat sm:bg-bottom sm:bg-contain">
                    <h2 data-aos="fade-up" className="font-light text-[36px] max-sm:text-[30px] text-white leading-[46px]">Como Funciona o <span className="font-bold text-impacta-orange-primary">Processo de Criação</span> da Sua Landing Page</h2>
                    <p data-aos="fade-up" className="font-normal text-[13px] text-white my-8">Entenda cada etapa do nosso processo de criação de landing pages e veja como transformamos suas ideias em realidade. Desde a concepção até o lançamento, garantimos um trabalho colaborativo e transparente, focado em alcançar os melhores resultados para o seu negócio.</p>
                    <Link
                        to={"https://wa.me/5577991292464"}
                        target='_blank'
                        data-aos="fade-up"
                        className="max-sm:hidden btn-primary text-[22px] font-medium max-sm:px-5"
                    >QUERO UMA LANDING PAGE</Link>
                </div>
                <div className='flex max-screen450:justify-center flex-wrap gap-5 w-[calc((100%-550px))] max-lg:w-[calc(50%-20px)] max-screen900:w-[250px] max-sm:w-full'>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>1</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Reunião Inicial</h3>
                        <p className='font-light text-white text-[14px]'>Realizamos uma reunião inicial para entender suas necessidades e objetivos. Nesta etapa, discutimos ideias, expectativas e definimos o escopo do projeto.</p>
                    </div>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>2</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Briefing</h3>
                        <p className='font-light text-white text-[14px]'>Preparamos um briefing detalhado, coletando todas as informações essenciais sobre seu negócio, público-alvo e metas da landing page.</p>
                    </div>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>3</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Planejamento e Estrutura</h3>
                        <p className='font-light text-white text-[14px]'>Elaboramos um plano estratégico e esboçamos a estrutura da landing page, garantindo que todos os elementos importantes estejam presentes e bem organizados.</p>
                    </div>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>4</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Design e Desenvolvimento</h3>
                        <p className='font-light text-white text-[14px]'>Desenvolvemos o design visual e a funcionalidade da landing page, assegurando que ela seja atrativa, responsiva e otimizada para conversão.</p>
                    </div>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>5</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Revisão e Feedback</h3>
                        <p className='font-light text-white text-[14px]'>Apresentamos a versão preliminar da landing page para sua revisão e feedback. Realizamos ajustes conforme necessário para atender às suas expectativas.</p>
                    </div>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>6</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Testes e Otimização</h3>
                        <p className='font-light text-white text-[14px]'>Realizamos testes para garantir que a landing page funcione perfeitamente em diferentes dispositivos e navegadores. Otimizamos a performance para melhor usabilidade e velocidade.</p>
                    </div>
                    <div data-aos="fade-up" className='w-[calc(50%-10px)] max-screen900:w-full max-sm:w-[calc(50%-10px)] max-screen450:w-full max-w-[250px] max-screen450:max-w-[400px]'>
                        <div className='flex justify-center items-center w-[60px] select-none h-[60px] rounded-full bg-impacta-orange-clear'>
                            <span className='text-impacta-orange-primary text-[35px] font-bold'>7</span>
                        </div>
                        <h3 className='font-medium text-white text-[20px] my-2'>Lançamento e Suporte</h3>
                        <p className='font-light text-white text-[14px]'>Após a aprovação final, lançamos a landing page e oferecemos suporte contínuo para garantir que tudo funcione corretamente e para realizar possíveis melhorias.</p>
                    </div>
                </div>
                <Link
                    to={"https://wa.me/5577991292464"}
                    target='_blank'
                    data-aos="fade-up"
                    className="sm:hidden my-10 btn-primary text-[22px] mr-auto font-medium max-sm:px-5"
                >QUERO UMA LANDING PAGE</Link>

            </div>
        </section>
    )
}

export default ProcessoLP;