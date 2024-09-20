import { Link } from 'react-router-dom';

const Sobremim = () => {
    return (
        <section id="sobremim" className="w-full py-10 h-auto min-h-[1000px] max-screen900:min-h-[500px] z-[-1] relative bg-img_bg_sobremim max-screen900:bg-img_bg_sobremim_mobile max-screen900:bg-contain bg-center max-screen900:bg-top bg-no-repeat bg-cover screen2000:bg-contain">
            <div
                className="flex justify-end items-center w-full max-w-[1200px] mx-auto px-10 py-48 max-screen2000:pb-10"
            >
                <div className='w-full max-w-[520px] max-lg:w-[50%] max-screen900:w-full max-screen900:max-w-[800px] max-screen900:mt-[75vw] max-md:mt-[60vw] max-screen450:mt-[40vw] text-white'>
                    <h2 className="font-light text-[40px] max-sm:text-[30px] leading-[46px] max-screen900:text-center max-screen900:max-w-[500px] max-screen900:mx-auto">Prazer, José Antônio</h2>
                    <p className='font-light text-[18px] my-5 max-screen900:text-center max-screen900:max-w-[600px] max-screen900:mx-auto'>Tenho 3 anos de experiência em desenvolvimento web, tráfego pago e design, atendendo <span className='font-bold'>mais de 40 clientes</span>. Minhas habilidades incluem React.js, React Native, WordPress, SQL, PHP e Laravel, permitindo-me criar e personalizar sites e aplicativos.</p>
                    <p className='font-light text-[18px] my-5 max-screen900:text-center max-screen900:max-w-[600px] max-screen900:mx-auto'>Estou disponível para novas parcerias e projetos. Se você busca soluções criativas e eficazes para o seu negócio, entre em contato!</p>
                    <ul className='font-light text-[18px] mt-8 max-screen900:max-w-[430px] max-screen900:mx-auto'>
                        <li className="pl-[45px] my-5 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-[30px] before:h-[30px] before:bg-img_bg_sobremim_aprov before:bg-cover before:bg-no-repeat">
                            Técnico em Informática para Internet pelo IF Baiano Campus Guanambi.
                        </li>
                        <li className="pl-[45px] my-5 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-[30px] before:h-[30px] before:bg-img_bg_sobremim_aprov before:bg-cover before:bg-no-repeat">
                            Analista de Sistema pela PUC Minas (Cursando)
                        </li>
                        <li className="pl-[45px] my-5 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-[30px] before:h-[30px] before:bg-img_bg_sobremim_aprov before:bg-cover before:bg-no-repeat">
                            Freelancer, Designer e Desenvolvedor
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Sobremim;
