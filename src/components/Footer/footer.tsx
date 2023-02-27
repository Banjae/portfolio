import React, { LegacyRef, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Card } from "../../components/Card/card";
import { Dock } from "../../components/Dock/dock";
import { DockCard } from "../../components/DockCard/dockCard";
import { DockDivider } from "../../components/DockDivider/dockDivider";
import styles from "./footer.module.scss";

const GRADIENTS = [
  {
    icon: "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
    link: "/portfolio",
    content: "Portfolio",
  },
  {
    icon: "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
    link: "/skills",
    content: "Skills",
  },
  {
    icon: "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
    link: "/vision",
    content: "Vision",
  },
  {
    icon: "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
    link: "/",
  },
  {
    icon: "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
    link: "/",
  },
  {},
  {
    icon: "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
    link: "/",
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
