import React from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.landing__container}>
      <div className={styles.navbar}>
        <span className={styles.navbar__menu__text}>Menu1</span>
        <div className={styles.navbar__menu}>
          <span className={styles.navbar__menu__text}>Menu2</span>
          <span className={styles.navbar__menu__text}>Menu3</span>
          <span className={styles.navbar__menu__text}>Menu4</span>
        </div>
      </div>

      <div className={styles.landing__content__container}>
        <div className={styles.landing__content}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span className={styles.landing__title}>Title Content</span>
            <span className={styles.landing__subtitle}>Subtitle Content</span>
          </div>
          <button className={styles.btn__primary}>Click me</button>
        </div>
        <div />
      </div>
    </div>
  );
}
