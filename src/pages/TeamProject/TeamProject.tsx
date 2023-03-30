import Layout from "../../components/Layout/layout";
import styles from "./teamProject.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "MATHEDU"
                                </span>
                                <a
                                    href="https://github.com/Banjae/MathEdu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2023.03.06 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Redux
                            </span>
                            <span>
                                학원에서 사용할 수 있는 선생님과 학생을 위한
                                성적 관리 서비스입니다.
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "꼬북꼬북"
                                </span>
                                <a
                                    href="https://github.com/Banjae/GGoBook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02.07 - 2023.03.03
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Redux
                            </span>
                            <span>
                                읽을 책을 검색하여 책장에 넣고, 일정 및 기록을
                                남길수 있으며 완독후 독후감과 평점을 남길 수
                                있는 독서기록관리 웹사이트입니다.
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>
                                    - kakao 또는 naver를 통한 소셜 로그인 기능
                                </span>
                                <span>- 알라딘API를 이용한 도서 검색 기능</span>
                                <span>- 평점, 독후감 CRUD 기능</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "배달대"
                                </span>
                                <a
                                    href="https://github.com/Banjae/BaedalUniv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2023.01.09~2023.02.05
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Javascript) / Tailwind CSS / Redux
                            </span>
                            <span>배달주문관리</span>
                            <div className={styles.aboutFunction}>
                                <span>- 로그인, 회원가입 기능</span>
                                <span>
                                    - 학교검색 , 시간대별 상점 목록 노출 기능
                                </span>
                                <span>- 주문리뷰 CRUD 기능</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "교보문고 mini"
                                </span>
                                <a
                                    href="https://github.com/Banjae/bookstore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2022.12.16 ~ 2022.12.23
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Javascript) / Bootstrap
                            </span>
                            <span>
                                교보문고 사이트를 참조하여 도서를 검색하고 해당
                                도서에 대한 상세 정보를 조회할 수 있는 미니
                                웹사이트입니다.
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>- 도서 상세 정보 기능</span>
                                <span>- 도서 검색 기능</span>
                            </div>
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
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "빙그레" 클론 코딩
                                </span>
                                <a
                                    href="https://github.com/Banjae/bing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2022.11.20 ~ 2022.11.27
                            </span>
                            <span className={styles.aboutStack}>
                                HTML / CSS / Javascript
                            </span>
                            <span>
                                반응형 작업과 git 협업을 위해 구현한 빙그레
                                사이트 클론 웹사이트입니다.
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>
                                    - 디바이스 넓이에 따라 반응형 CSS를
                                    적용하였습니다.
                                </span>
                                <span>
                                    - 알라딘API를 이용하여 책을 검색 할 수
                                    있습니다.
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
};

export default TeamProject;
