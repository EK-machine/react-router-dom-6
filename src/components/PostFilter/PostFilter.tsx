import React, { useState } from "react";
import { SearchParamsType, PostFilterProps } from "../../types/types";
import styles from "./styles.module.css";

const PostFilter: React.FC<PostFilterProps> = ({setSearchParams, postQuery, latest}) => {
    const [search, setSearch] = useState<string>(postQuery);
    const [checked, setChecked] = useState<boolean>(latest);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target;
        const query = (form as unknown as {search: {value: string} }).search.value;
        const isLatest = (form as unknown as {latest: {checked: boolean}}).latest.checked;
        const params = {};
        if(query.length) (params as SearchParamsType).post = query;
        if(isLatest) (params as SearchParamsType).latest = true;
        setSearchParams(params);
      }

  return (
   
    <form autoComplete="off" onSubmit={handleSubmit}>
    <input className={styles.search} onChange={e => setSearch(e.target.value)} value={search} type="search" name="search" />
    <label className={styles.search} htmlFor="">
      <input type="checkbox" name="latest" checked={checked} onChange={e => setChecked(e.target.checked)} />
      New only
    </label>
    <input className={styles.btn} type="submit" value="Search" />
  </form>
  );
};

export default PostFilter;
