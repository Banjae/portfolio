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
                </div>
            </div>
        </Layout>
    );
};

export default Skills;
