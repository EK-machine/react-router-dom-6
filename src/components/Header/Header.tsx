import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { actNav } from "../../helpers/helpers";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavLink className={actNav} to="/">
        Home
      </NavLink>
      <NavLink className={actNav} to="/posts">
        Posts
      </NavLink>
      <NavLink className={actNav} to="/about">
        About
      </NavLink>
    </header>
  );
};

export default Header;
