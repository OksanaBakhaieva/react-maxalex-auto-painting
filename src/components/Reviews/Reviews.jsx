import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import Title from '../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviews from '../../../reviews.json';
import { SlArrowRight, SlArrowLeft  } from "react-icons/sl";

import css from './Reviews.module.css';

function Reviews() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={css.container} id='reviews'>
            <Title variant="light" title="Customer Reviews" />
            
            <Swiper
                className={css.swiper}
                modules={[Navigation, Keyboard]}
                spaceBetween={16}
                loop={false}
                keyboard={{ enabled: true, onlyInViewport: true }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
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
                <div className={css.swiper_wrapper}>
                    <div className={css.swiper_rightarrow}>
                        <SlArrowLeft />
                    </div>
                    <div className={css.swiper_leftarrow}>
                        <SlArrowRight />
                    </div>
                </div>
               
            </Swiper>
            
        </div>
    )
    
};

export default Reviews;