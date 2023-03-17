import React from "react";
import Layout from "../../components/Layout/layout";
import styles from "./skills.module.scss";

const Skills = () => {
    const list = [
        { src: "html5", title: "HTML5" },
        { src: "css3", title: "CSS3" },
        { src: "javascript", title: "JavaScript" },
        { src: "typescript", title: "TypeScript" },
        { src: "react", title: "React" },
        { src: "nextjs", title: "Next.js" },
        { src: "sass", title: "Sass" },
        { src: "bootstrap", title: "BootStrap" },
        { src: "tailwindcss", title: "Tailwind" },
        { src: "styledcomponents", title: "styled" },
        { src: "redux", title: "Redux" },
        { src: "github", title: "GitHub" },
        { src: "yarn", title: "Yarn" },
    ];

    return (
        <Layout title="Skills">
            <div className={styles.skill}>
                <span className={styles.title}>Skills</span>
                <div className={styles.skillBox}>
                    {list.map((ele) => {
                        return (
                            <div className={styles.skillList} key={ele.title}>
                                <div className={styles[ele.src]}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/skills/${ele.src}.svg`}
                                        alt={`${ele.title}`}
                                    />
                                </div>
                                <span>{ele.title}</span>
                            </div>
                        );
                    })}
                    {/* <div>
                    <span>Markup</span>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.html}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/html5.svg`}
                                    alt="html"
                                />
                                <span>HTML5</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.css}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/css3.svg`}
                                    alt="css"
                                />
                                <span>CSS3</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Language</span>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.javascript}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/javascript.svg`}
                                    alt="javascript"
                                />
                                <span>JavaScript</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.typescript}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/typescript.svg`}
                                    alt="typescript"
                                />
                                <span>TypeScript</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Front</span>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.react}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/react.svg`}
                                />
                                <span>React</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.nextjs}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/nextdotjs.svg`}
                                />
                                <span>Next.js</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.redux}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/redux.svg`}
                                />
                                <span>Redux</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.fontawesome}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/fontawesome.svg`}
                                />
                                <span>FontAwesome</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.sass}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/sass.svg`}
                                />
                                <span>Sass</span>
                            </div>
                        </li>

                        <li>
                            <div className={styles.tailwind}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/tailwindcss.svg`}
                                />
                                <span>Tailwind</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.bootstrap}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/bootstrap.svg`}
                                />
                                <span>Bootstrap</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.styledcomponents}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/styledcomponents.svg`}
                                />
                                <span>styled</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.mui}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/mui.svg`}
                                />
                                <span>MUI</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.antdesign}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/antdesign.svg`}
                                />
                                <span>Ant Design</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Package Manager</span>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.npm}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/npm.svg`}
                                />
                                <span>npm</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.yarn}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/yarn.svg`}
                                />
                                <span>Yarn</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Source Control</span>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.github}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/github.svg`}
                                />
                                <span>GitHub</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.sourcetree}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/sourcetree.svg`}
                                />
                                <span>Sourcetree</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.gitkraken}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/gitkraken.svg`}
                                />
                                <span>GitKraken</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Team Collaboration Tool</span>
                    <ul className={styles.skillList}>
                        <li>
                            <div className={styles.slack}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/slack.svg`}
                                />
                                <span>Slack</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.notion}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/skills/notion.svg`}
                                />
                                <span>Notion</span>
                            </div>
                        </li>
                    </ul>
                </div> */}
                </div>
            </div>
        </Layout>
    );
};

export default Skills;
