import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useAuth from "../../hooks/useAuth";
import Btn from "../../components/Btn/Btn";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const user = (form as unknown as {userName: {value: string} }).userName.value;
    const cb = () => navigate(fromPage, { replace: true });
    signIn(user, cb);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Login Page</h1>
      <form className={styles.form} onSubmit={handleSignIn}>
        <label className={styles.label}>
          Name: <input name="userName" />
        </label>
        <Btn type="submit" text="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
