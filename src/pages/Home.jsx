import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import ProcessoLP from "./components/ProcessoLP";
import Trafego from "./components/Trafego";
import Informativo from "./components/Informativo";
import Sobremim from "./components/Sobremim";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Servicos />
            <ProcessoLP />
            <Trafego />
            <Informativo />
            <Sobremim />
            <Faq/>
            <Footer/>
        </>
    );
}

export default Home;