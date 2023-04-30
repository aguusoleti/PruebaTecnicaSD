import React from 'react';
import styles from './cards.module.css';
import {useGetProducts} from '@/pages/api/hello';
import Products from '@/containers/Products.js';


const Cards = () => {
    const API2 = "http://localhost:5000/api/products";
    const products = useGetProducts(API2);

    return (
        <div className={styles.grid}>
            {products.map((e, index) => {
                return(

                    <div key={index} >

                    <Products name={e.name} price={e.price} description={e.description} img={e.image_url}/>
                </div>
                    )
            })}

        </div>

    )
}

export default Cards;
