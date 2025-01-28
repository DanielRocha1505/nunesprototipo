import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Header.scss';

import logo from '../../../public/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          const sectionId = section.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHome]);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <RouterLink to="/">
            <img src={logo} alt="Logo" />
          </RouterLink>
        </div>

        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
          <ul className="header__menu">
            {menuItems.map((item, index) => (
              <li key={item.id} style={{ '--i': index }}>
                {isHome ? (
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={activeSection === item.id ? 'active' : ''}
                  >
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
        </nav>

        <div className="header__social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

        <button 
          className={`header__mobile-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 