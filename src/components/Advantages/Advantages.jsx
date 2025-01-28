import './Advantages.scss';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';

const Advantages = () => {
  const advantages = [
    {
      icon: "fas fa-leaf",
      title: "100% Natural",
      description: "Produtos desenvolvidos com ingredientes naturais e seguros"
    },
    {
      icon: "fas fa-certificate",
      title: "Certificado",
      description: "Produtos aprovados e certificados pela ANVISA"
    },
    {
      icon: "fas fa-shipping-fast",
      title: "Entrega Rápida",
      description: "Enviamos para todo o Brasil com rapidez e segurança"
    }
  ];

  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__content">
          <div className="advantages__image">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop" 
              alt="Produtos Naturais" 
            />
          </div>
          <div className="advantages__info">
            <h2>Por que Escolher Nossos Produtos?</h2>
            <div className="advantages__list">
              {advantages.map((advantage, index) => (
                <AnimateOnScroll key={index} animation="fade-left">
                  <div className="advantage-card">
                    <i className={advantage.icon}></i>
                    <div className="advantage-card__content">
                      <h3>{advantage.title}</h3>
                      <p>{advantage.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages; 