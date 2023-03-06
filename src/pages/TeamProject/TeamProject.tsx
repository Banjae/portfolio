import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/layout";
import styles from "./teamProject.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TeamProject = () => {
  return (
    <Layout title="TeamProject">
      <div className={styles.portfolio}>
        {/* 팀프로젝트 */}
        <span>Team Project</span>
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
          <SwiperSlide className={styles.teamP}>
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
          </SwiperSlide>
          <SwiperSlide className={styles.teamP}>
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
          </SwiperSlide>
          <SwiperSlide className={styles.teamP}>
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
          </SwiperSlide>
          <SwiperSlide className={styles.teamP}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default TeamProject;
