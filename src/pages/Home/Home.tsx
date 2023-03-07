import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  const txt = `끊임없이 노력하고 도전하는 \n프론트엔드 개발자 반재원입니다.`;
  const [text, setText] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prevTxt) => {
        const result = prevTxt ? prevTxt + txt[count] : txt[0];
        setCount(count + 1);

        if (count >= txt.length) {
          return txt;
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <motion.section
      initial={{ x: 1920, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1920, opacity: 0 }}
    >
      <div className={styles.home}>
        <div>
          <img />
          <p>{text}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
