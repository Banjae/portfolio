import React from "react";
import styles from "./home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.title}>Banjae</div>
    </motion.section>
  );
};

export default Home;
