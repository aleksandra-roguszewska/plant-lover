import styles from "./FormButtonMain.module.css";

const FormButtonMain = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.form_button}>
      {children}
    </button>
  );
};

export default FormButtonMain;
