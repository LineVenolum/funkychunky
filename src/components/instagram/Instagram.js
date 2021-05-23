import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import styles from "./Instagram.module.scss";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Pagination, Navigation]);

export const Instagram = () => {
  const isIpad = useMediaQuery({ query: "(max-device-width: 1223px)" });
  const isMobile = useMediaQuery({ query: "(max-device-width: 767px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-device-width: 560px)" });

  const [instaposts, setInstaposts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(
      "https://v1.nocodeapi.com/linevenolum/instagram/wwXcTnelbjmsrURX"
    );
    const json = await response.json();
    console.log(json);
    setInstaposts(json.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.instagram}>
      <h2 className={styles.head}>FØLG OSS PÅ INSTAGRAM</h2>
      <Swiper
        slidesPerView={isSmallMobile ? 2 : isMobile ? 3 : isIpad ? 3 : 4}
        slidesPerGroup={2}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        {instaposts.map((post) => {
          return (
            <SwiperSlide key={post.id} className={styles.Swiper}>
              <img
                className={isMobile ? styles.mobileImage : styles.image}
                src={post.media_url}
                alt="strikkeoppskrift"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
