import { useState } from "react";
import Layout from "../../components/Layout/layout";
import styles from "./skills.module.scss";

interface ISkill {
    src: string;
    title: string;
    detail?: string[];
}

const Skills = () => {
    const list: ISkill[] = [
        {
            src: "react",
            title: "React",
            detail: [
                "useState, useEffect 등과 같은 Hooks 를 활용하여  상태 관리와 렌더링 작업을 보다 간편하게 처리할 수 있습니다.",
                "React Router DOM 을 이용하여 라우팅 처리를 할 수 있으며, SPA 의 개념과 동작 방식을 이해하고 있습니다.",
                "React 를 기반으로한 다양한 라이브러리를 활용하여 코드의 재사용성을 높이고,  개발 생산성을 향상시킬 수 있습니다.",
                "Axios 라이브러리를 사용하여 API 호출과 데이터 처리와 같은 비동기 통신을 보다 원활하게 할 수 있습니다.",
            ],
        },
        {
            src: "typescript",
            title: "TypeScript",
            detail: [
                "type 을 지정해주어 코드를 보다 안정적이고 신뢰성있게 향상시킬 수 있습니다.",
                "Interface 를 정의해 코드 재사용성을 높일 수 있습니다.",
                "컴포넌트 간의 타입 검사를 통해 실수를 줄이고, 더욱 안정적으로 만들 수 있습니다.",
            ],
        },
        {
            src: "javascript",
            title: "JavaScript",
            detail: [
                "폼 유효성 검사, 스크롤 이벤트 및 애니메이션 등과 같은 다양한 동적 기능을 구현할 수 있습니다.",
                "React 와 같은 JavaScript 프레임워크를 활용하여 웹 애플리케이션을 개발할 수 있습니다.",
            ],
        },
        {
            src: "html5",
            title: "HTML5",
            detail: [
                "HTML 기본 마크업을 숙지하고 웹 표준에 따라 작성할 수 있습니다.",
                "HTML 의 다양한 태그를 활용하여 웹 페이지를 구성할 수 있습니다.",
            ],
        },
        {
            src: "css3",
            title: "CSS3",
            detail: [
                "웹 페이지의 디자인과 레이아웃을 구성할 수 있습니다.",
                "사용자 경험을 향상시키는 반응형 웹 디자인 기술을 적용 할 수 있습니다.",
            ],
        },
    ];

    const list2 = [
        {
            src: "sass",
            title: "Sass",
            detail: [
                "Sass 의 기본적인 문법과 mixin 등을 활용하여 스타일링을 보다 편리하게 처리할 수 있습니다.",
                "Sass 를 사용하여 코드의 가독성을 높이고, 유지보수를 더욱 용이하게 할 수 있습니다.",
            ],
        },
        {
            src: "redux",
            title: "Redux",
            detail: [
                "Redux-toolkit 을 이용하여 여러 컴포넌트에서 공유하는 데이터를 효율적으로 관리할 수 있습니다.",
                "Redux-persist 를 이용하여 상태를 연속적으로 유지하고, 페이지 새로고침 등의 상황에서도 상태를 유지할 수 있습니다.",
            ],
        },
        {
            src: "git",
            title: "Git",
            detail: [
                "Git을 활용하여 소스 코드를 merge하고, 여러 명과 함께 작업하고 협업할 수 있습니다.",
                "GitKraken 을 사용하여 Git을 더욱 효율적으로 관리할 수 있습니다.",
            ],
        },
        {
            src: "nextjs",
            title: "Next.js",
            detail: [
                "Next.js 의 SSR 에 대해 이해하고 검색 엔진 최적화 (SEO) 를 용이하게 할 수 있습니다.",
                "Next.js 에서 제공하는 라우팅 기능을 이해하고 있습니다.",
            ],
        },
        {
            src: "firebase",
            title: "Firebase",
            detail: [
                "Firebase 를 이용하여 로그인과 회원가입 기능을 구현하고 사용자를 관리 할 수 있습니다.",
                "Firebase Database 를 이용하여 실시간으로 데이터를 저장하고 동기화 할수 있습니다.",
            ],
        },
    ];

    const [open, setOpen] = useState<string | null>(null);
    const [detail, setDetail] = useState<string[] | undefined>([]);

    const popup = (ele: ISkill) => {
        if (ele) {
            setDetail(ele.detail);
            setOpen(ele.title);
        }
    };

    const popdown = () => {
        setDetail([]);
        setOpen(null);
    };

    console.log(open, detail);

    return (
        <Layout title="Skills">
            <div className={styles.skill}>
                <div className={styles.title}>Skills</div>
                <div className={styles.skillBox}>
                    <div className={styles.skillList}>
                        {list.map((ele) => {
                            return (
                                <div
                                    className={styles.skill}
                                    key={ele.title}
                                    onMouseEnter={() => popup(ele)}
                                    onMouseLeave={popdown}
                                >
                                    <div className={styles.box}>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/skills/${ele.src}.png`}
                                            alt={ele.title}
                                        />
                                    </div>
                                    <span>{ele.title}</span>
                                    {open === ele.title && (
                                        <div className={styles.modalTop}>
                                            <span>{ele.title}</span>
                                            <ul>
                                                {ele.detail?.map((ele) => {
                                                    return (
                                                        <li key={ele}>{ele}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.skillList}>
                        {list2.map((ele) => {
                            return (
                                <div
                                    className={styles.skill}
                                    key={ele.title}
                                    onMouseEnter={() => popup(ele)}
                                    onMouseLeave={popdown}
                                >
                                    <div className={styles.box}>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/skills/${ele.src}.png`}
                                            alt={`${ele.title}`}
                                        />
                                    </div>
                                    <span>{ele.title}</span>
                                    {open === ele.title && (
                                        <div className={styles.modalBot}>
                                            <span>{ele.title}</span>
                                            <ul>
                                                {ele.detail?.map((ele) => {
                                                    return (
                                                        <li key={ele}>{ele}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Skills;
