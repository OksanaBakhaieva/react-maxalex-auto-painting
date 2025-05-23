import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import Title from '../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviews from '../../../reviews.json';
import { SlArrowRightCircle, SlArrowLeftCircle  } from "react-icons/sl";

import css from './Reviews.module.css';

function Reviews() {
    const prevRef = useRef(null);       // тому що використовую ручне управління слайдами
    const nextRef = useRef(null);
    const [showArrows, setShowArrows] = useState(true);

    // Автоматично приховує стрілки, якщо мало відгуків
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const slidesPerView = width >= 1440 ? 4 : width >= 768 ? 2 : 1;
            setShowArrows(reviews.length > slidesPerView);
        };

        handleResize();  // запуск при завантаженні
        window.addEventListener('resize', handleResize);    // починаємо слухати зміну вікна
        return () => {
            window.removeEventListener('resize', handleResize);   // зупиняємо слухання, коли компонент зникає
        };
    }, []);

    return (
        <div className={css.container} id='reviews'>
            <Title variant="light" title="Customer Reviews" />
            
            <Swiper
                className={css.swiper}
                modules={[Navigation, Keyboard]}
                spaceBetween={16}
                loop={false} //  зациклює слайди
                keyboard={{ enabled: true, onlyInViewport: true }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    1: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1440: { slidesPerView: 4 }
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className={css.card}>
                            <p className={css.text}>“{review.text}”</p>
                            <p className={css.author}>{review.author}</p>
                        </div>
                    </SwiperSlide>
                ))}

                {showArrows && (
                    <div className={css.swiper_wrapper}>
                        <div ref={prevRef} className={css.swiper_leftarrow}>
                            <SlArrowLeftCircle />
                        </div>
                        <div ref={nextRef} className={css.swiper_rightarrow}>
                            <SlArrowRightCircle />
                        </div>
                    </div>
                )}
            </Swiper>
        </div>
    );
};

export default Reviews;