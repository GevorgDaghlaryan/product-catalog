import React from 'react';
import  styles from '../app/page.module.css';
import Image from 'next/image';

function ProductCard({ product }) {
    return (
        <div className={styles.product_card}>
            <h3 className={styles.product_card_name}>{product.name}</h3>
            <Image width={100} height={100} src={product.imageUrl} alt={product.name}/>
            <p className={styles.product_card_category}>{product.category}</p>
            <p className={styles.product_card_price}>Price: ${product.price}</p>
            <p className={styles.product_card_rating}>Rating: {product.id}</p>
        </div>
    );
}

export default ProductCard;
