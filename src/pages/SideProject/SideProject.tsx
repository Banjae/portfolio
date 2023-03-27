import Layout from "../../components/Layout/layout";
import styles from "./sideProject.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Mousewheel, Pagination]);

const SideProject = () => {
  return (
    <Layout title="SideProject">
      <div className={styles.portfolio}>
        {/* 개인 프로젝트 */}
        <span className={styles.title}>Side Project</span>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={10}
          mousewheel={true}
          pagination={{ clickable: true }}
          breakpoints={{
            885: {
              direction: "vertical",
              slidesPerView: 2,
            },
          }}
          className={styles.slide}
        >
          <SwiperSlide className={styles.sideP}>
            <div className={styles.aBox}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="" alt="img" />
              </a>
            </div>
            <div className={styles.aboutBox}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <div className={styles.aBox}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="" alt="img" />
              </a>
            </div>
            <div className={styles.aboutBox}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <div className={styles.aBox}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="" alt="img" />
              </a>
            </div>
            <div className={styles.aboutBox}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <div className={styles.aBox}>
              <a
                href="https://banjae.github.io/hansalim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/project/hansalim.png`}
                  alt="img"
                />
              </a>
            </div>
            <div className={styles.aboutBox}>
              <span>프로젝트명 : "한살림 장보기" 클론 코딩</span>
              사용기술 : HTML CSS
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.sideP}>
            <div className={styles.aBox}>
              <a
                href="https://banjae.github.io/stx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="" alt="img" />
              </a>
            </div>
            <div className={styles.aboutBox}>
              <p>
                <span>프로젝트명 : "STX 건설" 클론 코딩</span>
                사용기술 : HTML CSS
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default SideProject;
