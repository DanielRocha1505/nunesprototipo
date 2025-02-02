import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.scss';

const Footer = ({ showMenu = true }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'achievements', label: 'Conquistas' },
    { id: 'identification', label: 'Você se Identifica?' },
    { id: 'products', label: 'Produtos' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__info">
            <RouterLink to="/">
              <img src="/logo.png" alt="Logo" className="footer__logo" />
            </RouterLink>
            <p>Transformando vidas através de produtos naturais para emagrecimento saudável.</p>
          </div>

          {showMenu && (
            <div className="footer__links">
              <h3>Links Rápidos</h3>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    {isHome ? (
                      <ScrollLink to={item.id} smooth={true} offset={-80} duration={500}>
                        {item.label}
                      </ScrollLink>
                    ) : (
                      <RouterLink to={`/#${item.id}`}>
                        {item.label}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="footer__contact">
            <h3>Contato</h3>
            <p>Email: contato@empresa.com</p>
            <p>Telefone: (18) 9 9737-6072</p>
            <p>Endereço: Rua Exemplo, 123 - São Paulo/SP</p>
          </div>

          <div className="footer__social">
            <h3>Redes Sociais</h3>
            <div className="footer__social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://wa.me/5518997376072" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 