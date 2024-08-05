import { Link } from 'react-router-dom';
import FaqCard from '../../components/FaqCard';

const Faq = () => {
    const faqsList = [
        {
            q: "Qual é o prazo de entrega?",
            a: "O prazo de entrega pode variar conforme o projeto. Para projetos mais simples, a entrega pode ser realizada em 4 a 7 dias. Em projetos mais completos e complexos, forneceremos uma data específica de entrega com base na complexidade e nos requisitos do projeto."
        },
        {
            q: "Vocês oferecem suporte pós-entrega?",
            a: "Sim, oferecemos suporte completo após a entrega do projeto. Nossa equipe está disponível para ajudar com quaisquer dúvidas, ajustes ou necessidades adicionais que possam surgir, garantindo que seu projeto continue funcionando perfeitamente."
        },
        ,
        {
            q: "Por quanto tempo terei suporte?",
            a: "Durante os primeiros 3 meses após a entrega do projeto, você terá suporte completo e gratuito. Faremos qualquer ajuste necessário sem cobrar nenhum valor adicional, garantindo que seu projeto funcione perfeitamente durante esse período inicial."
        },
        {
            q: "É necessário ter um domínio e hospedagem?",
            a: "Sim, porém, se você não tiver, nós auxiliaremos durante as configurações do apontamento e qualquer configuração necessária para desenvolvermos o projeto."
        },
        {
            q: "Quais são as opções de pagamento disponíveis?",
            a: "Oferecemos diversas opções de pagamento para sua conveniência. Você pode pagar usando: Cartão de crédito ou débito, transferência bancária, Paypal, Boleto e Pix."
        }
    ]
    return (
        <section id="faq" className="w-full h-auto py-20 px-[20px] relative">

            <div className="flex max-lg:flex-wrap items-start justify-between w-full mx-auto max-w-[1050px]">
                <div className="max-w-[730px] mx-auto">
                    <div className='relative my-5' data-aos="fade-up">
                        <h2 className='text-faq-bg font-bold text-[125px] text-center'>FAQ</h2>
                        <span className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[165px] text-center leading-[28px] text-white text-[28px] font-medium'>Perguntas
                            Frequentes</span>
                    </div>
                    {
                        faqsList.map((item, idx) => (
                            <FaqCard
                                idx={idx}
                                key={idx}
                                faqsList={item}
                            />
                        ))
                    }
                    <h3 className='font-medium text-[35px] text-white text-center my-8' data-aos="fade-up">Ainda ficou com alguma dúvida?</h3>
                    <div className='flex justify-center' data-aos="fade-up">
                        <Link
                            to={"https://wa.me/5577991292464"}
                            target='_blank'
                            className="!inline-flex items-center justify-center btn-primary text-[22px] font-medium max-sm:px-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={35}
                                height={35}
                                viewBox="0 0 26 26"
                                fill="none"
                                className="mr-3"
                            >
                                <path
                                    d="M20.3481 5.36035C18.3022 3.30957 15.5776 2.18164 12.6821 2.18164C6.70557 2.18164 1.84229 7.04492 1.84229 13.0215C1.84229 14.9307 2.34033 16.7959 3.2876 18.4414L1.74951 24.0566L7.49658 22.5479C9.07861 23.4121 10.8608 23.8662 12.6772 23.8662H12.6821C18.6538 23.8662 23.6245 19.0029 23.6245 13.0264C23.6245 10.1309 22.394 7.41113 20.3481 5.36035ZM12.6821 22.04C11.061 22.04 9.47412 21.6055 8.09228 20.7852L7.76514 20.5898L4.35693 21.4834L5.26514 18.1582L5.05029 17.8164C4.14697 16.3809 3.67334 14.7256 3.67334 13.0215C3.67334 8.05566 7.71631 4.0127 12.687 4.0127C15.0942 4.0127 17.355 4.9502 19.0542 6.6543C20.7534 8.3584 21.7983 10.6191 21.7935 13.0264C21.7935 17.9971 17.6479 22.04 12.6821 22.04ZM17.6235 15.292C17.355 15.1553 16.022 14.501 15.7729 14.4131C15.5239 14.3203 15.3433 14.2764 15.1626 14.5498C14.9819 14.8232 14.4644 15.4287 14.3032 15.6143C14.147 15.7949 13.9858 15.8193 13.7173 15.6826C12.1255 14.8867 11.0806 14.2617 10.0308 12.46C9.75244 11.9814 10.3091 12.0156 10.8267 10.9805C10.9146 10.7998 10.8706 10.6436 10.8022 10.5068C10.7339 10.3701 10.1919 9.03711 9.96729 8.49512C9.74756 7.96777 9.52295 8.04102 9.35693 8.03125C9.20068 8.02148 9.02002 8.02148 8.83936 8.02148C8.65869 8.02148 8.36572 8.08984 8.1167 8.3584C7.86768 8.63184 7.16943 9.28613 7.16943 10.6191C7.16943 11.9521 8.14111 13.2412 8.27295 13.4219C8.40967 13.6025 10.1821 16.3369 12.9019 17.5137C14.6206 18.2559 15.2944 18.3193 16.1538 18.1924C16.6763 18.1143 17.7554 17.5381 17.98 16.9033C18.2046 16.2686 18.2046 15.7266 18.1362 15.6143C18.0728 15.4922 17.8921 15.4238 17.6235 15.292Z"
                                    fill="white"
                                />
                            </svg>
                            Chamar no WhatsApp</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Faq;