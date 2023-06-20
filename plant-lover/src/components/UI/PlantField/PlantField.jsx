import styles from "./PlantField.module.css";

const PlantField = ({ imageURL, name, location }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={imageURL}></img>
      </div>
      <div className={styles.text_container}>
        <p className={styles.caption_bold}>{name}</p>
        <p className={styles.caption}>{location}</p>
      </div>
    </div>
  );
};

export default PlantField;
