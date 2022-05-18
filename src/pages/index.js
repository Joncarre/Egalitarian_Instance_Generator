import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';


const Home = () => {
    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    );
}

export default Home;