import Layout from "../../components/Layout/layout";
import styles from "./contact.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className={styles.contact}>
                <div className={styles.title}>Contact</div>
                <div className={styles.contacts}>
                    <div className={styles.kakao}>
                        <span>
                            <FontAwesomeIcon icon={faComments} />
                        </span>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/kakaoQR.jpg`}
                            alt="kakaoQR"
                            className={styles.kakaoQR}
                        />
                    </div>

                    <div className={styles.mail}>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <p>brand0610@naver.com</p>
                    </div>

                    <div className={styles.phone}>
                        <span>
                            <FontAwesomeIcon icon={faMobile} />
                        </span>
                        <p>010.5054.9000</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
