import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { actNav } from "../../helpers/helpers";
import Btn from "../Btn/Btn";
import useAuth from "../../hooks/useAuth";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { user, signOut } = useAuth();

  return (
    <header className={styles.header}>
      <Btn onClick={goBack} extraClassName={styles.btnBack} text="Go back" />
      <NavLink className={actNav} to="/">
        Home
      </NavLink>
      <NavLink className={actNav} to="/posts">
        Posts
      </NavLink>
      <NavLink className={actNav} to="/about">
        About
      </NavLink>
      {user && <Btn text={"Sign out"} extraClassName={styles.btnSignOut} onClick={() => signOut()} />}
    </header>
  );
};

export default Header;
