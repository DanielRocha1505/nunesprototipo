import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { products, ebooks } from '../../data/products';
import './Products.scss';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  const productsList = Object.values(activeTab === 'products' ? products : ebooks);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const ProductCard = ({ item }) => (
    <AnimateOnScroll animation="fade-up">
      <div className="product-card">
        <span className="product-card__tag">{item.tag}</span>
        <img src={item.images[0]} alt={item.name} />
        <div className="product-card__content">
          <h3>{item.name}</h3>
          <p className="product-card__price">{item.price}</p>
          <p>{item.description}</p>
          <div className="product-card__buttons">
            <Link to={`/produto/${item.id}`} className="btn-details">
              Detalhes
            </Link>
            <a 
              href={item.buyLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-buy"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Nossos Produtos</h2>
        
        <div className="products__tabs">
          <button 
            className={`products__tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Produtos
          </button>
        </div>

        <div className="products__section">
          <h3>{activeTab === 'products' ? 'Produtos Naturais' : 'E-books Exclusivos'}</h3>
          {window.innerWidth <= 768 ? (
            <Slider {...sliderSettings}>
              {productsList.map(product => (
                <ProductCard key={product.id} item={product} />
              ))}
            </Slider>
          ) : (
            <div className="products__grid">
              {productsList.slice(0, showAll ? productsList.length : 3).map(product => (
                <ProductCard key={product.id} item={product} />
              ))}
            </div>
          )}
          {!showAll && productsList.length > 3 && window.innerWidth > 768 && (
            <button className="products__show-more" onClick={() => setShowAll(true)}>
              Ver Mais
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products; 