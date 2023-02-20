import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.window}>
      <div className={styles.top}>
        <span onClick={goHome}>x</span>
        <div>portfolio</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
