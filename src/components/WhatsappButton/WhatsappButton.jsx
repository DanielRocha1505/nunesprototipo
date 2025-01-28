import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.scss';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
      <div className="whatsapp-button__tooltip">
        Fale conosco no WhatsApp
      </div>
    </a>
  );
};

export default WhatsappButton; 