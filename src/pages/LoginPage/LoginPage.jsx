// import React, { ReactHTMLElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useAuth from "../../hooks/useAuth";
import Btn from "../../components/Btn/Btn";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.userName.value;
    const cb = () => navigate(fromPage, { replace: true });
    signIn(user, cb);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Login Page</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Name: <input name="userName" />
        </label>
        <Btn type="submit" text="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
