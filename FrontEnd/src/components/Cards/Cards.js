import React from 'react';
import styles from './cards.module.css';
import {useGetProducts} from '@/pages/api/hello';
import Products from '@/containers/Products.js';


const Cards = () => {
    const products = useGetProducts();

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
