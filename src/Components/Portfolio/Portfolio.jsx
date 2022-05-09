import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import TheBand from "../../img/theband.png";
import MyCV from "../../img/mycv.png";
import Movie from "../../img/movie.png";
import ZingMP3 from "../../img/zingmp3.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={TheBand} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Movie} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={ZingMP3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MyCV} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
