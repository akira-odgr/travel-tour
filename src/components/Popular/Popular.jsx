import { popularData } from "./popularData";
import popularBg from "../../assets/images/bg.png";

import {
    RiStarFill,
    RiTimeLine,
    RiGroup3Fill,
    RiMapPin2Fill,
} from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Popular.scss";

export const Popular = () => {
    return (
        <section className="section__container popular__container">
            <img src={popularBg} alt="bg" className="popular__bg" />
            <p className="section__subheader">Famous Destinations</p>
            <h2 className="section__header">
                Our Popular <span>Destinations</span>
            </h2>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={3}
                breakpoints={{
                    320: { slidesPerView: 1 }, // スマートフォン
                    768: { slidesPerView: 2 }, // タブレット
                    1024: { slidesPerView: 3 }, // デスクトップ
                }}
                loop={true}
                autoplay={{ delay: 5000 }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper"
            >
                {popularData.map((data) => {
                    return (
                        <SwiperSlide key={data.img} className="swiper__slide">
                            <div className="popular__card">
                                <img src={data.img} alt="" />
                                <div className="popular__content">
                                    <div className="popular__content__rating">
                                        <RiStarFill className="icon" />
                                        {data.rating}
                                    </div>
                                    <h4>{data.title}</h4>
                                    <p>
                                        <span>Rs. {data.Rs}/-</span> Per Person
                                    </p>
                                    <div className="popular__content__footer">
                                        <div>
                                            <span>
                                                <RiTimeLine />
                                            </span>{" "}
                                            {data.day} Day&apos;s
                                        </div>
                                        <div>
                                            <span>
                                                <RiGroup3Fill />
                                            </span>
                                            {data.group}+
                                        </div>
                                        <div>
                                            <span>
                                                <RiMapPin2Fill />
                                            </span>
                                            {data.map}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};
