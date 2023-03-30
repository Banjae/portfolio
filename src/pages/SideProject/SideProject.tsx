import Layout from "../../components/Layout/layout";
import styles from "./sideProject.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "오뭐신?" (개발중)
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Firebase
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "오뭐신?" (개발중)
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Firebase
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "오뭐신?" (개발중)
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Firebase
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "한살림 장보기" 클론 코딩
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>2022.11</span>
                            <span className={styles.aboutStack}>
                                HTML / CSS / Javascript
                            </span>
                            <span>"한살림 장보기" 클론 코딩</span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "STX건설" 클론 코딩
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>2022.11</span>
                            <span className={styles.aboutStack}>
                                HTML / CSS
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
};

export default SideProject;
