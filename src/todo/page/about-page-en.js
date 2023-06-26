import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../todo.module.css";
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const AboutPageEn = () => {
  return (
    <div className={styles["cnt-about-page"]} style={{direction:'ltr'}}>
      <Helmet title="About" />
      <h1 className={styles["about-h1"]}>About</h1>
      <p className={styles["about-p"]}>
      This is a to-do list app that developed with ReactJs.
      </p>
      <span className={styles["cnt-link"]}>
        <FaRegHandPointRight size={"20px"} />
        <Link to={""} className={styles["link"]}>
        View the code on GitHub
        </Link>
      </span>
      <span className={styles["cnt-link"]}>
        <FaRegHandPointRight size={"20px"} />
        <Link to={"/"} className={styles["link"]}>
        Back to Todo List
        </Link>
      </span>
      <span className={styles["cnt-link"]}>
        <MdAccountCircle size={"20px"} />
        <p className={styles["author"]}>
        Reactjs Developer :
          <Link
            to={"https://www.linkedin.com/in/homeira-haddad-792ab226b"}
            target="_blank"
            className={styles["author-link"]}
          >
            Homeira Haddad
          </Link>
        </p>
      </span>
    </div>
  );
};

export default AboutPageEn;
