import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../todo.module.css";
import { Link } from "react-router-dom";
import { FaRegHandPointLeft } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const AboutPage = () => {
  return (
    <div className={styles["cnt-about-page"]}>
      <Helmet title="About" />
      <h1 className={styles["about-h1"]}>درباره نرم افزار</h1>
      <p className={styles["about-p"]}>
        این یک نمونه فارسی نرم افزار "To do List" یا "لیست انجام کار" است، که
        برای مدیریت کارهای روزانه مورد استفاده قرار میگیرد، و توسط کتابخانه
        React.js طراحی شده است.
      </p>
      <span className={styles["cnt-link"]}>
        <FaRegHandPointLeft size={"20px"} />
        <Link to={""} className={styles["link"]}>
          مشاهده سورس کد در گیت هاب
        </Link>
      </span>
      <span className={styles["cnt-link"]}>
        <FaRegHandPointLeft size={"20px"} />
        <Link to={"/"} className={styles["link"]}>
          بازگشت به صفحه اصلی
        </Link>
      </span>
      <span className={styles["cnt-link"]}>
        <MdAccountCircle size={"20px"} />
        <p className={styles["author"]}>
          توسعه دهنده :
          <Link
            to={"https://www.linkedin.com/in/homeira-haddad-792ab226b"}
            target="_blank"
            className={styles["author-link"]}
          >
            حمیرا حداد
          </Link>
        </p>
      </span>
    </div>
  );
};

export default AboutPage;
