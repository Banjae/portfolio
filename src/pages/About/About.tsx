import Layout from "../../components/Layout/layout";
import styles from "./about.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <Layout title="About">
            <div className={styles.about}>
                <span className={styles.title}>About</span>
                <div className={styles.introduce}>
                    <p className={styles.introTitle}>
                        <FontAwesomeIcon icon={faShapes} />
                        <span>introduce</span>
                    </p>
                    <p className={styles.introContent}>
                        "개발" 은 "설명서 없는 레고" 라고 생각합니다.
                    </p>
                </div>
                <div className={styles.porfile}>
                    <p className={styles.porfTitle}>
                        <FontAwesomeIcon icon={faAddressCard} />
                        <span>profile</span>
                    </p>
                    <div className={styles.porfContent}>
                        <p>
                            <span className={styles.profCate}>Name</span>
                            <span>반재원</span>
                        </p>
                        <p>
                            <span className={styles.profCate}>Birth</span>
                            <span>1996.06.10</span>
                        </p>
                        <p>
                            <span className={styles.profCate}>City</span>
                            <span>대구</span>
                        </p>
                    </div>
                </div>
                <div className={styles.education}>
                    <p className={styles.eduTitle}>
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <span>education</span>
                    </p>
                    <div className={styles.eduContent}>
                        <div className={styles.eduCate}>
                            <p>2023.04</p>
                            <p>2022.02</p>
                            <p>2015.02</p>
                        </div>
                        <div>
                            <p> 그린컴퓨터학원 'React 개발자 과정' 수료 예정</p>
                            <p>
                                계명대학교 중국어문학전공 | 의료관광학전공
                                (복수전공) 졸업
                            </p>
                            <p>경원고등학교 졸업</p>
                        </div>
                    </div>
                </div>
                <div className={styles.resume}>
                    <p className={styles.resumeTitle}>
                        <FontAwesomeIcon icon={faFile} />
                        <span>resume</span>
                    </p>
                    <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
                        <button>
                            이력서 다운
                            <FontAwesomeIcon icon={faDownload} />
                        </button>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default About;
