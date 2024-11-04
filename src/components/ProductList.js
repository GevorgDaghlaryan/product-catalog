import React from 'react';
import DataNotFound from '@/components/DataNotFound.js';
import ProductCard from '@/components/ProductCard.js';
import  styles from '@/app/page.module.css';

function ProductList({ products }) {
    return (
        products.length? <div className={styles.product_list}>{products.map(product => <ProductCard  key={product.id} product={product} />)}</div> : <DataNotFound />
    );
}

export default ProductList;
