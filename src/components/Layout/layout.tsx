import anime from "animejs";
import React, { ReactNode, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  console.log(title);
  const window = useRef(null);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const element = window.current;
    anime({
      targets: element,
      opacity: "1",
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div className={styles.window} ref={window}>
      <div className={styles.top}>
        <span onClick={goHome}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <div>{title}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
