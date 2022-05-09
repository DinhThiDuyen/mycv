import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReadingBook from "../../img/readingbook.jpg";
import Travel from "../../img/travel.jpg";
import Music from "../../img/music.jpg";
import Badminton from "../../img/badminton.png";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: ReadingBook,
      review:
        "Reading helps stimulate brain developmen, helps to expand knowledge and helps to expand vocabulary. Improve your memory by reading books regularly, analytical thinking skills. Enhance concentration",
    },
    {
      img: Travel,
      review:
        "The trip will help you relax your mind, improve stress, reduce the risk of depression and heart disease. The quiet space, fresh climate also contribute to the healing of mental and physical injuries.",
    },
    {
      img: Music,
      review:
        "Music makes you feel happier. Music gives you more motivation. Music relieves stress and improves health. Music helps you sleep better, reduce the risk of depression.",
    },
    {
      img: Badminton,
      review:
        "Badminton can help reduce health risks such as high blood pressure, diabetes, obesity... It also increases good cholesterol, which can help reduce the risk of cardiovascular diseases.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>My favorite </span>
        <span>Activity </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/*slider*/}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
