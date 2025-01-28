import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Achievements from '../../components/Achievements/Achievements';
import Identification from '../../components/Identification/Identification';
import Products from '../../components/Products/Products';
import Contact from '../../components/Contact/Contact';
import FAQ from '../../components/FAQ/FAQ';
import './Home.scss';
import Tips from '../../components/Tips/Tips';
import Advantages from '../../components/Advantages/Advantages';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <Tips />
      <Testimonials />
      <Advantages />
      <Identification />
      <Products />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home; 