import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Achievements from '../../components/Achievements/Achievements';
import Identification from '../../components/Identification/Identification';
import Products from '../../components/Products/Products';
import FAQ from '../../components/FAQ/FAQ';
import Contact from '../../components/Contact/Contact';
import './Home.scss';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Achievements />
      <Identification />
      <Products />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home; 