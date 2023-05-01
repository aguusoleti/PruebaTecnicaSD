import React from 'react';
import styles from './cards.module.css';
import {useGetProducts} from '@/pages/api/hello';
import ProductsAdmin from "../../containers/ProductsAdmin.js"

const CardsAdmin = () => {
    const products = useGetProducts();

    return (
        <div className={styles.adminGrid}>
            {products.map((e, index) => {
                return (

                    <div key={index} >

                        <ProductsAdmin name={e.name} price={e.price} description={e.description} img={e.image_url} id={e._id}/>
                    </div>
                )
            })}

        </div>

    )
}

export default CardsAdmin;
