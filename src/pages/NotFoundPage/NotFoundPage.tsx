import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>The page was not found</h1>
        <Link className={styles.btn} to="/">
          Return to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
