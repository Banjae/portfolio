import anime from "animejs";
import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };

  return (
    <motion.section
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -600, opacity: 0 }}
    >
      <div className={styles.window}>
        <div className={styles.top}>
          <span className={styles.xBt} onClick={goHome}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <span className={styles.yBt}></span>
          <span className={styles.gBt}></span>
          <div>Banjae / {title}</div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </motion.section>
  );
};

export default Layout;
