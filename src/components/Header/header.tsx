import React from "react";
import styles from "./header.module.scss";

import Clock from "react-live-clock";
import "moment/locale/ko";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const location = useLocation();
  if (location.pathname === "/lock") return null;
  return (
    <header>
      <div className={styles.headLeft}>
        <span>
          <FontAwesomeIcon icon={faGhost} />
        </span>
        <span>Banjae</span>
      </div>
      <div className={styles.headRight}>
        <Clock format="MM월 DD일 (dd) A hh:mm" ticking={true} />
      </div>
    </header>
  );
};

export default Header;
