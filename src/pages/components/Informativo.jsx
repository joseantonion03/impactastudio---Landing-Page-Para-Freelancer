import { Link } from 'react-router-dom';

const Informativo = () => {
    return (
        <section id="informativo" className="w-full py-10 h-auto relative bg-img_bg_informativo bg-center screen2000:bg-img_bg_informativo_full bg-no-repeat bg-cover screen2000:bg-contain">
            <div
                className="w-full max-w-[1200px] mx-auto px-10 py-48 max-screen900:pb-10"
            >
                <div className='relative'>

                    <h3 style={{ background: 'linear-gradient(180deg, #0D0D0D0%, rgba(13, 13, 13, 0.00)77.3%)' }} className='absolute z-[-1] top-[-27%] max-md:top-[-20%] max-screen450:top-[-10%] left-[50%] translate-x-[-50%] whitespace-nowrap text-[122px] text-center font-bold text-impacta-orange-primary blur-[2px] opacity-20 max-w-full max-xl:text-[10vw] max-md:whitespace-normal max-md:leading-[80px] max-md:text-[80px] max-screen450:text-[15vw] max-screen450:leading-[60px]'>IMPACTA STUDIO</h3>
                    <h2 data-aos="fade-up" className="font-bold text-[40px] max-sm:text-[30px] text-white text-center leading-[46px]">Precisa de uma landing pra ontem?</h2>
                    <p data-aos="fade-up" className="font-normal max-w-[850px] text-[20px] text-white leading-[44px] max-lg:leading-[30px] max-lg:text-[18px] text-center mx-auto my-8">Obtenha sua landing page pronta em apenas 7 dias úteis ou, como frequentemente acontece, em menos tempo. Nossa equipe dedicada trabalha com agilidade e eficiência para entregar resultados rápidos e de alta qualidade.</p>
                    <div data-aos="fade-up" className='flex justify-center'>
                        <Link

                            to={"https://wa.me/5577991292464"}
                            target='_blank'
                            className="btn-primary text-[22px] font-medium max-sm:px-5"
                        >FAZER ORÇAMENTO</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Informativo;