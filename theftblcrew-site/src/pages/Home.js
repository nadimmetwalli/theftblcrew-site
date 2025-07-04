import Hero from "../components/Hero";
import About from "../components/About"
import StatsChart from '../components/StatsChart';
import BrandsSlider from "../components/BrandsSlider";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import Footer from "../components/Footer";

function Home() {
    return(
        <div className="container">
            <Hero />
            <About />
            <StatsChart />
            <BrandsSlider />
            <WhyWorkWithUs />
            <Footer />
        </div>
    );
}

export default Home;