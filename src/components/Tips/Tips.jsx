import './Tips.scss';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { Link } from 'react-router-dom';

const Tips = () => {
  const tips = [
    {
      title: "Alimentação Balanceada",
      description: "Mantenha uma dieta equilibrada com proteínas, carboidratos e gorduras boas. Priorize alimentos naturais e evite processados.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800"
    },
    {
      title: "Hidratação",
      description: "Beba pelo menos 2 litros de água por dia. A hidratação adequada é essencial para o metabolismo e processo de emagrecimento.",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800"
    },
    {
      title: "Exercícios Físicos",
      description: "Pratique atividades físicas regularmente. Combine exercícios aeróbicos com musculação para melhores resultados.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800"
    }
  ];

  return (
    <section className="tips">
      <div className="container">
        <h2>Dicas para Emagrecer</h2>
        <div className="tips__grid">
          {tips.map((tip, index) => (
            <AnimateOnScroll key={index} animation="fade-up">
              <div className="tip-card">
                <div className="tip-card__image">
                  <img src={tip.image} alt={tip.title} />
                </div>
                <div className="tip-card__content">
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="tips__cta">
          <Link 
            to="/#products" 
            className="btn-primary" 
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                // Primeiro, clica na aba de ebooks
                const ebooksTab = document.querySelector('.products__tab:nth-child(2)');
                if (ebooksTab) ebooksTab.click();
                
                // Depois rola até a seção
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Quer saber mais dicas? Acesse nosso e-book
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tips; 