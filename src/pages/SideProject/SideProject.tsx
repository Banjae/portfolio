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
                            src={`${process.env.PUBLIC_URL}/images/project/hansalim.png`}
                            alt="img"
                        />
                        <div className={styles.sideAbout}>
                            <span className={styles.sideTitle}>오뭐신?</span>
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
                                    href=""
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
                                src={`${process.env.PUBLIC_URL}/images/project/portfolio.png`}
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
                                src={`${process.env.PUBLIC_URL}/images/project/hansalim.png`}
                                alt="img"
                            />
                            <div className={styles.sideAbout}>
                                <span className={styles.sideTitle}>
                                    STX건설
                                </span>
                                <span className={styles.sideService}>
                                    "STX건설" 클론 코딩
                                </span>
                                <span className={styles.sideStack}>
                                    HTML | CSS
                                </span>
                                <div className={styles.sideLink}>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/link.png`}
                                            alt="gitHub"
                                        />
                                    </a>
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
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideR}>
                        <div className={styles.sideRT}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/project/hansalim.png`}
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
                                src={`${process.env.PUBLIC_URL}/images/project/stx.png`}
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

                {/* <div className={styles.aBox}>
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
                                    "오뭐신?" (개발중)
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Firebase
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div>


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
                                    "오뭐신?" (개발중)
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Firebase
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div>

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
                                    "오뭐신?" (개발중)
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>
                                2023.02 ~ ing
                            </span>
                            <span className={styles.aboutStack}>
                                React (with Typescript) / styled-components /
                                Firebase
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div>

                        <div className={styles.aBox}>
                            <a
                                href="https://banjae.github.io/hansalim/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/project/hansalim.png`}
                                    alt="img"
                                />
                            </a>
                        </div>
                        <div className={styles.aboutBox}>
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "한살림 장보기" 클론 코딩
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>2022.11</span>
                            <span className={styles.aboutStack}>
                                HTML / CSS / Javascript
                            </span>
                            <span>"한살림 장보기" 클론 코딩</span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div>

                        <div className={styles.aBox}>
                            <a
                                href="https://banjae.github.io/stx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="img" />
                            </a>
                        </div>
                        <div className={styles.aboutBox}>
                            <div className={styles.aboutTop}>
                                <span className={styles.aboutTitle}>
                                    "STX건설" 클론 코딩
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <span className={styles.aboutDate}>2022.11</span>
                            <span className={styles.aboutStack}>
                                HTML / CSS
                            </span>
                            <span>
                                '카카오맵 API' 와 'OpenWeatherMap API' 를
                                활용하여 유저가 설정한 지역의 날씨 데이터를
                                얻고, 그 날씨에 따라 신을 신발을 추천해주는
                                서비스
                            </span>
                            <div className={styles.aboutFunction}>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </div>
                        </div> */}
            </div>
        </Layout>
    );
};

export default SideProject;
