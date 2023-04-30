import React  from 'react'
import styles from './Buttom.module.css'


const PrimaryButtom = ({ text, left, top, type, onClick}) =>{

    return (

        <button
        className={styles.ButtomPrimary}
        style={{ left: left, top: top }}
        type={type}
        onClick={onClick}
      >
        <p>
          {text}
        </p>
      </button>
    )
}

export default PrimaryButtom;