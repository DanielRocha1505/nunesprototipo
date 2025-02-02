import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envio de email aqui
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Informações de Contato</h3>
            <p>Tire suas dúvidas ou faça um orçamento</p>
            <div className="contact__details">
              <p>Email: contato@empresa.com</p>
              <p>Telefone: (18) 9 9737-6072</p>
              <p>Horário: Seg-Sex, 9h às 18h</p>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Seu Telefone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 