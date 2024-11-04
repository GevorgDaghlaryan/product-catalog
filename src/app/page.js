"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchProducts } from '@/api/mockApi';
import Filters from '@/components/Filters';
import ProductList from '@/components/ProductList';
import styles from './page.module.css';
import { CircularProgress } from '@mui/material';

function ProductCatalog() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState(() => {
        const savedFilters = JSON.parse(localStorage.getItem('filters'));
        return savedFilters || {
            category: '',
            brand: '',
            priceRange: [0, 500],
            ratingRange: [0, 5],
            search: '',
            sortOrder: ''
        };
    });

    const memoizedFilters = useMemo(() => filters, [filters]);


    const fetchFilteredProducts = useCallback(async () => {
        setLoading(true);
        try {
            const products = await fetchProducts(memoizedFilters);
            setFilteredProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }, [memoizedFilters]);

    useEffect(() => {
         fetchFilteredProducts();
        if (typeof window !== "undefined") {
            localStorage.setItem('filters', JSON.stringify(memoizedFilters));
        }
    }, [memoizedFilters, fetchFilteredProducts]);

    return (
        <div className={styles.home}>
            <Filters filters={filters} setFilters={setFilters} />
            {loading ? (
                <div className={styles.loader_wrapper}>
                    <CircularProgress />
                </div>
            ) : (
                <ProductList products={filteredProducts} />
            )}
        </div>
    );
}

export default React.memo(ProductCatalog);
