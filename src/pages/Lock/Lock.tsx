import React from "react";
import styles from "./lock.module.scss";

type Props = {};

const Lock = (props: Props) => {
  return (
    <section className={styles.lockScreen}>
      <div className={styles.lock}>
        <img src="" alt="img" />
        <span>Banjae</span>
        <form>
          <input type="text" placeholder="암호입력"></input>
        </form>
      </div>
    </section>
  );
};

export default Lock;
