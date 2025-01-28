import { useState } from 'react';
import './FAQ.scss';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Como os produtos funcionam?',
      answer: 'Nossos produtos são desenvolvidos com ingredientes naturais que auxiliam no processo de emagrecimento...'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Os resultados podem variar de pessoa para pessoa, mas geralmente são percebidos nas primeiras semanas...'
    },
    {
      question: 'Os produtos têm efeitos colaterais?',
      answer: 'Nossos produtos são 100% naturais e seguros, sem efeitos colaterais conhecidos...'
    },
    {
      question: 'Posso tomar junto com outros medicamentos?',
      answer: 'Recomendamos consultar seu médico antes de iniciar qualquer tratamento...'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq__grid">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} animation="fade-up">
              <div 
                className={`faq__item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq__question">
                  <h3>{faq.question}</h3>
                  <span className="faq__icon">+</span>
                </div>
                <div className="faq__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 