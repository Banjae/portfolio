import Layout from "../../components/Layout/layout";
import styles from "./sideProject.module.scss";

const SideProject = () => {
    return (
        <Layout title="SideProject">
            <div className={styles.portfolio}>
                {/* 개인 프로젝트 */}
                <div className={styles.title}>Side Project</div>
                <div className={styles.sideProject}>
                    <div className={styles.sideL}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/weather.png`}
                            alt="img"
                        />
                        <div className={styles.sideAbout}>
                            <span className={styles.sideTitle}>
                                오뭐신? (개발중)
                            </span>
                            <span className={styles.sideService}>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 <br /> 유저가 설정한 지역의 날씨
                                데이터를 얻고, <br /> 그 날씨에 따라 신을 신발을
                                추천해주는 서비스입니다.
                            </span>
                            <span className={styles.sideStack}>
                                React (with Typescript) | Sass
                            </span>
                            <div className={styles.sideLink}>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/link.png`}
                                        alt="gitHub"
                                    />
                                </a>
                                <a
                                    href="https://github.com/Banjae/todayshoes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                        alt="gitHub"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideC}>
                        <div className={styles.sideCT}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/me.png`}
                                alt="img"
                            />
                            <div className={styles.sideAbout}>
                                <span className={styles.sideTitle}>
                                    포트폴리오
                                </span>
                                <span className={styles.sideService}>
                                    포트폴리오 웹사이트입니다.
                                </span>
                                <span className={styles.sideStack}>
                                    React (with Typescript) | CSS-Module
                                </span>
                                <div className={styles.sideLink}>
                                    <a
                                        href="https://banjae.github.io/portfolio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/link.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/Banjae/portfolio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sideCB}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/todo.png`}
                                alt="img"
                            />
                            <div className={styles.sideAbout}>
                                <span className={styles.sideTitle}>
                                    Todo-list
                                </span>
                                <span className={styles.sideService}>
                                    Firebase 와 MongoDB 를 활용하고 Cloudtype
                                    으로 <br />
                                    배포 연습을 해본 TODO 리스트 사이트입니다.
                                    <br />
                                    <br />
                                    ID : test1@test.com / PW : 123123
                                </span>
                                <span className={styles.sideStack}>
                                    React (with Javascript) | Emotion | Firebase
                                </span>
                                <div className={styles.sideLink}>
                                    <a
                                        href="https://port-0-todo-4fuvwk25lctz14cp.gksl2.cloudtype.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/link.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/Banjae/Todo_mongo_server"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideR}>
                        <div className={styles.sideRT}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/han.png`}
                                alt="img"
                            />
                            <div className={styles.sideAbout}>
                                <span className={styles.sideTitle}>
                                    한살림 장보기
                                </span>
                                <span className={styles.sideService}>
                                    "한살림 장보기" 클론 코딩 웹사이트입니다.
                                </span>
                                <span className={styles.sideStack}>
                                    HTML | CSS | Javascript
                                </span>
                                <div className={styles.sideLink}>
                                    <a
                                        href="https://banjae.github.io/hansalim/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/link.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/Banjae/hansalim"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sideRB}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/stx.png`}
                                alt="img"
                            />
                            <div className={styles.sideAbout}>
                                <span className={styles.sideTitle}>
                                    STX건설
                                </span>
                                <span className={styles.sideService}>
                                    "STX건설" 클론 코딩 웹사이트입니다.
                                </span>
                                <span className={styles.sideStack}>
                                    HTML | CSS
                                </span>
                                <div className={styles.sideLink}>
                                    <a
                                        href="https://banjae.github.io/stx/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/link.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/Banjae/stx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/gitB.png`}
                                            alt="gitHub"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SideProject;
