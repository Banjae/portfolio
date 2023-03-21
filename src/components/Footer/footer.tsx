import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Card } from "../../components/Card/card";
import { Dock } from "../../components/Dock/dock";
import { DockCard } from "../../components/DockCard/dockCard";
import { DockDivider } from "../../components/DockDivider/dockDivider";
import styles from "./footer.module.scss";

const GRADIENTS = [
    {
        icon: `${process.env.PUBLIC_URL}/images/timeline.png`,
        link: "/about",
        content: "About",
    },
    {
        icon: `${process.env.PUBLIC_URL}/images/people.png`,
        link: "/teamp",
        content: "TeamProject",
    },
    {
        icon: `${process.env.PUBLIC_URL}/images/leader.png`,
        link: "/sidep",
        content: "SideProject",
    },
    {
        icon: `${process.env.PUBLIC_URL}/images/management.png`,
        link: "/skills",
        content: "Skills",
    },
    {
        icon: `${process.env.PUBLIC_URL}/images/aim.png`,
        link: "/vision",
        content: "Vision",
    },
    {},
    {
        icon: `${process.env.PUBLIC_URL}/images/id-card.png`,
        link: "/contact",
        content: "Contact",
    },
];

const Footer = () => {
    const location = useLocation();
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const hover = (idx: number) => {
        setIsHovering(true);
        document.getElementById(idx.toString())?.classList.add(styles.hover);
    };

    const notHover = (idx: number) => {
        setIsHovering(false);
        document.getElementById(idx.toString())?.classList.remove(styles.hover);
    };

    if (location.pathname === "/portfolio") return null;
    return (
        <footer>
            <div className={styles.docks}>
                <Dock>
                    {GRADIENTS.map((src, idx) =>
                        src.icon ? (
                            <div
                                className={styles.dock}
                                onMouseOver={() => hover(idx)}
                                onMouseLeave={() => notHover(idx)}
                                key={idx}
                            >
                                <span
                                    className={styles.tag}
                                    id={idx.toString()}
                                >
                                    {src.content}
                                </span>
                                <DockCard key={idx}>
                                    <Link to={src.link}>
                                        <Card src={src.icon} />
                                    </Link>
                                </DockCard>
                            </div>
                        ) : (
                            <DockDivider key={idx} />
                        )
                    )}
                </Dock>
            </div>
        </footer>
    );
};

export default Footer;
