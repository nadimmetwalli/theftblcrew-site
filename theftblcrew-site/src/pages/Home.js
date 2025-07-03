import Hero from "../components/Hero";
import About from "../components/About"
import StatsChart from '../components/StatsChart';
import BrandsSlider from "../components/BrandsSlider";

function Home() {
    return(
        <div className="container">
            <Hero />
            <About />
            <StatsChart />
            <BrandsSlider />
        </div>
    );
}

export default Home;