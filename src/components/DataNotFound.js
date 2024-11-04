import React from 'react';
import styles from '../app/page.module.css';

function DataNotFound() {
    return (
        <div className={styles.data_not_found}>
            <p>No products found.</p>
        </div>
    );
}

export default DataNotFound;