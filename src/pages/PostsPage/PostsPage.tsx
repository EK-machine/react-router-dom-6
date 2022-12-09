import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { PostBody } from "../../types/types";
import { Link } from "react-router-dom";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostBody[] | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: PostBody[]) => setPosts(data));
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>PostsPage</h1>
        {posts
          ? posts.map((post) => (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <li>{post.title}</li>
              </Link>
            ))
          : null}
      </div>
    </section>
  );
};

export default PostsPage;
