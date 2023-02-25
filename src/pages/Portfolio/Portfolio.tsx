import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/layout";
import styles from "./portfolio.module.scss";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <div>
        {/* 팀프로젝트 */}
        <div className={styles.portfolio}>
          <span>Team Project</span>
          <div className={styles.teamP}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="img" />
            </a>
            <div>
              <li>프로젝트명 : </li>
              <li>프로젝트 기간 : </li>
              <li>프로젝트 주제 : </li>
              <li>프로젝트 기여도 : </li>
              <li>프로젝트 도구 : </li>
              <li>프로젝트 사용언어 : </li>
              <li>프로젝트 피그마 : </li>
              <li>프로젝트 Git : </li>
              <li>프로젝트 노션 : </li>
            </div>
          </div>
        </div>
        {/* 개인 스터디 프로젝트 */}
        <div className={styles.sid}>
          <span>Side Project</span>
          {/* Swiper 배치 */}
          <Swiper
            className={styles.portfolioSlide}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={true}
            modules={[Pagination]}
          >
            <SwiperSlide className={styles.slides}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/sample.png" alt="portfolio" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/sample.png" alt="portfolio" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/sample.png" alt="portfolio" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/sample.png" alt="portfolio" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/sample.png" alt="portfolio" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/sample.png" alt="portfolio" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
