import React from 'react'
import styles from "./todo.module.css";

const TodosFooter = ({all, complete, uncomplete,tasks,done,open,font}) => {
  return (
    <div className={styles['content-footer']} style={{fontFamily:font}}>
        <p>{all} {tasks}</p>
        <p>{complete} {done}</p>
        <p>{uncomplete} {open}</p>
      </div>
  )
}

export default TodosFooter