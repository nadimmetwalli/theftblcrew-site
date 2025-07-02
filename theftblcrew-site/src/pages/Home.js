import Hero from "../components/Hero";
import About from "../components/About"
import StatsChart from '../components/StatsChart';

function Home() {
    return(
        <div className="container">
            <Hero />
            <About />
            <StatsChart />
        </div>
    );
}

export default Home;