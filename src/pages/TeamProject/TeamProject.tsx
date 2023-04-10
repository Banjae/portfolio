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
                <div className={styles.title}>Team Project</div>

                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{ clickable: true }}
                    className={styles.teamProject}
                >
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.videoBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/mathedu.mp4`}
                                muted
                                controls
                                autoPlay
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    MATHEDU
                                </span>
                                <a
                                    href="https://github.com/Banjae/MathEdu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                        alt="gitHub"
                                    />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2023.03.15 ~ 2023.04.05
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) | styled-components |
                                Redux
                            </span>
                            <span className={styles.aboutService}>
                                반과 학생의 성적을 입력 및 조회하고, 게시판을
                                활용하여 파일을 <br />
                                다운로드할 수 있는 선생님과 학생 모두를 위한
                                성적 관리 서비스입니다.
                            </span>
                            <span className={styles.aboutCharge}>담당역할</span>
                            <div className={styles.aboutFunction}>
                                <span>- 사이드헤더 및 레이아웃 제작</span>
                                <span>
                                    - 자료실, 공지사항 출력 및 검색 기능
                                </span>
                                <span>- 게시글 및 파일 CRUD 기능</span>
                                <span>
                                    - 학생 등록 및 학생 비밀번호 변경 기능
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.videoBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/GGoBook.mp4`}
                                muted
                                controls
                                autoPlay
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    꼬북꼬북
                                </span>
                                <a
                                    href="https://github.com/Banjae/GGoBook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                        alt="gitHub"
                                    />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02.07 ~ 2023.03.03
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) | styled-components |
                                Redux
                            </span>
                            <span className={styles.aboutService}>
                                읽을 책을 검색하여 책장에 넣고, 일정 및 기록을
                                남길 수 있으며 <br />
                                완독 후 독후감과 평점을 공유할 수 있는 독서 기록
                                관리 서비스입니다.
                            </span>
                            <span className={styles.aboutCharge}>담당역할</span>
                            <div className={styles.aboutFunction}>
                                <span>- 카카오, 네이버 소셜 로그인 기능</span>
                                <span>
                                    - 알라딘API 를 이용한 도서 검색 및 리스트
                                    출력 기능
                                </span>
                                <span>
                                    - 도서 정보 출력 및 평점, 독후감 출력 기능
                                </span>
                                <span>- 평점, 독후감 등록 및 수정 기능</span>
                                <span>- 프로필 이미지 및 닉네임 수정 기능</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.videoBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/BaedalUniv.mp4`}
                                muted
                                controls
                                autoPlay
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    배달대
                                </span>
                                <a
                                    href="https://github.com/Banjae/BaedalUniv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                        alt="gitHub"
                                    />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2023.01.09 ~ 2023.02.05
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Javascript) | Tailwind CSS | Redux
                            </span>
                            <span className={styles.aboutService}>
                                대학을 선택하고, 시간대별로 주문 가능한
                                음식점에서 메뉴를 <br /> 장바구니에 담고 주문할
                                수 있는 대학생을 위한 배달 주문 관리
                                서비스입니다.
                            </span>
                            <span className={styles.aboutCharge}>담당역할</span>
                            <div className={styles.aboutFunction}>
                                <span>- 회원가입 및 로그인 기능</span>
                                <span>
                                    - 대학교 검색, 시간대별 상점 목록 노출 기능
                                </span>
                                <span>- 상점별 메뉴, 리뷰, 정보 출력 기능</span>
                                <span>- 실시간 주문표 데이터 연동 기능</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.videoBox}>
                            <video
                                src={`${process.env.PUBLIC_URL}/videos/kyobo.mp4`}
                                muted
                                controls
                                autoPlay
                            />
                        </div>
                        <div className={styles.aboutBox}>
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    교보문고 mini
                                </span>
                                <a
                                    href="https://github.com/Banjae/bookstore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                        alt="gitHub"
                                    />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2022.12.16 ~ 2022.12.23
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Javascript) | Bootstrap
                            </span>
                            <span className={styles.aboutService}>
                                교보문고 사이트를 참조하여 도서를 검색하고 해당
                                도서에 <br /> 대한 상세 정보를 조회할 수 있는
                                교보문고 미니 웹사이트입니다.
                            </span>
                            <span className={styles.aboutCharge}>담당역할</span>
                            <div className={styles.aboutFunction}>
                                <span>- 도서 상세 정보 출력 기능</span>
                                <span>- 도서 미리보기 모달 팝업 구현</span>
                                <span>- SNS 공유 및 좋아요 버튼 구현</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.videoBox}>
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
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                        alt="gitHub"
                                    />
                                </a>
                            </div>
                            <span className={styles.aboutDate}>
                                2022.11.20 ~ 2022.11.27
                            </span>
                            <span className={styles.aboutStack}>
                                HTML | CSS | Javascript
                            </span>
                            <span className={styles.aboutService}>
                                반응형 작업과 git 협업을 위해 구현한 빙그레
                                사이트 클론 웹사이트입니다.
                            </span>
                            <span className={styles.aboutCharge}>담당역할</span>
                            <div className={styles.aboutFunction}>
                                <span>
                                    - 고객문의, 온라인제보, 푸터, 우측하단
                                    픽스메뉴 작업
                                </span>
                                <span>
                                    - 디바이스 넓이에 따라 반응형 CSS 적용
                                </span>
                                <span>
                                    - AOS 를 이용한 스크롤 시 애니메이션 작업
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
