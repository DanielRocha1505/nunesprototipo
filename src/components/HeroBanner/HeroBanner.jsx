import './HeroBanner.scss';
import { Link } from 'react-scroll';
import pessoasaudavel from '../../../public/pessoa.png';

const HeroBanner = () => {
  return (
    <section id="home" className="hero-banner">
      <div className="container hero-banner__container">
        <div className="hero-banner__content">
          <h1>Transforme sua vida com saúde e bem-estar</h1>
          <p>Descubra produtos naturais que vão te ajudar a alcançar seus objetivos de forma saudável e duradoura.</p>
          <Link to="products" smooth={true} offset={-80} duration={500}>
            <button className="hero-banner__cta">Conheça Nossos Produtos</button>
          </Link>
        </div>
        <div className="hero-banner__image">
          <img src={pessoasaudavel} alt="Pessoa saudável e feliz" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner; 