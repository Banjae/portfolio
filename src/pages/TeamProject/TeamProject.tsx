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
                {/* 개인 프로젝트 */}
                <span>Team Project</span>
                <Swiper
                    direction="horizontal"
                    slidesPerView={1}
                    spaceBetween={10}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className={styles.swiper}
                    breakpoints={{
                        820: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            direction: "vertical",
                        },
                    }}
                >
                    <SwiperSlide className={styles.sideP}>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div></div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.sideP}>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
};

export default TeamProject;
