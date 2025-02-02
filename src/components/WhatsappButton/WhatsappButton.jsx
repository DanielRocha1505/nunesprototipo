import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.scss';

const WhatsappButton = () => {
  const phoneNumber = '5518997376072';
  const message = 'Olá! Gostaria de saber mais sobre os produtos.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-button__tooltip">Fale Conosco</span>
    </a>
  );
};

export default WhatsappButton; 