import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

const EditPostPage: React.FC = () => {
  const { id } = useParams();
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>Edit post {id}</h1>
      </div>
    </section>
  );
};

export default EditPostPage;
