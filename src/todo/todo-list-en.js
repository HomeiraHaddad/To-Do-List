import React from 'react'
import styles from './todo.module.css'
import Content from './content'
import Footer from './footer'
import { Helmet } from 'react-helmet-async'
import HeaderEn from './header-en'

const TodoListEn = () => {
  return (
    <div className={styles['todo-container-en']}>
        <Helmet title='To-Do List'/>
        <HeaderEn/>
        <Content
            title={"Add"}
            placeHolder={"Subject..."}
            all={"All"}
            completed={"Completed"}
            uncompleted={"Uncompleted"}
            message={"You're all caught up!"}
            direction='ltr'
            tasks={'tasks'}
            task={'task'}
            done={'done'}
            open={'open'}
            font={'f2'}
        />
        <Footer about={'About'}/>
    </div>
  )
}

export default TodoListEn