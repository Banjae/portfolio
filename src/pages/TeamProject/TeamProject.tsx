import Layout from "../../components/Layout/layout";
import styles from "./teamProject.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Mousewheel, Pagination]);

const TeamProject = () => {
    return (
        <Layout title="TeamProject">
            <div className={styles.portfolio}>
                {/* 팀 프로젝트 */}
                <span className={styles.title}>Team Project</span>
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
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div className={styles.aboutBox}></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/GGoBook.mp4`}
                                autoPlay
                                muted
                                controls
                            />
                        </div>
                        <div className={styles.aboutBox}></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/BaedalUniv.mp4`}
                                autoPlay
                                muted
                                controls
                            />
                        </div>
                        <div className={styles.aboutBox}></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div className={styles.aboutBox}>
                            <span></span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
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
                                <span></span>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
};

export default TeamProject;
