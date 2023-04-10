import Layout from "../../components/Layout/layout";
import styles from "./about.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Layout title="About">
      <div className={styles.about}>
        <div className={styles.title}>About</div>
        <div className={styles.aboutContent}>
          <div className={styles.contLeft}>
            <div className={styles.introduce}>
              <div className={styles.introContent}>
                개발은 <span>설명서 없는 레고</span>
                라고 생각합니다.
                <br />
                설명서가 없기에 만들고 싶은 모든 것을 만들 수 있습니다.
                <br />그 모든 것들을 만들기 위해
                <span> 배움을 망설이지 않는</span>,
                <br />
                <span>Deep Dive</span> 할 수 있는 개발자가 되겠습니다.
              </div>
            </div>
            <div className={styles.education}>
              <span className={styles.eduTitle}>Education</span>
              <div className={styles.eduContent}>
                <div>
                  <p className={styles.eduCate}>
                    <span>2023.04</span>
                    <span className={styles.edu}>
                      기업요구를 반영한 프로젝트 중심 '프론트엔드 React 개발자
                      과정' 수료
                    </span>
                  </p>
                  <p className={styles.eduCate}>
                    <span>2022.02</span>
                    <span className={styles.edu}>
                      계명대학교 중국어문학전공 | 의료관광학전공 (복수전공) 졸업
                    </span>
                  </p>
                  <p className={styles.eduCate}>
                    <span>2015.02</span>
                    <span className={styles.edu}>경원고등학교 졸업</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.resume}>
              <span className={styles.resumeTitle}>Resume</span>
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
                <button>
                  <span>이력서 다운로드</span>
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </a>
            </div>
          </div>
          <div className={styles.contRight}>
            <span className={styles.name}>반재원</span>
            <span className={styles.info}>1996.06.10 | 대구 </span>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="img"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
