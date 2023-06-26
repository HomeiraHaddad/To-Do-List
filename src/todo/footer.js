import React from 'react'
import styles from './todo.module.css'
import {FcAbout} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Footer = ({about}) => {
  


  return (
    <div className={styles['cnt-about']}>
      <div className={styles['div-footer']}>
        {about === 'درباره نرم افزار' ? (
          <Link to='/about/fa' className={styles['about']}>{about}</Link>
        ): about === 'About' ? (
          <Link to='/about/en' className={styles['about']}>{about}</Link>
        ): null}
        <FcAbout/>
      </div>
      <div className={styles['div-footer']}>
        <Link to='/fa' className={styles['about']}>فارسی</Link>
        <Link to='/en' className={styles['about']}>English</Link> 
      </div>
        
    </div>
  )
}

export default Footer