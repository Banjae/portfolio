import * as React from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components/Card/card";
import { Dock } from "../../components/Dock/dock";
import { DockCard } from "../../components/DockCard/dockCard";
import { DockDivider } from "../../components/DockDivider/dockDivider";
import styles from "./footer.module.scss";

const GRADIENTS = [
  "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
  null,
  "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
];

const Footer = () => {
  return (
    <footer>
      <Dock>
        {GRADIENTS.map((src, index) =>
          src ? (
            <DockCard key={src}>
              <Link to="/portfolio">
                <Card src={src} />
              </Link>
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
      <span>Copyright ⓒ Tarolong All Right Reserved.</span>
    </footer>
  );
};

export default Footer;
