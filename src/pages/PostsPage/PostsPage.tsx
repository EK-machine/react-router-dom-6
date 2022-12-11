import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { PostBody, SearchParamsType } from "../../types/types";
import { Link, useSearchParams } from "react-router-dom";

import PostFilter from '../../components/PostFilter/PostFilter';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostBody[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const latest = searchParams.has('latest');

  const starts = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: PostBody[]) => setPosts(data));
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>Posts Page</h1>
        <div className={styles.formAdd} >
          <PostFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
          <Link className={styles.btn} to={`/posts/new`}>
            Add new post
          </Link>
        </div>
        {posts
          ? posts.filter(post => post.title.includes(postQuery) && post.id >= starts).map((post) => (
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
