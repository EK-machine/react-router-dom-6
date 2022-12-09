import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostBody } from "../../types/types";
import styles from "./styles.module.css";

const SinglePostPage: React.FC = () => {
  const [post, setPost] = useState<PostBody | null>(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data: PostBody) => setPost(data));
  }, [id]);
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        {post ? (
          <>
            <h1 className={styles.heading}>{post.title}</h1>
            <h2 className={styles.headingSmall}>{post.id}</h2>
            <p className={styles.postText}>{post.body}</p>
            <Link className={styles.btn} to={`/posts/${id}/edit`}>
              Edit post
            </Link>
          </>
        ) : (
          <h1 className={styles.heading}>Loading...</h1>
        )}
      </div>
    </section>
  );
};

export default SinglePostPage;
