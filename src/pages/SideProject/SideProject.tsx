import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/layout";
import styles from "./sideProject.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SideProject = () => {
  return (
    <Layout title="SideProject">
      <div className={styles.portfolio}>
        {/* 개인 프로젝트 */}
        <span>Side Project</span>
        <Swiper
          direction={"vertical"}
          slidesPerView={2}
          spaceBetween={40}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.sideP}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="img" />
            </a>
            <div></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="img" />
            </a>
            <div></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="img" />
            </a>
            <div></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="img" />
            </a>
            <div></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="img" />
            </a>
            <div></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default SideProject;
