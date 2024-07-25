import React from 'react'
import styles from '../styles/product2.module.css';

const ProductItem2 = (props) => {
    return (
        <>
            <div className={`${styles.item} ${props.data.category == "Lubricants" ? '' : styles.accesssoris}`}>
                {props.data.img ? <div className={styles.item_img}>
                    <img src={props.data.img && props.data.img[0]} className='img-fluid'  alt="" />
                </div> : ''}
                <div className={styles.content}>
                    {props.data.category == "Tires" || props.data.category == "Batteries" ? '' : <span className={styles.badge}>Premium Quality</span> }
                    <div className={styles.con}>
                        <div className={styles.grades}>
                            {props.data.grades && props.data.grades.map((item, index) => {
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                        <h3>{props.data.name}</h3>
                        {!props.category ? <a onClick={() => {props.setCategory(props.data.category);  props.setId(props.data.id); props.open(true) }} className={styles.icon}>
                            <i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i>
                        </a> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem2

