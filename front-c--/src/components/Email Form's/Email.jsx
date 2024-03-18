import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Email.module.css";

const Index = () => {
  return (
    <div className={styles.index}>
      <div className={styles["overlap-group-wrapper"]}>
        <div className={styles["overlap-group"]}>
          <img
            className={styles.rectangle}
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/653065f63deb1d4d34253f82/releases/653ad1ef721cb8b980be2041/img/rectangle-33.svg"
          />
          <div className={styles.div} />
          <img
            className={styles.img}
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/653065f63deb1d4d34253f82/releases/653ad1ef721cb8b980be2041/img/rectangle-2.svg"
          />
          <img
            className={styles["rectangle-2"]}
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/653065f63deb1d4d34253f82/releases/653ad1ef721cb8b980be2041/img/rectangle-13.svg"
          />
          <img
            className={styles["rectangle-2"]}
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/653065f63deb1d4d34253f82/releases/653ad1ef721cb8b980be2041/img/rectangle-34.svg"
          />
          <div className={styles["rectangle-3"]} />
          <div className={styles["rectangle-4"]} />
          <div className={styles["rectangle-5"]} />
          <p className={styles.p}>YOUR EMAIL HAS BEEN SUCCESSFULLY CONFIRMED</p>
          <p className={styles["text-wrapper"]}>
            <Link to="/">Go back to the main page</Link>
          </p>
          <img
            className={styles["mini-logo"]}
            alt="Mini logo"
            src="https://cdn.animaapp.com/projects/653065f63deb1d4d34253f82/releases/653ad1ef721cb8b980be2041/img/mini-logo-1@2x.png"
          />
          <img
            className={styles["rectangle-6"]}
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/653065f63deb1d4d34253f82/releases/653ad1ef721cb8b980be2041/img/rectangle-45.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Index