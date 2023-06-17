import styles from "./FormButtonSecondary.module.css";

const FormButtonSecondary = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.form_button}>
      {children}
    </button>
  );
};

export default FormButtonSecondary;
