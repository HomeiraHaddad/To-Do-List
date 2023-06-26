import React from "react";
import night from "./night.jpg";
import afternoon from "./afternoon.jpg";
import dayPic from "./day.jpg";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./todo.module.css";

const Header = () => {
  const [time, setTime] = useState("");
  const timer = () => {
    setInterval(() => {
      const t = new Date();
      setTime(t.toLocaleTimeString("fa-IR"));
    }, 1000);
  };
  useEffect(() => {
    timer();
  }, [time]);
  const date = new Date();
  const day = date.getDate();
  const year = date.toLocaleDateString("fa-IR");

  const weekDay = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ][date.getDay()];

  const month = [
    "دی",
    "بهمن",
    "اسفند",
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
  ][date.getMonth()];

  const [hour, setHour] = useState("");
  const HeaderImage = () => {
    setHour(date.getHours());
  };

  useEffect(() => {
    HeaderImage();
  }, [time]);

  return (
    <div className={styles["header-container"]}>
      {hour >= 6 && hour < 16 ? (
        <img src={dayPic} alt="day" className={styles["header-background"]} />
      ) : hour >= 16 && hour < 20 ? (
        <img
          src={afternoon}
          alt="afternoon"
          className={styles["header-background"]}
        />
      ) : hour >= 20 || hour <= 5 ? (
        <img src={night} alt="night" className={styles["header-background"]} />
      ) : null}
      <div
        className={
          hour >= 6 && hour < 16
            ? `${styles["time-date-cnt"]} ${styles['day']}`
            : hour >= 16 && hour < 20
            ? `${styles["time-date-cnt"]} ${styles['afternoon']}`
            : hour >= 20 || hour <= 5
            ? `${styles["time-date-cnt"]} ${styles['night']}`
            : null
        }
      >
        <div className={styles["time-cnt"]}>
          <h1 className={styles["h1"]}>{`${time}`}</h1>
          <p className={styles["p"]}>{`${month}`}</p>
        </div>
        <div className={styles["date-cnt"]}>
          <h1 className={styles["h1"]}>{`${weekDay}`}</h1>
          <p className={styles["p"]}>{`${year}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
