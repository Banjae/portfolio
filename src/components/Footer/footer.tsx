import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Card } from "../../components/Card/card";
import { Dock } from "../../components/Dock/dock";
import { DockCard } from "../../components/DockCard/dockCard";
import { DockDivider } from "../../components/DockDivider/dockDivider";
import styles from "./footer.module.scss";

const GRADIENTS = [
  {
    icon: `${process.env.PUBLIC_URL}/images/about.png`,
    link: "/about",
    content: "About",
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/team.png`,
    link: "/teamp",
    content: "TeamProject",
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/side.png`,
    link: "/sidep",
    content: "SideProject",
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/skills.png`,
    link: "/skills",
    content: "Skills",
  },
  {},
  {
    icon: `${process.env.PUBLIC_URL}/images/contact.png`,
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

  if (location.pathname === "/lock") return null;
  if (location.pathname === "*") return null;

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
                <span className={styles.tag} id={idx.toString()}>
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
