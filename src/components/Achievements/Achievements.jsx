import { FaUsers, FaShoppingBag, FaStar } from 'react-icons/fa';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import './Achievements.scss';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaUsers />,
      number: '1000+',
      text: 'Clientes Satisfeitos'
    },
    {
      icon: <FaShoppingBag />,
      number: '5000+',
      text: 'Vendas Realizadas'
    },
    {
      icon: <FaStar />,
      number: '4.9',
      text: 'Avaliação Média'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <h2>Nossas Conquistas</h2>
        </AnimateOnScroll>
        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fade-up"
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="achievements__item">
                <div className="achievements__icon">{item.icon}</div>
                <h3>{item.number}</h3>
                <p>{item.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 