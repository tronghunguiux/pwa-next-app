/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperProps {
    type: "single" | "multi";
}

const SwiperSlider = ({ type }: SwiperProps) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            spaceBetween={10}
            slidesPerView={type === "single" ? 1 : 6}
            slidesPerGroup={type === "single" ? 1 : 6}
            breakpoints={
                type === "multi"
                    ? {
                        320: { slidesPerView: 2, slidesPerGroup: 2 },
                        640: { slidesPerView: 3, slidesPerGroup: 3 },
                        1024: { slidesPerView: 6, slidesPerGroup: 6 },
                    }
                    : undefined
            }
        >
            {Array.from({ length: 25 }).map((_, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`https://via.placeholder.com/300?text=Slide+${index + 1}`}
                        alt={`Slide ${index + 1}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;
