import React  from 'react'
import styles from './Buttom.module.css'


const SecondaryButtom = ({ text, left, top, type, onClick}) =>{

    return (

        <button
        className={styles.SecondaryButtom}
        style={{ left: left, top: top }}
        type={type}
        onClick={onClick}
      >
        <p styles={{color:'black'}}>
          {text}
        </p>
      </button>
    )
}

export default SecondaryButtom;