import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <h2>Entre em Contato</h2>
        </AnimateOnScroll>
        
        <div className="contact__grid">
          <AnimateOnScroll animation="fade-right">
            <div className="contact__info">
              <div className="contact__item">
                <FaWhatsapp />
                <div>
                  <h3>WhatsApp</h3>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="contact__item">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>contato@exemplo.com</p>
                </div>
              </div>
              
              <div className="contact__item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Endereço</h3>
                  <p>Rua Exemplo, 123 - São Paulo/SP</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left">
            <form className="contact__form">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Telefone" />
              <textarea placeholder="Mensagem" required></textarea>
              <button type="submit">Enviar Mensagem</button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact; 