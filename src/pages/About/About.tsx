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
            "개발" 이란 단어는 저를 매일 설레게하고, 성장해나가게 만들어줍니다.
          </p>
        </div>
        <div className={styles.porfile}>
          <p className={styles.porfTitle}>
            <FontAwesomeIcon icon={faAddressCard} />
            <span>profile</span>
          </p>
          <div className={styles.porfContent}>
            <ul>
              <li>
                <span>Name</span>
                <span>반재원</span>
              </li>
              <li>
                <span>Birth</span>
                <span>1996.06.10</span>
              </li>
              <li>
                <span>City</span>
                <span>Daegu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.education}>
          <p className={styles.eduTitle}>
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>education</span>
          </p>
          <div className={styles.eduContent}>
            <ul>
              <li>
                <span>2023.04</span>
                <span>그린컴퓨터학원 'React 개발자 과정' 수료 예정</span>
              </li>
              <li>
                <span>2022.02</span>
                <span>
                  계명대학교 중국어문학전공 | 의료관광학전공 (복수전공) 졸업
                </span>
              </li>
              <li>
                <span>2015.02</span>
                <span>경원고등학교 졸업</span>
              </li>
            </ul>
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
