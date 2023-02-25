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
      initial={{ x: 1920, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1920, opacity: 0 }}
    >
      <div className={styles.window}>
        <div className={styles.top}>
          <span onClick={goHome}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <div>Banjae / {title}</div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </motion.section>
  );
};

export default Layout;
