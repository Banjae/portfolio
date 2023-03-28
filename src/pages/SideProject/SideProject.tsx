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
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div className={styles.aboutBox}>
                            <p>
                                <span>프로젝트명 : "오뭐신?" (개발중)</span>
                                <span>
                                    프로젝트 설명 : '카카오맵 API' 와
                                    'OpenWeatherMap API' 를 활용하여 유저가
                                    설정한 지역의 날씨 데이터를 얻고, 그 날씨에
                                    따라 신을 신발을 추천해주는 사이트
                                </span>
                                <span>프로젝트 기간 : 2023.02 ~ ing</span>
                                <span>
                                    사용기술: React / Typescript / Firebase
                                </span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
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
                            <p>
                                <span>프로젝트명 : "Banjae's porfolio"</span>
                                <span>주요기능: </span>
                                <span>프로젝트 기간: 2023.02 ~ ing</span>
                                <span>사용기술: React / Typescript </span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
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
                            <p>
                                <span>
                                    프로젝트명 : "한살림 장보기" 클론 코딩
                                </span>
                                <span>주요기능: "한살림 장보기" 클론 코딩</span>
                                <span>담당역할: "한살림 장보기" 클론 코딩</span>
                                <span>
                                    프로젝트 기간: "한살림 장보기" 클론 코딩
                                </span>
                                <span>사용기술: "한살림 장보기" 클론 코딩</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
                        <div className={styles.aBox}>
                            <a
                                href="https://banjae.github.io/hansalim/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>클릭시 사이트로 이동합니다</span>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/project/hansalim.png`}
                                    alt="img"
                                />
                            </a>
                        </div>
                        <div className={styles.aboutBox}>
                            <p>
                                <span>
                                    프로젝트명 : "한살림 장보기" 클론 코딩
                                </span>
                                <span>주요기능: "한살림 장보기" 클론 코딩</span>
                                <span>담당역할: "한살림 장보기" 클론 코딩</span>
                                <span>
                                    프로젝트 기간: "한살림 장보기" 클론 코딩
                                </span>
                                <span>사용기술: HTML / CSS / Javascript</span>
                            </p>
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
                                <span>주요기능: "한살림 장보기" 클론 코딩</span>
                                <span>담당역할: "한살림 장보기" 클론 코딩</span>
                                <span>
                                    프로젝트 기간: "한살림 장보기" 클론 코딩
                                </span>
                                <span>사용기술: HTML / CSS </span>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
};

export default SideProject;
