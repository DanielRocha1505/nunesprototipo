import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { products } from '../../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const productData = products[id];
        if (!productData) {
          navigate('/');
          return;
        }
        setProduct(productData);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="product-details">
        <div className="product-details__loading">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details__breadcrumb">
          <span onClick={() => navigate('/')}>Home</span>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-details__main">
          <div className="product-details__left">
            <div className="product-details__gallery">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`${product.name} - ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="product-details__info">
              <div className="product-details__section">
                <h2>Descrição</h2>
                <p>{product.longDescription}</p>
              </div>

              <div className="product-details__section">
                <h2>Benefícios</h2>
                <ul className="product-details__benefits">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="product-details__section">
                <h2>Modo de Uso</h2>
                <p>{product.usage}</p>
              </div>

              <div className="product-details__section">
                <h2>Ingredientes</h2>
                <p>{product.ingredients}</p>
              </div>

              <div className="product-details__section">
                <h2>Especificações</h2>
                <div className="product-details__specifications">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="specification-item">
                      <span className="label">{key}:</span>
                      <span className="value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-details__summary">
            <span className="product-details__tag">{product.tag}</span>
            <h1>{product.name}</h1>
            <p className="product-details__price">{product.price}</p>
            <button className="product-details__buy">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 