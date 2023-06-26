import React from 'react'
import styles from './todo.module.css'
import {AiOutlineDelete} from 'react-icons/ai';
import {MdDoneOutline} from 'react-icons/md';

const Todo = ({title,onRemove,onEdit,todo,checked,font}) => {

  return (
    <div className={!checked ? (styles['todo']) : (`${styles['todo-completed']} ${styles['todo']}`)} style={{fontFamily:font}} >
        <li className={styles['item']}>{title}</li>
        <span className={styles['icon']} onClick={onEdit.bind(this, todo.id)}><MdDoneOutline/></span>
        <span className={styles['icon']} onClick={onRemove.bind(this, todo.id)}><AiOutlineDelete/></span>
        
    </div>
  )
}

export default Todo