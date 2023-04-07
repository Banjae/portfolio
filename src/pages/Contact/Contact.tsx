import Layout from "../../components/Layout/layout";
import styles from "./contact.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className={styles.contact}>
                <div className={styles.title}>Contact</div>
                <div className={styles.contacts}>
                    <div className={styles.kakao}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/kakaoQR.jpg`}
                            alt="kakaoQR"
                            className={styles.kakaoQR}
                        />
                    </div>

                    <div className={styles.mail}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <p>brand0610@naver.com</p>
                    </div>

                    <div className={styles.phone}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faMobile} />
                        </div>
                        <p>010.5054.9000</p>
                    </div>
                    <p className={styles.message}>
                        관심있게 봐주셔서 감사합니다.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
