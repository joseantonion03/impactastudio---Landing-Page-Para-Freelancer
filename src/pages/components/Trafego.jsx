const Trafego = () => {
    return (
        <section id="trafego" className="w-full h-auto pt-20 max-screen900:pt-0 relative">
            <div
                className="flex overflow-hidden max-screen900:flex-wrap justify-between max-sm:justify-center w-full max-w-[1200px] mx-auto px-10 pt-20 pb-3 max-screen900:pt-0"
            >
                <div className="w-[50%] max-lg:w-[calc(100%-500px)] max-screen900:w-full max-screen900:max-w-[600px] max-screen900:mx-auto">
                    <h3 data-aos="fade-up" className="font-bold text-[24px] max-sm:text-[20px] text-white leading-[36px]">Tráfego Pago</h3>
                    <h2 data-aos="fade-up" className="font-bold text-[36px] max-sm:text-[30px] text-impacta-orange-primary leading-[46px] py-2">Acelerando Seu Crescimento</h2>
                    <p data-aos="fade-up" className="font-normal max-w-[500px] max-screen900:max-w-full text-[13px] text-white my-3">Impulsione seu negócio. Alcançamos seu público-alvo com precisão, aumentando a visibilidade e conversões. Confira as vantagens de investir em tráfego pago:</p>
                    <ul className="text-white my-14 max-w-[500px] max-screen900:max-w-full">
                        <li data-aos="fade-up" className="relative pl-[58px] my-7 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[45px] before:h-[45px] before:bg-img_bg_trafego_item1 before:bg-cover before:bg-no-repeat">
                            <p className="font-medium text-[18px]">Alcance Imediato</p>
                            <p className="font-light max-w-[500px] max-screen900:max-w-full text-[12px]">Obtenha resultados rápidos com anúncios que atingem seu público-alvo imediatamente, aumentando a visibilidade e o tráfego do seu site.</p>
                        </li>
                        <li data-aos="fade-up" className="relative pl-[58px] my-7 before:content-[''] before:absolute before:left-0 before:w-[45px] before:h-[45px] before:bg-img_bg_trafego_item2 before:bg-cover before:bg-no-repeat">
                            <p className="font-medium text-[18px]">Segmentação Precisa</p>
                            <p className="font-light max-w-[500px] max-screen900:max-w-full text-[12px]">Aproveite a segmentação avançada para direcionar seus anúncios para as pessoas certas, com base em interesses, localização, comportamento e muito mais.</p>
                        </li>
                        <li data-aos="fade-up" className="relative pl-[58px] my-7 before:content-[''] before:absolute before:left-0 before:w-[45px] before:h-[45px] before:bg-img_bg_trafego_item3 before:bg-cover before:bg-no-repeat">
                            <p className="font-medium text-[18px]">Análises Detalhadas</p>
                            <p className="font-light max-w-[500px] max-screen900:max-w-full text-[12px]">Acompanhe o desempenho das suas campanhas com análises detalhadas, permitindo ajustes estratégicos e otimização contínua para melhores resultados.</p>
                        </li>
                    </ul>
                </div>
                <div className="w-[50%] max-lg:w-[500px] flex justify-center max-screen900:w-full max-screen900:max-w-[550px] max-screen900:mx-auto">
                    <img src="/image/trafego/mao.webp" data-aos="fade-up-left" width={513.92} height={600} className="background-image max-lg:h-[600px] max-screen900:h-auto max-lg:w-full" alt="Mão de uma pessoa segurando um celular" />
                </div>
            </div>
        </section>
    )
}

export default Trafego;