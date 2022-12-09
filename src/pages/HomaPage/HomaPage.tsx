import React from "react";
import styles from "./styles.module.css";

const HomePage: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>HomePage</h1>
      </div>
    </section>
  );
};

export default HomePage;
