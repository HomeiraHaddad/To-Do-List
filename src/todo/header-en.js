import React from "react";
import night from "./night.jpg";
import afternoon from "./afternoon.jpg";
import dayPic from "./day.jpg";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./todo.module.css";

const HeaderEn = () => {
  const [time, setTime] = useState("");
  const timer = () => {
    setInterval(() => {
      const t = new Date();
      setTime(t.toLocaleTimeString());
    }, 1000);
  };
  useEffect(() => {
    timer();
  }, [time]);
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();

  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];

  const enOrdinalRules = new Intl.PluralRules("en", { type: "ordinal" });
  const enOrdinalRulesMap = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)];

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
          <h1 className={`${styles["h1"]} ${styles['time']}`}>{`${time}`}</h1>
        </div>
        <div className={styles["date-cnt"]}>
          <h1 className={styles["h1"]}>{`${month} ${day}${enOrdinalSuffix}, ${year}`}</h1>
          <p className={styles["p"]}>{`${weekDay}`}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderEn;
