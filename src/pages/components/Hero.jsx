import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="w-full h-auto min-h-[1200px] max-md:min-h-[900px] screen1800:min-h-[900px] bg-img_bg_hero max-md:bg-img_bg_hero_mobile screen2000:bg-img_bg_hero_full bg-top bg-cover screen2000:bg-contain max-md:bg-contain bg-no-repeat flex items-center justify-center">
            <div className="flex w-full max-w-[1200px] px-10">
                <div className="w-[700px] max-screen2000:mt-[-350px] max-md:mt-[85%] max-md:text-center">

                    <img
                        src="/image/hero/logo.png"
                        alt="Logo Impacta Studio"
                        className="background-image w-full max-w-[240px] max-md:mx-auto"
                    />
                    <h3 className="text-[20px] font-medium text-white max-md:mx-auto my-4">Vamos construir o futuro juntos.</h3>
                    <h1 className="text-[40px] font-light leading-[40px] max-md:mx-auto text-white max-w-[370px] max-md:max-w-[600px]">Criatividade que <span className="font-bold">impacta</span>, ideias que <span className="font-bold text-impacta-orange-primary">transformam</span></h1>
                    <p className="text-[18px] font-normal leading-[25px] max-md:mx-auto text-white max-w-[430px] max-md:max-w-[600px] my-8">Transformamos ideias visionárias em soluções impactantes. Junte-se a nós e veja como a criatividade pode transformar suas necessidades em realidade. </p>
                    <Link
                        to={"https://wa.me/5577991292464"}
                        target='_blank'
                        className="btn-primary text-[22px] font-medium max-sm:px-5"
                    >SOLICITAR ORÇAMENTO</Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;