import React from "react";
import styles from "./home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ x: 1920, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1920, opacity: 0 }}
    >
      <div className={styles.home}>
        <p>
          끊임없이 노력하고 도전하는
          <br />
          프론트엔드 개발자 "반재원"입니다.
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
