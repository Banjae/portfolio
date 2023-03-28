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
                        <div className={styles.aboutBox}>
                            <span>프로젝트명 : "MATHEDU"</span>
                            <span>주요기능: "한살림 장보기" 클론 코딩</span>
                            <span>담당역할: "한살림 장보기" 클론 코딩</span>
                            <span>
                                프로젝트 기간: "한살림 장보기" 클론 코딩
                            </span>
                            <span>사용기술: "한살림 장보기" 클론 코딩</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/GGoBook.mp4`}
                                muted
                                controls
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <span>프로젝트명 : "꼬북꼬북"</span>
                            <span>주요기능: "한살림 장보기" 클론 코딩</span>
                            <span>담당역할: "한살림 장보기" 클론 코딩</span>
                            <span>
                                프로젝트 기간: "한살림 장보기" 클론 코딩
                            </span>
                            <span>사용기술: "한살림 장보기" 클론 코딩</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/BaedalUniv.mp4`}
                                muted
                                controls
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <span>프로젝트명 : "배달대"</span>
                            <span>주요기능: "한살림 장보기" 클론 코딩</span>
                            <span>담당역할: "한살림 장보기" 클론 코딩</span>
                            <span>
                                프로젝트 기간: "한살림 장보기" 클론 코딩
                            </span>
                            <span>사용기술: "한살림 장보기" 클론 코딩</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/kyobo.mp4`}
                                muted
                                controls
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <span>프로젝트명 : "교보문고 mini"</span>
                            <span>주요기능: "한살림 장보기" 클론 코딩</span>
                            <span>담당역할: "한살림 장보기" 클론 코딩</span>
                            <span>
                                프로젝트 기간: "한살림 장보기" 클론 코딩
                            </span>
                            <span>사용기술: "한살림 장보기" 클론 코딩</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.teamP}>
                        <div className={styles.aBox}>
                            <a
                                href="https://gaeguribanchan.github.io/bing/#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div className={styles.aboutBox}>
                            <span>프로젝트명 : "빙그레" 클론 코딩</span>
                            <span>주요기능: "한살림 장보기" 클론 코딩</span>
                            <span>
                                담당역할: 고객문의 및 불편사항 / 빙그레 임직원
                                및 종사자 온라인제보 / footer / 하단 고정 메뉴
                            </span>
                            <span>
                                프로젝트 기간: "한살림 장보기" 클론 코딩
                            </span>
                            <span>사용기술: "한살림 장보기" 클론 코딩</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
};

export default TeamProject;
