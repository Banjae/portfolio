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

export default TeamProject;
