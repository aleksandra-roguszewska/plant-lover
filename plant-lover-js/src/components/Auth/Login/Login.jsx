import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import styles from "./Login.module.css";
import { toast } from "react-hot-toast";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    signInWithEmailAndPassword(auth, userEmail, userPassword).then(() =>
      toast("successful login")
    );
  };

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input placeholder="Email" type="email" id="email"></input>
      <input
        placeholder="Password"
        type="password"
        id="password"
        minLength={6}
      ></input>
      <button>Login</button>
      <p>{"Don't have an account yet?"}</p>
      <button>Register</button>
    </form>
  );
};

export default Login;
