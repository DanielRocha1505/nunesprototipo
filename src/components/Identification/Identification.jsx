import './Identification.scss';
import { Link } from 'react-scroll';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';

const Identification = () => {
  const profiles = [
    {
      title: 'Acima do Peso?',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800',
      description: 'Descubra como emagrecer de forma saudável'
    },
    {
      title: 'Dificuldade para Emagrecer?',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800',
      description: 'Métodos comprovados para acelerar seu metabolismo'
    },
    {
      title: 'Ansiedade por Comida?',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800',
      description: 'Controle a compulsão alimentar naturalmente'
    },
    {
      title: 'Metabolismo Lento?',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800',
      description: 'Acelere seu metabolismo com produtos naturais'
    }
  ];

  return (
    <section id="identification" className="identification">
      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <h2>Você se Identifica?</h2>
        </AnimateOnScroll>
        <div className="identification__grid">
          {profiles.map((profile, index) => (
            <AnimateOnScroll 
              key={index} 
              animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
            >
              <div className="identification__item">
                <div className="identification__image">
                  <img src={profile.image} alt={profile.title} />
                </div>
                <div className="identification__content">
                  <h3>{profile.title}</h3>
                  <p>{profile.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="scale">
          <div className="identification__cta">
            <Link to="products" smooth={true} offset={-80} duration={500}>
              <button>Então Iremos te Ajudar!</button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Identification; 