import React from "react";
import styles from "./todo.module.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";

const TodoList = () => {

  return (
    <div className={styles["todo-container"]}>
      <Helmet title="To-Do List" />
      <Header />
      <Content
        title={"افزودن"}
        placeHolder={"عنوان مورد نظر را وارد کنید..."}
        all={"همه"}
        completed={"انجام شده"}
        uncompleted={"انجام نشده"}
        message={'موردی برای نمایش وجود ندارد'}
        task={'مورد'}
        tasks={'مورد'}
        done={'انجام شده'}
        open={'انجام نشده'}
        font={'f1'}
      />
      <Footer about={'درباره نرم افزار'}/>
    </div>
  );
};

export default TodoList;
