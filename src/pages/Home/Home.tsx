import { useEffect, useState } from "react";
import styles from "./home.module.scss";

const Home = () => {
    const firstTxt = "Deep Dive 할 수 있는";
    const secondTxt = "프론트엔드 개발자 반재원입니다";
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [count, setCount] = useState<number>(0);
    const [resume, setResume] = useState<boolean>(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (count < firstTxt.length) {
                setText1((prevTxt) => prevTxt + firstTxt[count]);
            } else if (
                count >= firstTxt.length &&
                count < firstTxt.length + secondTxt.length
            ) {
                setText2(
                    (prevTxt) => prevTxt + secondTxt[count - firstTxt.length]
                );
            }

            setCount((prevCount) => prevCount + 1);
        }, 90);

        return () => {
            clearInterval(typingInterval);
        };
    }, [count]);

    useEffect(() => {
        const resumeInterval = setTimeout(() => {
            setResume(true);
        }, 3400);

        return () => {
            clearTimeout(resumeInterval);
        };
    }, []);

    return (
        <section className={styles.home}>
            <div className={styles.homeContent}>
                <img alt="emoji" />
                <div className={styles.homeRight}>
                    <div className={styles.text}>
                        <span className={styles.text1}>{text1}</span>
                        <span className={styles.text2}>{text2}</span>
                    </div>
                    <a
                        href={`${process.env.PUBLIC_URL}/resume.pdf`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div
                            className={`${styles.visible} ${
                                resume ? styles.show : styles.hidden
                            }`}
                        >
                            <span>이력서 다운로드</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/click.png`}
                                alt="download"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
