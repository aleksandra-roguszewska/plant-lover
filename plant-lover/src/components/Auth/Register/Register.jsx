import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((jwt) => {
        console.log(jwt);
        setDoc(doc(db, "users", jwt.user.uid), {
          userEmail: userEmail,
        });
      })
      .then(() => navigate("/plants"))
      .catch((error) => {
        console.log(error);
        toast("error", error);
      });
    //Tu dorobic obsługę błędów
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h1>Register</h1>
      <input placeholder="Name" type="text" id="name" name="name"></input>
      <input
        placeholder="Profile picture"
        type="file"
        id="profilePicture"
        name="profilePicture"
      ></input>
      <input placeholder="Email" type="email" name="email" id="email"></input>
      <input
        placeholder="Password"
        type="password"
        minLength={6}
        name="password"
        id="password"
      ></input>
      <input
        placeholder="Confirm password"
        type="password"
        minLength={6}
        name="passwordConfirm"
        id="passwordConfirm"
      ></input>
      <button>Register</button>
      <p>{"Already have an account?"}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/login");
        }}
      >
        Login
      </button>
    </form>
  );
};

export default Register;
