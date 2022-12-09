import React from "react";
import styles from "./styles.module.css";

const CreatePostPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>Create a post</h1>
      </div>
    </section>
  );
};

export default CreatePostPage;
