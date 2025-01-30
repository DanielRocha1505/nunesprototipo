import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { Link } from 'react-router-dom';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      loss: "- 15kg",
      description: "Graças aos produtos naturais e as dicas do e-book, consegui emagrecer de forma saudável e sustentável!",
      images: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800",
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
      ]
    },
    {
      name: "João Santos",
      age: "42 anos",
      loss: "- 20kg",
      description: "Nunca imaginei que poderia transformar minha vida dessa forma. O suporte e os produtos foram essenciais!",
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
      ]
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      loss: "- 12kg",
      description: "Os produtos são incríveis e o método realmente funciona. Estou muito feliz com os resultados!",
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800"
      ]
    },
    {
      name: "Pedro Oliveira",
      age: "38 anos",
      loss: "- 25kg",
      description: "A combinação dos produtos com o plano alimentar do e-book foi fundamental para minha transformação!",
      images: [
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
        "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800"
      ]
    },
    {
      name: "Carla Mendes",
      age: "31 anos",
      loss: "- 18kg",
      description: "Encontrei um novo estilo de vida. Os resultados superaram minhas expectativas!",
      images: [
        "https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=800",
        "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800"
      ]
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <h2>Histórias de Sucesso</h2>
          <p className="testimonials__subtitle">Pessoas reais, resultados reais</p>
        </AnimateOnScroll>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials__slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-card__image">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="testimonial-card__image-slider"
                  >
                    {testimonial.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img src={image} alt={`${testimonial.name} - ${imgIndex + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <span className="testimonial-card__loss">{testimonial.loss}</span>
                </div>
                <div className="testimonial-card__content">
                  <h3>{testimonial.name}</h3>
                  <span className="testimonial-card__age">{testimonial.age}</span>
                  <p>{testimonial.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials__cta">
          <Link to="/#products" className="btn-primary" onClick={() => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
          }}>
            Comece Sua Transformação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 